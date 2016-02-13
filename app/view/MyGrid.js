/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 13.02.16
 * Time: 22:19
 */
Ext.define('Erdal.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.column.Date'
    ],

    plugins: [],

    xtype: 'mygrid',

    store: 'MyStore',

    rowLines: true,
    colLines: true,

    columns: [
        {text: 'Id', dataIndex: 'id', width: 200},
        {text: 'Description', dataIndex: 'description', flex: 1},
        {text: 'Date', dataIndex: 'date', width: 200, xtype: 'datecolumn', format: 'M d, Y'}
    ]
});