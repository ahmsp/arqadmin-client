Ext.define('ArqAdmin.store.staticData.desenhoTecnico.DtEscalas', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dtescalas',

    model: 'ArqAdmin.model.staticData.desenhoTecnico.DtEscala',

    sorters: {
        property: 'escala'
    }
});