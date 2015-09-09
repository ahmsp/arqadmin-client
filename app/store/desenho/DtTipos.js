Ext.define('ArqAdmin.store.desenho.DtTipos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dttipos',

    model: 'ArqAdmin.model.desenho.DtTipo',

    sorters: {
        property: 'tipo'
    }

});