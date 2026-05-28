use('witch_kirki');

// =========================================
// Reset Database - Καθαρισμός όλων των collections
// =========================================

db.products.deleteMany({});
db.customers.deleteMany({});
db.orders.deleteMany({});
db.reviews.deleteMany({});
db.inventory_logs.deleteMany({});

print("✅ Database cleared successfully!");
print("Now run the insert files in order:");
print("1. insert_products.mongodb.js");
print("2. insert_customers.mongodb.js");
print("3. insert_orders.mongodb.js");
print("4. insert_reviews.mongodb.js");
print("5. insert_inventory.mongodb.js");