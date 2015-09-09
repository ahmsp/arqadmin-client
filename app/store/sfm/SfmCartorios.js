Ext.define('ArqAdmin.store.sfm.SfmCartorios', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.sfmcartorios',

    model: 'ArqAdmin.model.sfm.SfmCartorio',

    sorters: {
        property: 'cartorio'
    }

});