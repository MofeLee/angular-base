'use strict';

/**
 * Creates the default records
 */
Meteor.startup(function() {
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            username: 'admin',
            email: 'admin@angular-base.com',
            password: 'admin'
        });
    }

    if (Customers.find().count() === 0) {
        _.each([
            {"firstName": "Brian",   "lastName": "Fowler"},
            {"firstName": "Ashton",  "lastName": "Lambert"},
            {"firstName": "Clark",   "lastName": "Boone"},
            {"firstName": "Alexa",   "lastName": "Myers"},
            {"firstName": "Kessie",  "lastName": "Marshall"},
            {"firstName": "Illiana", "lastName": "Romero"},
            {"firstName": "Nissim",  "lastName": "Ramos"}
        ],function(customer) {
            Customers.insert(customer);
        });
    }

    if (Vendors.find().count() === 0) {
        _.each([
            {"name": "Habitant Morbi Tristique LLP"},
            {"name": "Ultrices Posuere Cubilia Limited"},
            {"name": "Mauris Company"},
            {"name": "Sociis Company"},
            {"name": "Cras Pellentesque Associates"},
            {"name": "Orci Quis Inc."},
            {"name": "Ligula Consulting"},
            {"name": "Accumsan Convallis Consulting"},
            {"name": "Sed LLP"},
            {"name": "A Limited"},
            {"name": "Consectetuer Institute"},
            {"name": "Justo Nec Ante Incorporated"},
            {"name": "Vitae Sodales At Incorporated"},
            {"name": "Et Malesuada Institute"},
            {"name": "Felis Donec Tempor Ltd"},
        ],function(vendor) {
            Vendors.insert(vendor);
        });
    }
});
