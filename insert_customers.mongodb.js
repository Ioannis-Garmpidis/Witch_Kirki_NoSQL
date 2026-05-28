use('witch_kirki');

db.customers.insertMany([
  {
    first_name: "Michael",
    last_name: "Jordan",
    email: "mj23@bulls.com",
    phone: "6901234567",
    address: { street: "123 Chicago Ave", city: "Chicago", postal_code: "60601" },
    pet_preferences: ["dog"],
    member_since: new Date("2023-01-15")
  },
  {
    first_name: "Maria",
    last_name: "Papadopoulou",
    email: "maria.p@gmail.com",
    phone: "6987654321",
    address: { street: "Ermou 45", city: "Athens", postal_code: "10563" },
    pet_preferences: ["cat"],
    member_since: new Date("2023-03-22")
  },
  {
    first_name: "Nikos",
    last_name: "Andreou",
    email: "nikos.a@hotmail.com",
    phone: "6912345678",
    address: { street: "Egnatia 78", city: "Thessaloniki", postal_code: "54630" },
    pet_preferences: ["dog", "cat"],
    member_since: new Date("2023-05-10")
  },
  {
    first_name: "Elena",
    last_name: "Georgiou",
    email: "elena.g@yahoo.com",
    phone: "6934567890",
    address: { street: "Mitropoleos 12", city: "Athens", postal_code: "10557" },
    pet_preferences: ["bird"],
    member_since: new Date("2023-07-14")
  },
  {
    first_name: "Kostas",
    last_name: "Antetokounmpo",
    email: "kostas.a@bucks.com",
    phone: "6945678901",
    address: { street: "Sepolia 5", city: "Athens", postal_code: "10445" },
    pet_preferences: ["dog"],
    member_since: new Date("2023-08-20")
  },
  {
    first_name: "Sofia",
    last_name: "Dimitriou",
    email: "sofia.d@gmail.com",
    phone: "6956789012",
    address: { street: "Patision 99", city: "Athens", postal_code: "10434" },
    pet_preferences: ["cat", "fish"],
    member_since: new Date("2023-09-05")
  },
  {
    first_name: "Lionel",
    last_name: "Messi",
    email: "leo10@inter.com",
    phone: "6900000010",
    address: { street: "Las Ramblas 1", city: "Barcelona", postal_code: "08002" },
    pet_preferences: ["dog"],
    member_since: new Date("2023-10-12")
  },
  {
    first_name: "Giorgos",
    last_name: "Papadimitriou",
    email: "giorgos.p@gmail.com",
    phone: "6967890123",
    address: { street: "Vouliagmenis 200", city: "Athens", postal_code: "16675" },
    pet_preferences: ["dog", "bird"],
    member_since: new Date("2023-11-18")
  },
  {
    first_name: "Serena",
    last_name: "Williams",
    email: "serena@tennis.com",
    phone: "6900000001",
    address: { street: "Compton Ave 7", city: "Los Angeles", postal_code: "90220" },
    pet_preferences: ["cat"],
    member_since: new Date("2024-01-03")
  },
  {
    first_name: "Dimitris",
    last_name: "Alexiou",
    email: "dimitris.a@outlook.com",
    phone: "6978901234",
    address: { street: "Kifisias 150", city: "Athens", postal_code: "15124" },
    pet_preferences: ["fish"],
    member_since: new Date("2024-02-14")
  },
  {
    first_name: "Aggelos",
    last_name: "Nikolaou",
    email: "aggelos.n@gmail.com",
    phone: "6923456789",
    address: { street: "Academias 33", city: "Athens", postal_code: "10671" },
    pet_preferences: ["cat", "bird"],
    member_since: new Date("2024-03-08")
  },
  {
    first_name: "Tiger",
    last_name: "Woods",
    email: "tiger@pga.com",
    phone: "6900000018",
    address: { street: "Augusta National Dr", city: "Augusta", postal_code: "30901" },
    pet_preferences: ["dog"],
    member_since: new Date("2024-03-15")
  },
  {
    first_name: "Katerina",
    last_name: "Stavrou",
    email: "katerina.s@gmail.com",
    phone: "6989012345",
    address: { street: "Alexandras 55", city: "Athens", postal_code: "11473" },
    pet_preferences: ["dog", "cat"],
    member_since: new Date("2024-04-01")
  },
  {
    first_name: "Roger",
    last_name: "Federer",
    email: "roger@atp.com",
    phone: "6900000008",
    address: { street: "Wimbledon Park Rd", city: "London", postal_code: "SW19 5AG" },
    pet_preferences: ["cat"],
    member_since: new Date("2024-04-20")
  },
  {
    first_name: "Panagiotis",
    last_name: "Katsaros",
    email: "panos.k@hotmail.com",
    phone: "6990123456",
    address: { street: "Pireos 88", city: "Athens", postal_code: "10436" },
    pet_preferences: ["fish"],
    member_since: new Date("2024-05-10")
  },
  {
    first_name: "Valentina",
    last_name: "Rossi",
    email: "vale46@motogp.com",
    phone: "6900000046",
    address: { street: "Via Roma 46", city: "Tavullia", postal_code: "61010" },
    pet_preferences: ["dog", "cat"],
    member_since: new Date("2024-05-22")
  },
  {
    first_name: "Eleni",
    last_name: "Papadaki",
    email: "eleni.p@yahoo.com",
    phone: "6901234890",
    address: { street: "Solonos 22", city: "Athens", postal_code: "10673" },
    pet_preferences: ["bird"],
    member_since: new Date("2024-06-15")
  },
  {
    first_name: "Ayrton",
    last_name: "Senna",
    email: "ayrton@f1.com",
    phone: "6900000003",
    address: { street: "Interlagos Circuit", city: "Sao Paulo", postal_code: "04823" },
    pet_preferences: ["dog"],
    member_since: new Date("2024-07-01")
  },
  {
    first_name: "Thanos",
    last_name: "Michalakis",
    email: "thanos.m@gmail.com",
    phone: "6912398765",
    address: { street: "Deligiorgi 14", city: "Piraeus", postal_code: "18534" },
    pet_preferences: ["dog", "fish"],
    member_since: new Date("2024-07-19")
  },
  {
    first_name: "Muhammad",
    last_name: "Ali",
    email: "float@butterfly.com",
    phone: "6900000001",
    address: { street: "Louisville Ave 1", city: "Louisville", postal_code: "40202" },
    pet_preferences: ["dog"],
    member_since: new Date("2024-08-05")
  }
]);