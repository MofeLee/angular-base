/* global Customers:true */
'use strict';

/**
 * Stores customers
 */
Customers = CollectionManager.create('customers');

_.extend(Customers, {
    // Publication Names
    pub: {
        index: 'angular-base:data/customers'
    },

    // Schema Definition
    schema: {
        firstName: {
            type: String,
            max: 50
        },
        lastName: {
            type: String,
            max: 50
        }
    }
});

// Attach the schema to the collection
Customers.attachSchema(Customers.schema);
