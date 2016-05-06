Ext.define('ArqAdmin.store.staticData.fotografico.FtTipologias', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.fttipologias',

    model: 'ArqAdmin.model.staticData.fotografico.FtTipologia',

    sorters: {
        property: 'tipologia'
    }

});