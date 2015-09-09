Ext.define('ArqAdmin.store.sfm.SfmNacionalidades', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.sfmnacionalidades',

    model: 'ArqAdmin.model.sfm.SfmNacionalidade',

    sorters: {
        property: 'nacionalidade'
    }

});