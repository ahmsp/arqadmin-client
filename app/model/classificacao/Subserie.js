Ext.define('ArqAdmin.model.classificacao.Subserie', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Subserie',

    fields: [
        { name: 'fundo_id' },
        { name: 'subfundo_id' },
        { name: 'grupo_id' },
        { name: 'subgrupo_id' },
        { name: 'serie_id' },
        { name: 'subserie_nome', sortType: 'asUCString'}
    ]
});