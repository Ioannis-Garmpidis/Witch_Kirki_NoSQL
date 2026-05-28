use('witch_kirki');

// =========================================
// ΒΗΜΑ 6 - CRUD Operations
// =========================================

// ---- READ Operations ----

// R1: Βρες όλα τα προϊόντα για σκύλους
db.products.find({ pet_type: "dog" });

// R2: Βρες προϊόντα με τιμή κάτω από 20€
db.products.find({ price: { $lt: 20 } });

// R3: Βρες προϊόντα τροφής για γάτες ή σκύλους
db.products.find({ 
  category: "food", 
  pet_type: { $in: ["cat", "dog"] } 
});

// R4: Βρες προϊόντα με stock κάτω από 50 (χαμηλό απόθεμα)
db.products.find({ stock: { $lt: 50 } });

// R5: Βρες πελάτες από την Αθήνα
db.customers.find({ "address.city": "Athens" });

// R6: Βρες παραγγελίες με status "delivered"
db.orders.find({ status: "delivered" });

// R7: Βρες reviews με rating 5
db.reviews.find({ rating: 5 });

// R8: Βρες προϊόντα με συγκεκριμένο tag
db.products.find({ tags: { $elemMatch: { $eq: "premium" } } });

// R9: Βρες πελάτες που έχουν εγγραφεί μετά το 2024
db.customers.find({ member_since: { $gte: new Date("2024-01-01") } });

// R10: Βρες προϊόντα ταξινομημένα κατά τιμή (φθίνουσα)
db.products.find().sort({ price: -1 });

// ---- UPDATE Operations ----

// U1: Ενημέρωσε την τιμή του Royal Canin
db.products.updateOne(
    { name: "Royal Canin Adult Dog" },
    { $set: { price: 49.99 } }
  );
  
  // U2: Αύξησε το stock όλων των προϊόντων για σκύλους κατά 10
  db.products.updateMany(
    { pet_type: "dog" },
    { $inc: { stock: 10 } }
  );
  
  // U3: Πρόσθεσε νέο tag σε προϊόν
  db.products.updateOne(
    { name: "Kong Classic Dog Toy" },
    { $push: { tags: "bestseller" } }
  );
  
  // U4: Ενημέρωσε status παραγγελίας από confirmed σε shipped
  db.orders.updateOne(
    { status: "confirmed" },
    { $set: { status: "shipped" } }
  );
  
  // U5: Πρόσθεσε πεδίο loyalty_points σε όλους τους πελάτες
  db.customers.updateMany(
    {},
    { $set: { loyalty_points: 0 } }
  );

  // ---- DELETE Operations ----

// D1: Διέγραψε ένα συγκεκριμένο προϊόν δοκιμής
db.products.deleteOne({ name: "Test Product No Brand" });

// D2: Διέγραψε όλες τις κριτικές με rating 1 ή 2
db.reviews.deleteMany({ rating: { $lte: 2 } });

// D3: Διέγραψε παραγγελίες που έχουν ακυρωθεί
db.orders.deleteMany({ status: "cancelled" });

// Εισαγωγή test document για να δείξουμε το delete
db.orders.insertOne({
    customer_id: ObjectId('6a0b8f6ebe55f228b5fc95ca'),
    items: [{
      product_id: ObjectId('6a0b8b2cd6f06ca81ffebbfd'),
      quantity: NumberInt(1),
      unit_price: 45.99
    }],
    total_price: 45.99,
    status: "cancelled",
    order_date: new Date("2024-01-01")
  });
  
  // D3: Διέγραψε παραγγελίες που έχουν ακυρωθεί
  db.orders.deleteMany({ status: "cancelled" });

  // ---- Επιπλέον operators ----

// $exists: Βρες πελάτες που έχουν loyalty_points
db.customers.find({ loyalty_points: { $exists: true } });

// $regex: Βρες προϊόντα που περιέχουν "dog" στο όνομα
db.products.find({ name: { $regex: "Dog", $options: "i" } });

// $or: Βρες προϊόντα που είναι είτε toy είτε grooming
db.products.find({ $or: [{ category: "toy" }, { category: "grooming" }] });

// $and: Βρες προϊόντα για σκύλους με τιμή κάτω από 50€
db.products.find({ $and: [{ pet_type: "dog" }, { price: { $lt: 50 } }] });

// $not: Βρες προϊόντα που δεν είναι για σκύλους
db.products.find({ pet_type: { $not: { $eq: "dog" } } });

// $unset: Αφαίρεσε το πεδίο loyalty_points από όλους τους πελάτες
db.customers.updateMany({}, { $unset: { loyalty_points: "" } });

// ---- Projection & Lookup Operations ----

// P1: Projection - Εμφάνισε μόνο όνομα και τιμή προϊόντων
db.products.find(
  { pet_type: "dog" },
  { name: 1, price: 1, brand: 1, _id: 0 }
);

// P2: Projection - Εμφάνισε πελάτες χωρίς την διεύθυνση
db.customers.find(
  {},
  { first_name: 1, last_name: 1, email: 1, pet_preferences: 1, _id: 0 }
);

// P3: Lookup - Παραγγελίες με στοιχεία πελάτη
db.orders.aggregate([
  { $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "_id",
      as: "customer"
  }},
  { $unwind: "$customer" },
  { $project: {
      order_date: 1,
      total_price: 1,
      status: 1,
      customer_name: { $concat: ["$customer.first_name", " ", "$customer.last_name"] },
      customer_email: "$customer.email"
  }},
  { $sort: { order_date: -1 } }
]);

// P4: Lookup - Πλήρης παραγγελία με στοιχεία προϊόντων
db.orders.aggregate([
  { $unwind: "$items" },
  { $lookup: {
      from: "products",
      localField: "items.product_id",
      foreignField: "_id",
      as: "product"
  }},
  { $unwind: "$product" },
  { $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "_id",
      as: "customer"
  }},
  { $unwind: "$customer" },
  { $project: {
      customer_name: { $concat: ["$customer.first_name", " ", "$customer.last_name"] },
      product_name: "$product.name",
      quantity: "$items.quantity",
      unit_price: "$items.unit_price",
      status: 1,
      order_date: 1
  }},
  { $sort: { order_date: -1 } }
]);