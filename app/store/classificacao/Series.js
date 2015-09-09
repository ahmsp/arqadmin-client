Ext.define('ArqAdmin.store.classificacao.Series', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.series',

    model: 'ArqAdmin.model.classificacao.Serie',

    sorters: {
        property: 'serie_nome'
    }

});