Ext.define('ArqAdmin.model.staticData.documental.Conservacao', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Conservacao',

    fields: [
        { name: 'conservacao_estado', sortType: 'asUCString'}
    ],

    validators: {
        conservacao_estado: [
            { type: 'presence'},
            { type: 'length', min: 3, max: 15}
        ]
    }
});