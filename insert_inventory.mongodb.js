use('witch_kirki');

const royalCanin = db.products.findOne({ name: "Royal Canin Adult Dog" })._id;
const whiskas = db.products.findOne({ name: "Whiskas Tuna Delight" })._id;
const kong = db.products.findOne({ name: "Kong Classic Dog Toy" })._id;
const airJordan = db.products.findOne({ name: "Leather Dog Collar - Air Jordan Edition" })._id;
const frontline = db.products.findOne({ name: "Frontline Flea Treatment" })._id;
const litterBox = db.products.findOne({ name: "Self Cleaning Litter Box" })._id;
const gpsTracker = db.products.findOne({ name: "Dog GPS Tracker Collar" })._id;
const birdSeed = db.products.findOne({ name: "Bird Seed Mix Premium" })._id;

db.inventory_logs.insertMany([
  {
    product_id: royalCanin,
    change_type: "restock",
    quantity_change: NumberInt(100),
    date: new Date("2024-01-01"),
    notes: "Initial stock replenishment for new year"
  },
  {
    product_id: royalCanin,
    change_type: "sale",
    quantity_change: NumberInt(-6),
    date: new Date("2024-01-20"),
    notes: "Sale from Michael Jordan and Kostas Antetokounmpo orders"
  },
  {
    product_id: airJordan,
    change_type: "restock",
    quantity_change: NumberInt(23),
    date: new Date("2024-01-05"),
    notes: "Limited edition stock arrival"
  },
  {
    product_id: airJordan,
    change_type: "sale",
    quantity_change: NumberInt(-2),
    date: new Date("2024-05-01"),
    notes: "Sold to Michael Jordan and Messi"
  },
  {
    product_id: whiskas,
    change_type: "restock",
    quantity_change: NumberInt(150),
    date: new Date("2024-01-10"),
    notes: "Regular monthly restock"
  },
  {
    product_id: whiskas,
    change_type: "sale",
    quantity_change: NumberInt(-8),
    date: new Date("2024-06-01"),
    notes: "Sales to Maria and Serena Williams"
  },
  {
    product_id: litterBox,
    change_type: "restock",
    quantity_change: NumberInt(15),
    date: new Date("2024-02-01"),
    notes: "Premium product restock"
  },
  {
    product_id: litterBox,
    change_type: "sale",
    quantity_change: NumberInt(-1),
    date: new Date("2024-04-20"),
    notes: "Sold to Maria Papadopoulou"
  },
  {
    product_id: frontline,
    change_type: "restock",
    quantity_change: NumberInt(80),
    date: new Date("2024-03-01"),
    notes: "Spring restock - flea season incoming"
  },
  {
    product_id: frontline,
    change_type: "damage",
    quantity_change: NumberInt(-5),
    date: new Date("2024-03-15"),
    notes: "Damaged during warehouse transfer"
  },
  {
    product_id: gpsTracker,
    change_type: "restock",
    quantity_change: NumberInt(45),
    date: new Date("2024-01-15"),
    notes: "New product initial stock"
  },
  {
    product_id: gpsTracker,
    change_type: "sale",
    quantity_change: NumberInt(-1),
    date: new Date("2024-04-10"),
    notes: "Sold to Michael Jordan"
  },
  {
    product_id: birdSeed,
    change_type: "restock",
    quantity_change: NumberInt(200),
    date: new Date("2024-02-15"),
    notes: "Bulk restock from supplier"
  },
  {
    product_id: birdSeed,
    change_type: "sale",
    quantity_change: NumberInt(-3),
    date: new Date("2024-05-15"),
    notes: "Sales to Elena and Giorgos"
  },
  {
    product_id: kong,
    change_type: "restock",
    quantity_change: NumberInt(50),
    date: new Date("2024-01-20"),
    notes: "Regular restock"
  },
  {
    product_id: kong,
    change_type: "return",
    quantity_change: NumberInt(2),
    date: new Date("2024-04-15"),
    notes: "Customer return - product in good condition"
  }
]);