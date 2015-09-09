Ext.define('ArqAdmin.model.classificacao.Serie', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Serie',

    fields: [
        { name: 'fundo_id' },
        { name: 'subfundo_id' },
        { name: 'grupo_id' },
        { name: 'subgrupo_id' },
        { name: 'serie_nome', sortType: 'asUCString'}
    ]
});