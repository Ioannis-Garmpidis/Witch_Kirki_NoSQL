use('witch_kirki');

// =========================================
// ΒΗΜΑ 7 - Indexes
// =========================================

// Single Field Index: Αναζήτηση προϊόντων βάσει pet_type
db.products.createIndex({ pet_type: 1 });

// Single Field Index: Αναζήτηση πελατών βάσει email
db.customers.createIndex({ email: 1 }, { unique: true });

// Compound Index: Αναζήτηση προϊόντων βάσει κατηγορίας και τιμής
db.products.createIndex({ category: 1, price: -1 });

// Compound Index: Αναζήτηση παραγγελιών βάσει πελάτη και ημερομηνίας
db.orders.createIndex({ customer_id: 1, order_date: -1 });

// Text Index: Αναζήτηση προϊόντων βάσει περιγραφής
db.products.createIndex({ name: "text", description: "text" });

// Single Field Index: Αναζήτηση reviews βάσει rating
db.reviews.createIndex({ rating: -1 });

// Compound Index: Inventory logs βάσει προϊόντος και ημερομηνίας
db.inventory_logs.createIndex({ product_id: 1, date: -1 });

// =========================================
// Παραδείγματα χρήσης Indexes
// =========================================

// Χρήση text index για αναζήτηση λέξης
db.products.find({ $text: { $search: "premium" } });

// Χρήση compound index για ταξινόμηση
db.products.find({ category: "food" }).sort({ price: -1 });

// Χρήση index για εύρεση παραγγελιών πελάτη
db.orders.find({ customer_id: ObjectId('6a0b9616fb3d18b2a975f78e') }).sort({ order_date: -1 });

// Εμφάνιση όλων των indexes ενός collection
db.products.getIndexes();

// =========================================
// Απόδειξη αποδοτικότητας Indexes με explain()
// =========================================

// Χωρίς index - COLLSCAN (διαβάζει όλα τα documents)
db.products.find({ pet_type: "dog" }).explain("executionStats");

// Αναγκαστικά ΧΩΡΙΣ index - COLLSCAN (διαβάζει ΟΛΑ τα documents)
db.products.find({ pet_type: "dog" }).hint({ $natural: 1 }).explain("executionStats");