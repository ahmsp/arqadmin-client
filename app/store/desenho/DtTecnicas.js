Ext.define('ArqAdmin.store.desenho.DtTecnicas', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dttecnicas',

    model: 'ArqAdmin.model.desenho.DtTecnica',

    sorters: {
        property: 'tecnica'
    }

});