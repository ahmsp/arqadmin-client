Ext.define('ArqAdmin.store.staticData.sepultamento.SfmNacionalidades', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.sfmnacionalidades',

    model: 'ArqAdmin.model.staticData.sepultamento.SfmNacionalidade',

    sorters: {
        property: 'nacionalidade'
    }

});