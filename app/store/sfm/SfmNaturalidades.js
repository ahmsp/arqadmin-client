Ext.define('ArqAdmin.store.sfm.SfmNaturalidades', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.sfmnaturalidades',

    model: 'ArqAdmin.model.sfm.SfmNaturalidade',

    sorters: {
        property: 'naturalidade'
    }

});