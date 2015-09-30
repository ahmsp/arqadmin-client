Ext.define('ArqAdmin.store.staticData.desenhoTecnico.DtTecnicas', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dttecnicas',

    model: 'ArqAdmin.model.staticData.desenhoTecnico.DtTecnica',

    sorters: {
        property: 'tecnica'
    }

});