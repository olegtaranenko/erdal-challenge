/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 13.02.16
 * Time: 22:19
 */
Ext.define('Erdal.view.MyGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'mygrid',

    store: 'MyStore',

    columns: [
        {name: 'name', dataIndex: 'firstName'}
    ]
});