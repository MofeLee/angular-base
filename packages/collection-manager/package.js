'use strict';

Package.describe({
    name: 'angular-base:collection-manager',
    summary: ' /* Fill me in! */ ',
    version: '1.0.0',
    git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
    var files, groups, i, j, options;

    api.versionsFrom('1.0.4.2');
    api.use('mongo');
    api.use('underscore');
    api.use('aldeed:collection2@2.3.2');

    options = {
        files: {
            both: [
                'collection-manager.js'
            ],
            client: [
            ],
            server: [
            ]
        },
        exports: [
            'CollectionManager'
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
    api.use('angular-base:collection-manager');
    api.addFiles('collection-manager-tests.js');
});
