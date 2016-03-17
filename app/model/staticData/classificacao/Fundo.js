Ext.define('ArqAdmin.model.staticData.classificacao.Fundo', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Fundo',

    fields: [
        { name: 'fundo_nome', sortType: 'asUCString'}
    ],

    validators: {
        fundo_nome: [
            { type: 'presence'},
            { type: 'length', min: 3, max: 75}
        ]
    }

});