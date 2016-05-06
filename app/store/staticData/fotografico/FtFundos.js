Ext.define('ArqAdmin.store.staticData.fotografico.FtFundos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.ftfundos',

    model: 'ArqAdmin.model.staticData.fotografico.FtFundo',

    sorters: {
        property: 'fundo'
    }

});