Ext.define('ArqAdmin.store.staticData.classificacao.Subfundos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.subfundos',

    model: 'ArqAdmin.model.staticData.classificacao.Subfundo',

    sorters: {
        property: 'subfundo_nome'
    }

});