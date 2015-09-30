Ext.define('ArqAdmin.store.staticData.documental.DtUsos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dtusos',


    model: 'ArqAdmin.model.staticData.documental.DtUso',

    sorters: {
        property: 'uso'
    }

});