Ext.define('ArqAdmin.store.staticData.sepultamento.SfmEstadocivis', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.sfmestadocivis',

    model: 'ArqAdmin.model.staticData.sepultamento.SfmEstadocivil',

    sorters: {
        property: 'estadocivil'
    }

});