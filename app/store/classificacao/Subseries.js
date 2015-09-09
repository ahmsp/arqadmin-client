Ext.define('ArqAdmin.store.classificacao.Subseries', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.subseries',

    model: 'ArqAdmin.model.classificacao.Subserie',

    sorters: {
        property: 'subserie_nome'
    }

});