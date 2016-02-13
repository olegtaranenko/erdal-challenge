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
        {id: 1, date: '02/13/2016',    description: ' * Created by JetBrains WebStorm. <br/>* User: user1 <br/>* Date: 13.02.16 <br/>* Time: 22:32 '},
        {id: 2, date: '02/13/2016 22:10',    description: 'Erdal.model.MyModel'},
    ]
});
