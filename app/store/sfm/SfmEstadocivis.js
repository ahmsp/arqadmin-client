Ext.define('ArqAdmin.store.sfm.SfmEstadocivis', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.sfmestadocivis',

    model: 'ArqAdmin.model.sfm.SfmEstadocivil',

    sorters: {
        property: 'estadocivil'
    }

});