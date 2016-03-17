Ext.define('ArqAdmin.model.staticData.classificacao.Dossie', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Dossie',

    fields: [
        { name: 'fundo_id' },
        { name: 'subfundo_id' },
        { name: 'grupo_id' },
        { name: 'subgrupo_id' },
        { name: 'serie_id' },
        { name: 'subserie_id' },
        { name: 'dossie_nome', sortType: 'asUCString'}
    ],

    validators: {
        dossie_nome: [
            { type: 'presence'},
            { type: 'length', min: 3, max: 75}
        ]
    }
});