# 🐾 Witch Kirki Pet Shop — NoSQL Database

A MongoDB-based database system for a pet shop e-commerce platform, implementing advanced NoSQL concepts including schema validation, CRUD operations, indexes, aggregation pipelines and a recommendation engine.

## 📌 About

This project implements a complete NoSQL database solution for an e-commerce pet shop, demonstrating:

- **Schema Validation** — JSON Schema enforcement with try/catch resilience
- **CRUD Operations** — Full set of read, update and delete operations using MongoDB operators
- **Indexes** — Single field, compound and text indexes with performance analysis via explain()
- **Aggregation Framework** — 9 pipelines including $bucket, $facet, $addFields and a recommendation engine
- **Analytical Collections** — Pre-computed views via $out for Business Intelligence

## 🗂️ File Structure

Witch_Kirki/
├── schemas.mongodb.js              # Collection creation with schema validation
├── insert_products.mongodb.js      # Product data insertion
├── insert_customers.mongodb.js     # Customer data insertion
├── insert_orders.mongodb.js        # Orders with dynamic ObjectId references
├── insert_reviews.mongodb.js       # Reviews with dynamic ObjectId references
├── insert_inventory.mongodb.js     # Inventory logs with dynamic ObjectId references
├── crud_operations.mongodb.js      # READ, UPDATE, DELETE operations
├── indexes.mongodb.js              # Index creation and performance analysis
├── aggregation.mongodb.js          # Aggregation pipelines
├── schema_violations.mongodb.js    # Schema validation testing
└── reset_database.mongodb.js       # Database reset utility

## 🛠️ Setup Instructions

### Prerequisites
- MongoDB Community Server
- MongoDB Shell (mongosh)
- VS Code with MongoDB for VS Code extension

### Installation

1. Start MongoDB:
```bash
brew services start mongodb-community
```

2. Run files in order:
schemas.mongodb.js
insert_products.mongodb.js
insert_customers.mongodb.js
insert_orders.mongodb.js
insert_reviews.mongodb.js
insert_inventory.mongodb.js
indexes.mongodb.js

### Reset Database
To restore the database to its original state:
reset_database.mongodb.js
Then re-run all insert files in order.

## 📊 Database Structure

| Collection | Documents | Description |
|---|---|---|
| products | 20 | Pet shop product catalog |
| customers | 20 | Customer profiles |
| orders | 10 | Purchase orders |
| reviews | 12 | Product reviews |
| inventory_logs | 16 | Stock movements |
| category_revenue_summary | — | Revenue analytics per category |
| customer_lifetime_value | — | Customer value analytics |
| product_performance | — | Product rating analytics |

## 🔧 Technologies

- **MongoDB** 8.2.5
- **MongoDB Shell** (mongosh) 2.8.3
- **VS Code** with MongoDB for VS Code extension
- **MongoDB Compass** for visual data exploration
