Ext.define('ArqAdmin.model.staticData.classificacao.Grupo', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Grupo',

    fields: [
        { name: 'fundo_id' },
        { name: 'subfundo_id' },
        { name: 'grupo_nome', sortType: 'asUCString'}
    ],

    validators: {
        grupo_nome: [
            { type: 'presence'},
            { type: 'length', min: 3, max: 145}
        ]
    }
});