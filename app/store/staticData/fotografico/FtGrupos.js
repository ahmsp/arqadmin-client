Ext.define('ArqAdmin.store.staticData.fotografico.FtGrupos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.ftgrupos',

    model: 'ArqAdmin.model.staticData.fotografico.FtGrupo',

    sorters: {
        property: 'grupo'
    }

});