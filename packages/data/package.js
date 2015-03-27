'use strict';

Package.describe({
    name: 'angular-base:data',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: ''
});

Package.onUse(function(api) {
    var files, groups, i, j, options;

    api.versionsFrom('1.0.5');
    api.use('underscore');
    api.use('mongo');
    api.use('angular-base:collection-manager');

    options = {
        files: {
            both: [
                // Collections
                'collections/customers.js',
                'collections/vendors.js',
            ],
            client: [
            ],
            server: [
                // Collections
                'collections/customers.js',
                'collections/vendors.js',

                // Publications
                'publications/customers.js',
                'publications/vendors.js',

                // Fixtures
                'fixtures.js'
            ]
        },
        exports: [
            // Collections
            'Customers',
            'Vendors'
        ]
    };

    // Call api.addFiles on each file in the 'options.files' tree above
    groups = [
        {name: 'both',   where: ['client','server']},
        {name: 'client', where: ['client']},
        {name: 'server', where: ['server']}
    ];

    for (i in groups) {
        if (groups.hasOwnProperty(i)) {
            files = options.files[groups[i].name];
            for (j in files) {
                if (files.hasOwnProperty(j)) {
                    api.addFiles(groups[i].name + '/' + files[j], groups[i].where);
                }
            }
        }
    }

    // Call api.export on each 'options.exports' above
    for (i in options.exports) {
        if (options.exports.hasOwnProperty(i)) {
            api.export(options.exports[i]);
        }
    }
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('angular-base:data');
    api.addFiles('data-tests.js');
});
