'use strict';

Meteor.publish(Vendors.pub.index, function(selector, opts) {
    return Vendors.find(selector || {}, opts || {});
});
