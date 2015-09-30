Ext.define('ArqAdmin.store.staticData.classificacao.Subgrupos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.subgrupos',

    model: 'ArqAdmin.model.staticData.classificacao.Subgrupo',

    sorters: {
        property: 'subgrupo_nome'
    }

});