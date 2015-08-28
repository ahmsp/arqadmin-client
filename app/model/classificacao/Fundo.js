Ext.define('ArqAdmin.model.classificacao.Fundo', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'fundo_nome'
        }
    ]
});