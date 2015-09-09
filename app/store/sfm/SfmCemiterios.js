Ext.define('ArqAdmin.store.sfm.SfmCemiterios', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.sfmcemiterios',

    model: 'ArqAdmin.model.sfm.SfmCemiterio',

    sorters: {
        property: 'cemiterio'
    }

});