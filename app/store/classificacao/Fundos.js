Ext.define('ArqAdmin.store.classificacao.Fundos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.fundos',

    model: 'ArqAdmin.model.classificacao.Fundo',

    sorters: {
        property: 'fundo_nome'
    }


    //requires: [
    //    'ArqAdmin.model.classificacao.Fundo',
    //    'Ext.data.proxy.Rest',
    //    'Ext.data.reader.Json',
    //    'Ext.util.Sorter'
    //],
    //
    //constructor: function(cfg) {
    //    var me = this;
    //    cfg = cfg || {};
    //    me.callParent([Ext.apply({
    //        storeId: 'classificacao.Fundos',
    //        autoLoad: true,
    //        model: 'ArqAdmin.model.classificacao.Fundo',
    //        remoteFilter: true,
    //        remoteSort: false,
    //        sortOnLoad: true,
    //        //proxy: {
    //        //    type: 'rest',
    //        //    url: '/api/documento/auxtable/Fundo',
    //        //    reader: {
    //        //        type: 'json',
    //        //        rootProperty: 'data'
    //        //    }
    //        //},
    //        sorters: {
    //            property: 'fundo_nome'
    //        }
    //    }, cfg)]);
    //}
});