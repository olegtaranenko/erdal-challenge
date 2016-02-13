Ext.define('Erdal.Application', {
    name: 'Erdal',

    extend: 'Ext.app.Application',

    requires: [
        'Erdal.store.MyStore'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        'MyStore'
    ]
});
