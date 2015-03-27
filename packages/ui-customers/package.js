'use strict';

Package.describe({
    name: 'angular-base:ui-customers',
    version: '0.0.1',
    summary: '',
    git: ''
});

Package.onUse(function(api) {
    var files, groups, i, j, options;

    api.versionsFrom('1.0.5');
    api.use('underscore');
    api.use('templating');
    api.use('urigo:angular');
    api.use('angular-base:data');

    options = {
        files: {
            both: [
            ],
            client: [
                'lib/module.js',

                'views/list/list.import.styl',
                'views/list/list.ng.html',
                'views/list/list_controller.js',

                'index.import.styl'
            ],
            server: [
            ]
        },
        exports: [
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
    api.use('angular-base:ui-customers');
    api.addFiles('ui-customers-tests.js');
});
