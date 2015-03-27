/* global Vendors:true */
'use strict';

/**
 * Stores vendors
 */
Vendors = CollectionManager.create('vendors');

_.extend(Vendors, {
    // Publication Names
    pub: {
        index: 'angular-base:data/vendors'
    },

    // Schema Definition
    schema: {
        name: {
            type: String,
            max: 100
        }
    }
});

// Attach the schema to the collection
Vendors.attachSchema(Vendors.schema);
