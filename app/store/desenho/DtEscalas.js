Ext.define('ArqAdmin.store.desenho.DtEscalas', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dtescalas',

    model: 'ArqAdmin.model.desenho.DtEscala',

    sorters: {
        property: 'escala'
    }
});