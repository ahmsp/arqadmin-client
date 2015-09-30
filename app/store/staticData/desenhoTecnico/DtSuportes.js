Ext.define('ArqAdmin.store.staticData.desenhoTecnico.DtSuportes', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dtsuportes',

    model: 'ArqAdmin.model.staticData.desenhoTecnico.DtSuporte',

    sorters: {
        property: 'suporte'
    }

});