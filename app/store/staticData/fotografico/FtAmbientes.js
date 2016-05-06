Ext.define('ArqAdmin.store.staticData.fotografico.FtAmbientes', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.ftambientes',

    model: 'ArqAdmin.model.staticData.fotografico.FtAmbiente',

    sorters: {
        property: 'ambiente'
    }

});