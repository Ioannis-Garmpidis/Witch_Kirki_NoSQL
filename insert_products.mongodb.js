use('witch_kirki');

db.products.insertMany([
  {
    name: "Royal Canin Adult Dog",
    category: "food",
    pet_type: "dog",
    price: 45.99,
    stock: NumberInt(150),
    brand: "Royal Canin",
    description: "Premium dry food for adult dogs",
    tags: ["premium", "dry food", "adult"]
  },
  {
    name: "Whiskas Tuna Delight",
    category: "food",
    pet_type: "cat",
    price: 12.50,
    stock: NumberInt(200),
    brand: "Whiskas",
    description: "Wet food with tuna for cats",
    tags: ["wet food", "tuna", "cat"]
  },
  {
    name: "Kong Classic Dog Toy",
    category: "toy",
    pet_type: "dog",
    price: 18.99,
    stock: NumberInt(75),
    brand: "Kong",
    description: "Durable rubber toy for dogs",
    tags: ["toy", "rubber", "durable"]
  },
  {
    name: "Tetra Fish Flakes",
    category: "food",
    pet_type: "fish",
    price: 8.99,
    stock: NumberInt(300),
    brand: "Tetra",
    description: "Complete food for tropical fish",
    tags: ["fish food", "tropical", "flakes"]
  },
  {
    name: "Leather Dog Collar - Air Jordan Edition",
    category: "accessory",
    pet_type: "dog",
    price: 299.99,
    stock: NumberInt(23),
    brand: "Witch Kirki Exclusive",
    description: "Limited edition luxury leather collar. Only the greatest dogs wear this.",
    tags: ["luxury", "limited edition", "leather", "exclusive"]
  },
  {
    name: "Cat Scratching Post",
    category: "toy",
    pet_type: "cat",
    price: 35.00,
    stock: NumberInt(50),
    brand: "PetComfort",
    description: "Tall scratching post for cats",
    tags: ["scratching", "cat", "furniture"]
  },
  {
    name: "Frontline Flea Treatment",
    category: "medicine",
    pet_type: "all",
    price: 22.99,
    stock: NumberInt(120),
    brand: "Frontline",
    description: "Flea and tick treatment for pets",
    tags: ["medicine", "flea", "tick"]
  },
  {
    name: "Bird Seed Mix Premium",
    category: "food",
    pet_type: "bird",
    price: 9.99,
    stock: NumberInt(180),
    brand: "Versele-Laga",
    description: "Premium seed mix for all birds",
    tags: ["bird food", "seeds", "premium"]
  },
  {
    name: "Dog Grooming Brush",
    category: "grooming",
    pet_type: "dog",
    price: 14.99,
    stock: NumberInt(90),
    brand: "FurCare",
    description: "Professional grooming brush for all dog breeds",
    tags: ["grooming", "brush", "professional"]
  },
  {
    name: "Catnip Mouse Toy",
    category: "toy",
    pet_type: "cat",
    price: 5.99,
    stock: NumberInt(250),
    brand: "Meowsters",
    description: "Catnip filled mouse toy",
    tags: ["catnip", "toy", "mouse"]
  },
  {
    name: "Puppy Training Pads",
    category: "accessory",
    pet_type: "dog",
    price: 19.99,
    stock: NumberInt(400),
    brand: "PuppyCare",
    description: "Absorbent training pads for puppies",
    tags: ["puppy", "training", "hygiene"]
  },
  {
    name: "Aquarium LED Light",
    category: "accessory",
    pet_type: "fish",
    price: 55.00,
    stock: NumberInt(40),
    brand: "AquaGlow",
    description: "Full spectrum LED light for aquariums",
    tags: ["aquarium", "light", "LED"]
  },
  {
    name: "Hill's Science Diet Cat",
    category: "food",
    pet_type: "cat",
    price: 38.99,
    stock: NumberInt(110),
    brand: "Hill's",
    description: "Veterinary recommended cat food",
    tags: ["premium", "vet recommended", "dry food"]
  },
  {
    name: "Parrot Swing Toy",
    category: "toy",
    pet_type: "bird",
    price: 12.99,
    stock: NumberInt(60),
    brand: "BirdFun",
    description: "Colorful swing toy for parrots",
    tags: ["parrot", "swing", "toy"]
  },
  {
    name: "Dog Anxiety Vest",
    category: "accessory",
    pet_type: "dog",
    price: 42.00,
    stock: NumberInt(35),
    brand: "CalmPaws",
    description: "Reduces anxiety in dogs during storms and fireworks",
    tags: ["anxiety", "vest", "comfort"]
  },
  {
    name: "Cat Dental Treats",
    category: "medicine",
    pet_type: "cat",
    price: 8.50,
    stock: NumberInt(220),
    brand: "DentaLife",
    description: "Daily dental treats for cat oral health",
    tags: ["dental", "treats", "health"]
  },
  {
    name: "Omega 3 Fish Oil Supplement",
    category: "medicine",
    pet_type: "all",
    price: 16.99,
    stock: NumberInt(95),
    brand: "PetVital",
    description: "Omega 3 supplement for coat and joint health",
    tags: ["supplement", "omega3", "health"]
  },
  {
    name: "Self Cleaning Litter Box",
    category: "accessory",
    pet_type: "cat",
    price: 189.99,
    stock: NumberInt(15),
    brand: "LitterRobot",
    description: "Automatic self cleaning litter box for cats",
    tags: ["litter", "automatic", "premium"]
  },
  {
    name: "Dog GPS Tracker Collar",
    category: "accessory",
    pet_type: "dog",
    price: 79.99,
    stock: NumberInt(45),
    brand: "TrackPaws",
    description: "Real time GPS tracking collar for dogs",
    tags: ["GPS", "tracker", "safety"]
  },
  {
    name: "Freeze Dried Salmon Cat Treats",
    category: "food",
    pet_type: "cat",
    price: 11.99,
    stock: NumberInt(175),
    brand: "PureBites",
    description: "Single ingredient freeze dried salmon treats",
    tags: ["treats", "salmon", "natural"]
  }
]);