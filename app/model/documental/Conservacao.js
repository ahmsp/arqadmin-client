Ext.define('ArqAdmin.model.documental.Conservacao', {
    extend: 'Ext.data.Model',
    alias: 'model.conservacao',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'conservacao_estado'
        }
    ]
});