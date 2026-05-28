use('witch_kirki');

// =========================================
// ΒΗΜΑ 4 - Schema Validation
// =========================================

// 1. Products Collection
try {
  db.createCollection('products', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['name', 'category', 'pet_type', 'price', 'stock', 'brand'],
        properties: {
          name: {
            bsonType: 'string',
            description: 'Όνομα προϊόντος - υποχρεωτικό'
          },
          category: {
            bsonType: 'string',
            enum: ['food', 'toy', 'medicine', 'accessory', 'grooming'],
            description: 'Κατηγορία προϊόντος - υποχρεωτικό'
          },
          pet_type: {
            bsonType: 'string',
            enum: ['dog', 'cat', 'fish', 'bird', 'all'],
            description: 'Είδος ζώου - υποχρεωτικό'
          },
          price: {
            bsonType: 'number',
            minimum: 0,
            description: 'Τιμή προϊόντος - υποχρεωτικό'
          },
          stock: {
            bsonType: 'int',
            minimum: 0,
            description: 'Διαθέσιμα τεμάχια - υποχρεωτικό'
          },
          brand: {
            bsonType: 'string',
            description: 'Μάρκα προϊόντος - υποχρεωτικό'
          },
          description: {
            bsonType: 'string',
            description: 'Περιγραφή προϊόντος'
          },
          tags: {
            bsonType: 'array',
            items: { bsonType: 'string' },
            description: 'Ετικέτες προϊόντος'
          }
        }
      }
    },
    validationAction: 'error'
  });
} catch(e) {
  db.runCommand({
    collMod: 'products',
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['name', 'category', 'pet_type', 'price', 'stock', 'brand'],
        properties: {
          name: { bsonType: 'string', description: 'Όνομα προϊόντος - υποχρεωτικό' },
          category: {
            bsonType: 'string',
            enum: ['food', 'toy', 'medicine', 'accessory', 'grooming'],
            description: 'Κατηγορία προϊόντος - υποχρεωτικό'
          },
          pet_type: {
            bsonType: 'string',
            enum: ['dog', 'cat', 'fish', 'bird', 'all'],
            description: 'Είδος ζώου - υποχρεωτικό'
          },
          price: { bsonType: 'number', minimum: 0, description: 'Τιμή προϊόντος - υποχρεωτικό' },
          stock: { bsonType: 'int', minimum: 0, description: 'Διαθέσιμα τεμάχια - υποχρεωτικό' },
          brand: { bsonType: 'string', description: 'Μάρκα προϊόντος - υποχρεωτικό' },
          description: { bsonType: 'string', description: 'Περιγραφή προϊόντος' },
          tags: { bsonType: 'array', items: { bsonType: 'string' }, description: 'Ετικέτες προϊόντος' }
        }
      }
    },
    validationAction: 'error'
  });
}

// 2. Customers Collection
try {
  db.createCollection('customers', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['first_name', 'last_name', 'email', 'phone'],
        properties: {
          first_name: { bsonType: 'string', description: 'Όνομα πελάτη - υποχρεωτικό' },
          last_name: { bsonType: 'string', description: 'Επώνυμο πελάτη - υποχρεωτικό' },
          email: { bsonType: 'string', description: 'Email πελάτη - υποχρεωτικό' },
          phone: { bsonType: 'string', description: 'Τηλέφωνο πελάτη - υποχρεωτικό' },
          address: {
            bsonType: 'object',
            properties: {
              street: { bsonType: 'string' },
              city: { bsonType: 'string' },
              postal_code: { bsonType: 'string' }
            },
            description: 'Διεύθυνση πελάτη'
          },
          pet_preferences: { bsonType: 'array', items: { bsonType: 'string' }, description: 'Προτιμήσεις ζώων πελάτη' },
          member_since: { bsonType: 'date', description: 'Ημερομηνία εγγραφής' }
        }
      }
    },
    validationAction: 'error'
  });
} catch(e) {
  db.runCommand({
    collMod: 'customers',
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['first_name', 'last_name', 'email', 'phone'],
        properties: {
          first_name: { bsonType: 'string', description: 'Όνομα πελάτη - υποχρεωτικό' },
          last_name: { bsonType: 'string', description: 'Επώνυμο πελάτη - υποχρεωτικό' },
          email: { bsonType: 'string', description: 'Email πελάτη - υποχρεωτικό' },
          phone: { bsonType: 'string', description: 'Τηλέφωνο πελάτη - υποχρεωτικό' },
          address: {
            bsonType: 'object',
            properties: {
              street: { bsonType: 'string' },
              city: { bsonType: 'string' },
              postal_code: { bsonType: 'string' }
            }
          },
          pet_preferences: { bsonType: 'array', items: { bsonType: 'string' } },
          member_since: { bsonType: 'date' }
        }
      }
    },
    validationAction: 'error'
  });
}

