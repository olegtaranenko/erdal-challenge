/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 13.02.16
 * Time: 22:19
 */
Ext.define('Erdal.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Erdal.ux.MyTextArea',
        'Ext.grid.column.Column',
        'Ext.grid.column.Date',
        'Ext.grid.plugin.CellEditing'
    ],

    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1,
        autoSize: true
    },

    xtype: 'mygrid',

    store: 'MyStore',
    selType: 'cellmodel',

    rowLines: true,
    colLines: true,

    initComponent: function() {
        var me = this;

        me.columns = [
            {text: 'Id', dataIndex: 'id', width: 200},
            {text: 'Description', dataIndex: 'description', flex: 1, xtype: 'gridcolumn', editor: 'mytextarea'},
            {text: 'Date', dataIndex: 'date', width: 200, xtype: 'datecolumn', format: 'M d, Y'}
        ];

        me.callParent(arguments);

    }
});