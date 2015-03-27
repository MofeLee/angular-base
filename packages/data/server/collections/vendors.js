'use strict';

/*
 * Add query methods like this:
 *  Vendors.findPublic = function () {
 *    return Vendors.find({is_public: true});
 *  }
 */

Vendors.deny({
    insert: function (/* userId, doc */) {
        return false;
    },

    update: function (/* userId, doc, fieldNames, modifier */) {
        return false;
    },

    remove: function (/* userId, doc */) {
        return false;
    }
});
