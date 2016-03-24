Ext.define('ArqAdmin.model.staticData.classificacao.Acervo', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Acervo',

    fields: [
        {
            name: 'acervo_nome',
            sortType: 'asUCString'
        },
        {
            name: 'descricao'
        },
        {
            name: 'fundo_id',
            type: 'int'
        },
        {
            name: 'subfundo_id',
            type: 'int'
        },
        {
            name: 'grupo_id',
            type: 'int'
        },
        {
            name: 'subgrupo_id',
            type: 'int'
        },
        {
            name: 'serie_id',
            type: 'int'
        },
        {
            name: 'subserie_id',
            type: 'int'
        },
        {
            name: 'dossie_id',
            type: 'int'
        }
    ]
});