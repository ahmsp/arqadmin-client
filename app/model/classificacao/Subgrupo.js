Ext.define('ArqAdmin.model.classificacao.Subgrupo', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Subgrupo',

    fields: [
        { name: 'conservacao' },
        { name: 'fundo_id' },
        { name: 'subfundo_id' },
        { name: 'grupo_id' },
        { name: 'subgrupo_nome', sortType: 'asUCString'}
    ]
});