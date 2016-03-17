Ext.define('ArqAdmin.model.staticData.classificacao.Acervo', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Acervo',

    fields: [
        { name: 'acervo_nome', sortType: 'asUCString'},
        { name: 'descricao' },
        { name: 'fundo_id' },
        { name: 'subfundo_id' },
        { name: 'grupo_id' },
        { name: 'subgrupo_id' },
        { name: 'serie_id' },
        { name: 'subserie_id' },
        { name: 'dossie_id' }
    ],

    validators: {
        acervo_nome: [
            { type: 'presence'},
            { type: 'length', min: 3, max: 45}
        ],
        descricao: [
            { type: 'length', max: 45}
        ]
    }
});