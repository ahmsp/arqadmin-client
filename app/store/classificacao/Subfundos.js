Ext.define('ArqAdmin.store.classificacao.Subfundos', {
    extend: 'Ext.data.Store',
    alias: 'store.subfundos',

    requires: [
        'ArqAdmin.model.classificacao.Subfundo',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.util.Sorter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'classificacao.Subfundos',
            autoLoad: true,
            model: 'ArqAdmin.model.classificacao.Subfundo',
            proxy: {
                type: 'rest',
                url: '/api/documento/auxtable/Subfundo',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            remoteSort: false,
            sortOnLoad: true,
            sorters: {
                property: 'subfundo_nome'
            }
        }, cfg)]);
    }
});