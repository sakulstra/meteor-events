Package.describe({
    name: 'sakulstra:calendar',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'A event collection with logic for handling recurring events.',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    //include libraries
    api.use(["templating", "underscore"]);
    api.use(["aldeed:collection2@2.5.0"]);
    api.use(["aldeed:autoform@5.7.1"]);
    api.use(["themeteorchef:controller@1.2.0"], 'client');
    api.use(["kadira:flow-router@2.7.0"],'client');
    api.use(["kadira:blaze-layout@2.2.0"],'client');
    api.use(["tap:i18n@1.7.0"],["client","server"]);


    //add files for both client and server
    api.addFiles([
        "package-tap.i18n",
        "lib/collections/events.js",
        "lib/schemas/events.js"
    ],['client','server']);
    //server specific files
    api.addFiles([
        "lib/publications/events.js",
        "lib/startup.js"
    ],['server']);
    //client specific files
    api.addFiles([
        "lib/templates/eventInsertForm.html",
        "lib/controllers/eventInsertForm.js",
        "lib/routes/routes.js",
        "lib/templates/mainLayout.html"
    ],['client']);
    //language files have to be loaded at the end to be available in the templates
    api.addFiles([
        "lib/i18n/de.i18n.json",
        "lib/i18n/en.i18n.json"
    ],['client',"server"]);
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('sakulstra:calendar');
    //files
    api.addFiles('/test/client/client-test.js','client');
    api.addFiles('/test/client/server-test.js','server');
});