// 3. Orders Collection
try {
  db.createCollection('orders', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['customer_id', 'items', 'total_price', 'status', 'order_date'],
        properties: {
          customer_id: { bsonType: 'objectId', description: 'ID πελάτη - υποχρεωτικό' },
          items: {
            bsonType: 'array',
            items: {
              bsonType: 'object',
              required: ['product_id', 'quantity', 'unit_price'],
              properties: {
                product_id: { bsonType: 'objectId' },
                quantity: { bsonType: 'int', minimum: 1 },
                unit_price: { bsonType: 'number', minimum: 0 }
              }
            },
            description: 'Προϊόντα παραγγελίας - υποχρεωτικό'
          },
          total_price: { bsonType: 'number', minimum: 0, description: 'Συνολική τιμή - υποχρεωτικό' },
          status: {
            bsonType: 'string',
            enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
            description: 'Κατάσταση παραγγελίας - υποχρεωτικό'
          },
          order_date: { bsonType: 'date', description: 'Ημερομηνία παραγγελίας - υποχρεωτικό' },
          shipping_address: {
            bsonType: 'object',
            properties: {
              street: { bsonType: 'string' },
              city: { bsonType: 'string' },
              postal_code: { bsonType: 'string' }
            }
          }
        }
      }
    },
    validationAction: 'error'
  });
} catch(e) {
  db.runCommand({
    collMod: 'orders',
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['customer_id', 'items', 'total_price', 'status', 'order_date'],
        properties: {
          customer_id: { bsonType: 'objectId' },
          items: {
            bsonType: 'array',
            items: {
              bsonType: 'object',
              required: ['product_id', 'quantity', 'unit_price'],
              properties: {
                product_id: { bsonType: 'objectId' },
                quantity: { bsonType: 'int', minimum: 1 },
                unit_price: { bsonType: 'number', minimum: 0 }
              }
            }
          },
          total_price: { bsonType: 'number', minimum: 0 },
          status: {
            bsonType: 'string',
            enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled']
          },
          order_date: { bsonType: 'date' },
          shipping_address: {
            bsonType: 'object',
            properties: {
              street: { bsonType: 'string' },
              city: { bsonType: 'string' },
              postal_code: { bsonType: 'string' }
            }
          }
        }
      }
    },
    validationAction: 'error'
  });
}

// 4. Reviews Collection
try {
  db.createCollection('reviews', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['product_id', 'customer_id', 'rating', 'comment', 'review_date'],
        properties: {
          product_id: { bsonType: 'objectId', description: 'ID προϊόντος - υποχρεωτικό' },
          customer_id: { bsonType: 'objectId', description: 'ID πελάτη - υποχρεωτικό' },
          rating: { bsonType: 'int', minimum: 1, maximum: 5, description: 'Βαθμολογία 1-5 - υποχρεωτικό' },
          comment: { bsonType: 'string', description: 'Σχόλιο κριτικής - υποχρεωτικό' },
          review_date: { bsonType: 'date', description: 'Ημερομηνία κριτικής - υποχρεωτικό' }
        }
      }
    },
    validationAction: 'error'
  });
} catch(e) {
  db.runCommand({
    collMod: 'reviews',
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['product_id', 'customer_id', 'rating', 'comment', 'review_date'],
        properties: {
          product_id: { bsonType: 'objectId' },
          customer_id: { bsonType: 'objectId' },
          rating: { bsonType: 'int', minimum: 1, maximum: 5 },
          comment: { bsonType: 'string' },
          review_date: { bsonType: 'date' }
        }
      }
    },
    validationAction: 'error'
  });
}

// 5. Inventory Logs Collection
try {
  db.createCollection('inventory_logs', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['product_id', 'change_type', 'quantity_change', 'date'],
        properties: {
          product_id: { bsonType: 'objectId', description: 'ID προϊόντος - υποχρεωτικό' },
          change_type: {
            bsonType: 'string',
            enum: ['restock', 'sale', 'return', 'damage'],
            description: 'Τύπος κίνησης αποθέματος - υποχρεωτικό'
          },
          quantity_change: { bsonType: 'int', description: 'Ποσότητα αλλαγής - υποχρεωτικό' },
          date: { bsonType: 'date', description: 'Ημερομηνία κίνησης - υποχρεωτικό' },
          notes: { bsonType: 'string', description: 'Σημειώσεις' }
        }
      }
    },
    validationAction: 'error'
  });
} catch(e) {
  db.runCommand({
    collMod: 'inventory_logs',
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['product_id', 'change_type', 'quantity_change', 'date'],
        properties: {
          product_id: { bsonType: 'objectId' },
          change_type: {
            bsonType: 'string',
            enum: ['restock', 'sale', 'return', 'damage']
          },
          quantity_change: { bsonType: 'int' },
          date: { bsonType: 'date' },
          notes: { bsonType: 'string' }
        }
      }
    },
    validationAction: 'error'
  });
}