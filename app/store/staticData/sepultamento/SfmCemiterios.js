Ext.define('ArqAdmin.store.staticData.sepultamento.SfmCemiterios', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.sfmcemiterios',

    model: 'ArqAdmin.model.staticData.sepultamento.SfmCemiterio',

    sorters: {
        property: 'cemiterio'
    }

});