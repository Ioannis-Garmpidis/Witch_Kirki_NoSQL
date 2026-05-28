use('witch_kirki');

// =========================================
// ΒΗΜΑ 8 - Aggregation Framework
// =========================================

// A1: Συνολικά έσοδα ανά κατηγορία προϊόντος
db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: {
      from: "products",
      localField: "items.product_id",
      foreignField: "_id",
      as: "product_info"
  }},
  { $unwind: "$product_info" },
  { $group: {
      _id: "$product_info.category",
      total_revenue: { $sum: { $multiply: ["$items.quantity", "$items.unit_price"] } },
      total_orders: { $sum: 1 }
  }},
  { $sort: { total_revenue: -1 } }
]);

// A2: Μέσος όρος rating ανά προϊόν
db.reviews.aggregate([
  { $group: {
      _id: "$product_id",
      avg_rating: { $avg: "$rating" },
      total_reviews: { $sum: 1 }
  }},
  { $lookup: {
      from: "products",
      localField: "_id",
      foreignField: "_id",
      as: "product_info"
  }},
  { $unwind: "$product_info" },
  { $project: {
      product_name: "$product_info.name",
      avg_rating: { $round: ["$avg_rating", 2] },
      total_reviews: 1
  }},
  { $sort: { avg_rating: -1 } }
]);

// A3: Top 5 πελάτες βάσει συνολικών αγορών
db.orders.aggregate([
  { $group: {
      _id: "$customer_id",
      total_spent: { $sum: "$total_price" },
      total_orders: { $sum: 1 }
  }},
  { $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "_id",
      as: "customer_info"
  }},
  { $unwind: "$customer_info" },
  { $project: {
      full_name: { $concat: ["$customer_info.first_name", " ", "$customer_info.last_name"] },
      total_spent: 1,
      total_orders: 1
  }},
  { $sort: { total_spent: -1 } },
  { $limit: 5 }
]);

// A4: Συνολικές κινήσεις αποθέματος ανά τύπο
db.inventory_logs.aggregate([
  { $group: {
      _id: "$change_type",
      total_quantity: { $sum: "$quantity_change" },
      total_movements: { $sum: 1 }
  }},
  { $sort: { total_movements: -1 } }
]);

// A5: Μηνιαία έσοδα
db.orders.aggregate([
  { $group: {
      _id: { 
        year: { $year: "$order_date" },
        month: { $month: "$order_date" }
      },
      monthly_revenue: { $sum: "$total_price" },
      total_orders: { $sum: 1 }
  }},
  { $sort: { "_id.year": 1, "_id.month": 1 } }
]);

// =========================================
// ΒΗΜΑ 9 - Νέα Collections από Aggregation
// =========================================

// Νέο collection: category_revenue_summary
db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: {
      from: "products",
      localField: "items.product_id",
      foreignField: "_id",
      as: "product_info"
  }},
  { $unwind: "$product_info" },
  { $group: {
      _id: "$product_info.category",
      total_revenue: { $sum: { $multiply: ["$items.quantity", "$items.unit_price"] } },
      total_orders: { $sum: 1 },
      avg_order_value: { $avg: { $multiply: ["$items.quantity", "$items.unit_price"] } }
  }},
  { $sort: { total_revenue: -1 } },
  { $out: "category_revenue_summary" }
]);

// Νέο collection: customer_lifetime_value
db.orders.aggregate([
  { $group: {
      _id: "$customer_id",
      total_spent: { $sum: "$total_price" },
      total_orders: { $sum: 1 },
      avg_order_value: { $avg: "$total_price" },
      last_order_date: { $max: "$order_date" }
  }},
  { $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "_id",
      as: "customer_info"
  }},
  { $unwind: "$customer_info" },
  { $project: {
      full_name: { $concat: ["$customer_info.first_name", " ", "$customer_info.last_name"] },
      email: "$customer_info.email",
      total_spent: 1,
      total_orders: 1,
      avg_order_value: { $round: ["$avg_order_value", 2] },
      last_order_date: 1
  }},
  { $sort: { total_spent: -1 } },
  { $out: "customer_lifetime_value" }
]);

