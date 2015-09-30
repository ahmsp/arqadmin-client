Ext.define('ArqAdmin.store.staticData.classificacao.Series', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.series',

    model: 'ArqAdmin.model.staticData.classificacao.Serie',

    sorters: {
        property: 'serie_nome'
    }

});