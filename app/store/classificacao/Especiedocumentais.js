Ext.define('ArqAdmin.store.classificacao.Especiedocumentais', {
    extend: 'Ext.data.Store',
    alias: 'store.especiedocumentais',

    requires: [
        'ArqAdmin.model.classificacao.Especiedocumental',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.util.Sorter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'classificacao.Especiedocumentais',
            autoLoad: true,
            model: 'ArqAdmin.model.classificacao.Especiedocumental',
            remoteFilter: true,
            remoteSort: true,
            proxy: {
                type: 'rest',
                url: '/api/documento/auxtable/Especiedocumental',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            sorters: {
                property: 'especiedocumental_nome'
            }
        }, cfg)]);
    }
});