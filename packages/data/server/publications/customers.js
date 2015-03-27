'use strict';

Meteor.publish(Customers.pub.index, function(selector, opts) {
    return Customers.find(selector || {}, opts || {});
});
