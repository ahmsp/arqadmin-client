Ext.define('ArqAdmin.store.staticData.sepultamento.SfmNaturalidades', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.sfmnaturalidades',

    model: 'ArqAdmin.model.staticData.sepultamento.SfmNaturalidade',

    sorters: {
        property: 'naturalidade'
    }

});