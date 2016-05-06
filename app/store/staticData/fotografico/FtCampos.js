Ext.define('ArqAdmin.store.staticData.fotografico.FtCampos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.ftcampos',

    model: 'ArqAdmin.model.staticData.fotografico.FtCampo',

    sorters: {
        property: 'campo'
    }

});