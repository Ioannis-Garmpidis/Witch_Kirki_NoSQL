use('witch_kirki');

const michael = db.customers.findOne({ first_name: "Michael", last_name: "Jordan" })._id;
const maria = db.customers.findOne({ first_name: "Maria", last_name: "Papadopoulou" })._id;
const nikos = db.customers.findOne({ first_name: "Nikos", last_name: "Andreou" })._id;
const elena = db.customers.findOne({ first_name: "Elena", last_name: "Georgiou" })._id;
const kostas = db.customers.findOne({ first_name: "Kostas", last_name: "Antetokounmpo" })._id;
const messi = db.customers.findOne({ first_name: "Lionel", last_name: "Messi" })._id;
const giorgos = db.customers.findOne({ first_name: "Giorgos", last_name: "Papadimitriou" })._id;
const serena = db.customers.findOne({ first_name: "Serena", last_name: "Williams" })._id;

const royalCanin = db.products.findOne({ name: "Royal Canin Adult Dog" })._id;
const whiskas = db.products.findOne({ name: "Whiskas Tuna Delight" })._id;
const kong = db.products.findOne({ name: "Kong Classic Dog Toy" })._id;
const birdSeed = db.products.findOne({ name: "Bird Seed Mix Premium" })._id;
const airJordan = db.products.findOne({ name: "Leather Dog Collar - Air Jordan Edition" })._id;
const scratchingPost = db.products.findOne({ name: "Cat Scratching Post" })._id;
const catnip = db.products.findOne({ name: "Catnip Mouse Toy" })._id;
const parrotSwing = db.products.findOne({ name: "Parrot Swing Toy" })._id;
const litterBox = db.products.findOne({ name: "Self Cleaning Litter Box" })._id;
const dentalTreats = db.products.findOne({ name: "Cat Dental Treats" })._id;
const gpsTracker = db.products.findOne({ name: "Dog GPS Tracker Collar" })._id;
const salmonTreats = db.products.findOne({ name: "Freeze Dried Salmon Cat Treats" })._id;

db.orders.insertMany([
  {
    customer_id: michael,
    items: [
      { product_id: airJordan, quantity: NumberInt(1), unit_price: 299.99 },
      { product_id: royalCanin, quantity: NumberInt(2), unit_price: 45.99 }
    ],
    total_price: 391.97,
    status: "delivered",
    order_date: new Date("2024-01-20"),
    shipping_address: { street: "123 Chicago Ave", city: "Chicago", postal_code: "60601" }
  },
  {
    customer_id: maria,
    items: [
      { product_id: whiskas, quantity: NumberInt(3), unit_price: 12.50 },
      { product_id: scratchingPost, quantity: NumberInt(1), unit_price: 35.00 }
    ],
    total_price: 72.50,
    status: "delivered",
    order_date: new Date("2024-02-10"),
    shipping_address: { street: "Ermou 45", city: "Athens", postal_code: "10563" }
  },
  {
    customer_id: nikos,
    items: [
      { product_id: royalCanin, quantity: NumberInt(1), unit_price: 45.99 },
      { product_id: catnip, quantity: NumberInt(2), unit_price: 5.99 }
    ],
    total_price: 57.97,
    status: "shipped",
    order_date: new Date("2024-03-05"),
    shipping_address: { street: "Egnatia 78", city: "Thessaloniki", postal_code: "54630" }
  },
  {
    customer_id: elena,
    items: [
      { product_id: birdSeed, quantity: NumberInt(2), unit_price: 9.99 },
      { product_id: parrotSwing, quantity: NumberInt(1), unit_price: 12.99 }
    ],
    total_price: 32.97,
    status: "delivered",
    order_date: new Date("2024-03-15"),
    shipping_address: { street: "Mitropoleos 12", city: "Athens", postal_code: "10557" }
  },
  {
    customer_id: kostas,
    items: [
      { product_id: royalCanin, quantity: NumberInt(3), unit_price: 45.99 },
      { product_id: kong, quantity: NumberInt(2), unit_price: 18.99 }
    ],
    total_price: 175.95,
    status: "confirmed",
    order_date: new Date("2024-04-01"),
    shipping_address: { street: "Sepolia 5", city: "Athens", postal_code: "10445" }
  },
  {
    customer_id: michael,
    items: [
      { product_id: gpsTracker, quantity: NumberInt(1), unit_price: 79.99 }
    ],
    total_price: 79.99,
    status: "pending",
    order_date: new Date("2024-04-10"),
    shipping_address: { street: "123 Chicago Ave", city: "Chicago", postal_code: "60601" }
  },
  {
    customer_id: maria,
    items: [
      { product_id: litterBox, quantity: NumberInt(1), unit_price: 189.99 },
      { product_id: dentalTreats, quantity: NumberInt(2), unit_price: 8.50 }
    ],
    total_price: 206.99,
    status: "delivered",
    order_date: new Date("2024-04-20"),
    shipping_address: { street: "Ermou 45", city: "Athens", postal_code: "10563" }
  },
  {
    customer_id: messi,
    items: [
      { product_id: airJordan, quantity: NumberInt(1), unit_price: 299.99 }
    ],
    total_price: 299.99,
    status: "delivered",
    order_date: new Date("2024-05-01"),
    shipping_address: { street: "Las Ramblas 1", city: "Barcelona", postal_code: "08002" }
  },
  {
    customer_id: giorgos,
    items: [
      { product_id: royalCanin, quantity: NumberInt(2), unit_price: 45.99 },
      { product_id: birdSeed, quantity: NumberInt(1), unit_price: 9.99 }
    ],
    total_price: 101.97,
    status: "shipped",
    order_date: new Date("2024-05-15"),
    shipping_address: { street: "Vouliagmenis 200", city: "Athens", postal_code: "16675" }
  },
  {
    customer_id: serena,
    items: [
      { product_id: whiskas, quantity: NumberInt(5), unit_price: 12.50 },
      { product_id: salmonTreats, quantity: NumberInt(3), unit_price: 11.99 }
    ],
    total_price: 98.47,
    status: "delivered",
    order_date: new Date("2024-06-01"),
    shipping_address: { street: "Compton Ave 7", city: "Los Angeles", postal_code: "90220" }
  }
]);