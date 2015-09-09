Ext.define('ArqAdmin.store.classificacao.Subgrupos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.subgrupos',

    model: 'ArqAdmin.model.classificacao.Subgrupo',

    sorters: {
        property: 'subgrupo_nome'
    }

});