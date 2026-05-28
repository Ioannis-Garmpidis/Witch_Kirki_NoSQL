use('witch_kirki');

// =========================================
// Schema Violation Examples
// =========================================

// Violation 1: Λείπει υποχρεωτικό πεδίο (brand)
db.products.insertOne({
  name: "Test Product No Brand",
  category: "food",
  pet_type: "dog",
  price: 10.99,
  stock: NumberInt(50)
  // brand λείπει!
});

// Violation 2: Λάθος τύπος δεδομένων (price ως string)
db.products.insertOne({
    name: "Test Product Wrong Price",
    category: "food",
    pet_type: "dog",
    price: "δωρεάν",
    stock: NumberInt(50),
    brand: "TestBrand"
  });
  
  // Violation 3: Μη αποδεκτή τιμή στο enum (category)
  db.products.insertOne({
    name: "Test Product Wrong Category",
    category: "electronics",
    pet_type: "dog",
    price: 10.99,
    stock: NumberInt(50),
    brand: "TestBrand"
  });
  
  // Violation 4: Λάθος rating στο reviews (εκτός 1-5)
  db.reviews.insertOne({
    product_id: ObjectId('6a0b8b2cd6f06ca81ffebbfd'),
    customer_id: ObjectId('6a0b8f6ebe55f228b5fc95ca'),
    rating: NumberInt(10),
    comment: "This should fail!",
    review_date: new Date("2024-01-01")
  });

  // Violation 5: Μη αποδεκτή τιμή στο enum (status στα orders)
db.orders.insertOne({
  customer_id: ObjectId('6a0b8f6ebe55f228b5fc95ca'),
  items: [{
    product_id: ObjectId('6a0b8b2cd6f06ca81ffebbfd'),
    quantity: NumberInt(1),
    unit_price: 45.99
  }],
  total_price: 45.99,
  status: "lost",
  order_date: new Date("2024-01-01")
});

  // Violation 6: Αρνητική τιμή
db.products.insertOne({
  name: "Test Negative Price",
  category: "food",
  pet_type: "dog",
  price: -5.99,
  stock: NumberInt(50),
  brand: "TestBrand"
});

  // Violation 7: Ελλειπές order (χωρις oder date)
  db.orders.insertOne({
    customer_id: ObjectId('6a0b8f6ebe55f228b5fc95ca'),
    items: [{
      product_id: ObjectId('6a0b8b2cd6f06ca81ffebbfd'),
      quantity: NumberInt(1),
      unit_price: 45.99
    }],
    total_price: 45.99,
    status: "delivered"
  });