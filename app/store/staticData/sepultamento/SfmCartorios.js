Ext.define('ArqAdmin.store.staticData.sepultamento.SfmCartorios', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.sfmcartorios',

    model: 'ArqAdmin.model.staticData.sepultamento.SfmCartorio',

    sorters: {
        property: 'cartorio'
    }

});