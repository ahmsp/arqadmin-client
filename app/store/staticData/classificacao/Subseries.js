Ext.define('ArqAdmin.store.staticData.classificacao.Subseries', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.subseries',

    model: 'ArqAdmin.model.staticData.classificacao.Subserie',

    sorters: {
        property: 'subserie_nome'
    }

});