/* globals CollectionManager:true */
'use strict';

var collections = {};
var Collection = (Mongo && Mongo.Collection) || Meteor.Collection;

CollectionManager = {
    create: function(name, options) {
        var result;

        // If this is an unnamed collection, just delegate to meteor
        if (!name) {
            return new Collection(null);
        }

        options = options || {};

        // Make sure we haven't already created this collection
        if (_.has(collections, name)) {
            throw new Meteor.Error(500,'Collection \'' + name + '\' already exists');
        }

        // Construct the collection
        result = collections[name] = new Collection(name);

        // Decorate the result
        _.extend(result, {
            /**
             * Returns just the _id values for the specified selector/opts
             * @param {object} selector is the Mongo selector to use
             * @param {object} opts is the Mongo find options (this function overrides opts.fields
             * @returns {[string]} the _id values for the matching records
             */
            findIds: function(selector, opts) {
                var me = this;

                // Override opts.fields to just return _id
                opts = _.extend(opts || {}, {
                    fields: {_id: 1}
                });

                // Delegate to meteor
                return _.pluck(me.find(selector || {}, opts).fetch(), '_id');
            }
        });

        // Return the result
        return result;
    },

    get: function(name) {
        if (!_.has(collections, name)) {
            throw new Meteor.Error(500,'Collection \'' + name + '\' does not exist');
        }
        return collections[name];
    }
};
