Ext.define('ArqAdmin.store.staticData.fotografico.FtCromias', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.ftcromias',

    model: 'ArqAdmin.model.staticData.fotografico.FtCromia',

    sorters: {
        property: 'cromia'
    }

});