Ext.define('ArqAdmin.store.staticData.fotografico.FtCategorias', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.ftcategorias',

    model: 'ArqAdmin.model.staticData.fotografico.FtCategoria',

    sorters: {
        property: 'categoria'
    }

});