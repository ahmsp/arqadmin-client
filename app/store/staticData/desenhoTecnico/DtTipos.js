Ext.define('ArqAdmin.store.staticData.desenhoTecnico.DtTipos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dttipos',

    model: 'ArqAdmin.model.staticData.desenhoTecnico.DtTipo',

    sorters: {
        property: 'tipo'
    }

});