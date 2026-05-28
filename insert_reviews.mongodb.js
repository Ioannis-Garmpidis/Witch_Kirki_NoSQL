use('witch_kirki');

const michael = db.customers.findOne({ first_name: "Michael", last_name: "Jordan" })._id;
const maria = db.customers.findOne({ first_name: "Maria", last_name: "Papadopoulou" })._id;
const nikos = db.customers.findOne({ first_name: "Nikos", last_name: "Andreou" })._id;
const elena = db.customers.findOne({ first_name: "Elena", last_name: "Georgiou" })._id;
const kostas = db.customers.findOne({ first_name: "Kostas", last_name: "Antetokounmpo" })._id;
const messi = db.customers.findOne({ first_name: "Lionel", last_name: "Messi" })._id;
const serena = db.customers.findOne({ first_name: "Serena", last_name: "Williams" })._id;

const royalCanin = db.products.findOne({ name: "Royal Canin Adult Dog" })._id;
const whiskas = db.products.findOne({ name: "Whiskas Tuna Delight" })._id;
const kong = db.products.findOne({ name: "Kong Classic Dog Toy" })._id;
const airJordan = db.products.findOne({ name: "Leather Dog Collar - Air Jordan Edition" })._id;
const scratchingPost = db.products.findOne({ name: "Cat Scratching Post" })._id;
const birdSeed = db.products.findOne({ name: "Bird Seed Mix Premium" })._id;
const frontline = db.products.findOne({ name: "Frontline Flea Treatment" })._id;
const litterBox = db.products.findOne({ name: "Self Cleaning Litter Box" })._id;
const gpsTracker = db.products.findOne({ name: "Dog GPS Tracker Collar" })._id;
const salmonTreats = db.products.findOne({ name: "Freeze Dried Salmon Cat Treats" })._id;

db.reviews.insertMany([
  {
    product_id: royalCanin,
    customer_id: michael,
    rating: NumberInt(5),
    comment: "My dog absolutely loves this food. Worth every penny!",
    review_date: new Date("2024-02-01")
  },
  {
    product_id: airJordan,
    customer_id: michael,
    rating: NumberInt(5),
    comment: "I approve this collar. My dog is now the GOAT of dogs.",
    review_date: new Date("2024-02-15")
  },
  {
    product_id: whiskas,
    customer_id: maria,
    rating: NumberInt(4),
    comment: "My cat loves the tuna flavor. Will buy again!",
    review_date: new Date("2024-02-20")
  },
  {
    product_id: scratchingPost,
    customer_id: maria,
    rating: NumberInt(5),
    comment: "Excellent quality, my cat uses it all day long.",
    review_date: new Date("2024-03-01")
  },
  {
    product_id: kong,
    customer_id: nikos,
    rating: NumberInt(4),
    comment: "Very durable toy, my dog has not destroyed it yet!",
    review_date: new Date("2024-03-10")
  },
  {
    product_id: birdSeed,
    customer_id: elena,
    rating: NumberInt(5),
    comment: "My parrot goes crazy for this seed mix. Highly recommended!",
    review_date: new Date("2024-03-20")
  },
  {
    product_id: royalCanin,
    customer_id: kostas,
    rating: NumberInt(5),
    comment: "Just like me, my dog only accepts the best. Royal Canin delivers.",
    review_date: new Date("2024-04-05")
  },
  {
    product_id: airJordan,
    customer_id: messi,
    rating: NumberInt(4),
    comment: "Beautiful collar but I still prefer the Barca edition.",
    review_date: new Date("2024-05-10")
  },
  {
    product_id: litterBox,
    customer_id: maria,
    rating: NumberInt(5),
    comment: "Best investment ever. My cat is happy, I am happy.",
    review_date: new Date("2024-05-15")
  },
  {
    product_id: salmonTreats,
    customer_id: serena,
    rating: NumberInt(5),
    comment: "My cat treats these like trophies. She earns one after every meal!",
    review_date: new Date("2024-06-10")
  },
  {
    product_id: frontline,
    customer_id: nikos,
    rating: NumberInt(3),
    comment: "Works fine but took longer than expected to see results.",
    review_date: new Date("2024-06-20")
  },
  {
    product_id: gpsTracker,
    customer_id: michael,
    rating: NumberInt(5),
    comment: "Now I always know where my dog is. No more turnovers!",
    review_date: new Date("2024-07-01")
  }
]);