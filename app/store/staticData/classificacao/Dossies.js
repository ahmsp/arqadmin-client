Ext.define('ArqAdmin.store.staticData.classificacao.Dossies', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dossies',

    model: 'ArqAdmin.model.staticData.classificacao.Dossie',

    sorters: {
        property: 'dossie_nome'
    }

});