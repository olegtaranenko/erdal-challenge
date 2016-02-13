/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 13.02.16
 * Time: 22:32
 */
Ext.define('Erdal.store.MyStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Erdal.model.MyModel'
    ],

    alias: 'store.mystore',
    storeId: 'mystore',
    model: 'Erdal.model.MyModel',

    data : [
        {firstName: 'Ed',    lastName: 'Spencer'},
        {firstName: 'Tommy', lastName: 'Maintz'},
        {firstName: 'Aaron', lastName: 'Conran'},
        {firstName: 'Jamie', lastName: 'Avins'}
    ]
});
