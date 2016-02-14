/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 14.02.16
 * Time: 02:19
 */
Ext.define('Erdal.ux.MyTextArea', {
    extend: 'Ext.form.field.TextArea',

    alias: 'widget.mytextarea',
    grow: true,
    growMin: 10,

    valueToRaw: function(value) {
        var reCr = /<br\/>/ig;

        if (value) {
            value = value.replace(reCr, '\n');
        }
        return this.callParent([value]);
    },

    rawToValue: function(value) {
        var reCr = /[\n\r]/g;

        if (value) {
            value = value.replace(reCr, '<br/>');
        }
        return this.callParent(arguments);
    }
});