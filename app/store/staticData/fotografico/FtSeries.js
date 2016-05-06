Ext.define('ArqAdmin.store.staticData.fotografico.FtSeries', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.ftseries',

    model: 'ArqAdmin.model.staticData.fotografico.FtSerie',

    sorters: {
        property: 'serie'
    }

});