// Νέο collection: product_performance
db.reviews.aggregate([
  { $group: {
      _id: "$product_id",
      avg_rating: { $avg: "$rating" },
      total_reviews: { $sum: 1 }
  }},
  { $lookup: {
      from: "products",
      localField: "_id",
      foreignField: "_id",
      as: "product_info"
  }},
  { $unwind: "$product_info" },
  { $project: {
      product_name: "$product_info.name",
      category: "$product_info.category",
      price: "$product_info.price",
      avg_rating: { $round: ["$avg_rating", 2] },
      total_reviews: 1
  }},
  { $sort: { avg_rating: -1 } },
  { $out: "product_performance" }
]);

// A6: $bucket - Ομαδοποίηση προϊόντων σε εύρη τιμών
db.products.aggregate([
  { $bucket: {
      groupBy: "$price",
      boundaries: [0, 20, 50, 100, 300],
      default: "300+",
      output: {
        count: { $sum: 1 },
        products: { $push: "$name" },
        avg_price: { $avg: "$price" }
      }
  }}
]);

// A7: $facet - Πολλαπλά aggregation αποτελέσματα σε ένα query
db.products.aggregate([
  { $facet: {
      by_category: [
        { $group: { _id: "$category", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ],
      by_pet_type: [
        { $group: { _id: "$pet_type", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ],
      price_stats: [
        { $group: {
            _id: null,
            avg_price: { $avg: "$price" },
            max_price: { $max: "$price" },
            min_price: { $min: "$price" }
        }}
      ]
  }}
]);

// A8: $addFields - Προσθήκη υπολογισμένων πεδίων
db.products.aggregate([
  { $addFields: {
      price_with_vat: { $round: [{ $multiply: ["$price", 1.24] }, 2] },
      stock_status: {
        $switch: {
          branches: [
            { case: { $lt: ["$stock", 20] }, then: "Critical" },
            { case: { $lt: ["$stock", 50] }, then: "Low" },
            { case: { $lt: ["$stock", 100] }, then: "Medium" }
          ],
          default: "High"
        }
      }
  }},
  { $project: { name: 1, price: 1, price_with_vat: 1, stock: 1, stock_status: 1 } }
]);

// A9: Εξατομικευμένες προτάσεις προϊόντων για πελάτη
// Λογική: Βρες τι είδος ζώου έχει ο πελάτης και πρότεινε
// προϊόντα που δεν έχει αγοράσει ακόμα

db.customers.aggregate([
  // Επιλογή του Michael Jordan
  { $match: { first_name: "Michael", last_name: "Jordan" } },
  
  // Εύρεση παραγγελιών του
  { $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "customer_id",
      as: "orders"
  }},
  
  // Ξετυλίγονται τα items των παραγγελιών
  { $unwind: "$orders" },
  { $unwind: "$orders.items" },
  
  // Ομαδοποίηση product_ids που έχει ήδη αγοράσει
  { $group: {
      _id: "$_id",
      first_name: { $first: "$first_name" },
      pet_preferences: { $first: "$pet_preferences" },
      purchased_products: { $addToSet: "$orders.items.product_id" }
  }},
  
  // Εύρεση προϊόντων που ταιριάζουν με τις προτιμήσεις του
  // αλλά δεν τα έχει αγοράσει ακόμα
  { $lookup: {
      from: "products",
      let: { 
        prefs: "$pet_preferences",
        purchased: "$purchased_products"
      },
      pipeline: [
        { $match: {
            $expr: {
              $and: [
                { $in: ["$pet_type", "$$prefs"] },
                { $not: { $in: ["$_id", "$$purchased"] } }
              ]
            }
        }},
        { $limit: 3 }
      ],
      as: "recommendations"
  }},
  
  { $project: {
      customer_name: "$first_name",
      pet_preferences: 1,
      recommendations: { 
        $map: {
          input: "$recommendations",
          as: "rec",
          in: {
            name: "$$rec.name",
            category: "$$rec.category",
            price: "$$rec.price"
          }
        }
      }
  }}
]);