/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 13.02.16
 * Time: 22:33
 */
Ext.define('Erdal.model.MyModel', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'description',  type: 'string'},
        {name: 'date',  type: 'date'}
    ]
});