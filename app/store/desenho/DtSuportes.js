Ext.define('ArqAdmin.store.desenho.DtSuportes', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dtsuportes',

    model: 'ArqAdmin.model.desenho.DtSuporte',

    sorters: {
        property: 'subfundo_nome'
    }

});