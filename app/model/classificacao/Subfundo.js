Ext.define('ArqAdmin.model.classificacao.Subfundo', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Subfundo',

    fields: [
        { name: 'fundo_id' },
        { name: 'subfundo_nome', sortType: 'asUCString'}
    ]
});