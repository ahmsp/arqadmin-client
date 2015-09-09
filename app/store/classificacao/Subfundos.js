Ext.define('ArqAdmin.store.classificacao.Subfundos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.subfundos',

    model: 'ArqAdmin.model.classificacao.Subfundo',

    sorters: {
        property: 'subfundo_nome'
    }

});