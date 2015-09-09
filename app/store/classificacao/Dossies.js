Ext.define('ArqAdmin.store.classificacao.Dossies', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dossies',

    model: 'ArqAdmin.model.classificacao.Dossie',

    sorters: {
        property: 'dossie_nome'
    }

});