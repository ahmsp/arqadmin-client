Ext.define('ArqAdmin.model.staticData.classificacao.Especiedocumental', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Especiedocumental',

    fields: [
        { name: 'especiedocumental_nome', sortType: 'asUCString'}
    ],

    validators: {
        especiedocumental_nome: [
            { type: 'presence'},
            { type: 'length', min: 3, max: 145}
        ]
    }
});