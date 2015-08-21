Ext.define('ArqAdmin.store.classificacao.Dossies', {
    extend: 'Ext.data.Store',
    alias: 'store.dossies',

    requires: [
        'ArqAdmin.model.classificacao.Dossie',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.util.Sorter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'classificacao.Dossies',
            autoLoad: true,
            model: 'ArqAdmin.model.classificacao.Dossie',
            remoteFilter: true,
            remoteSort: false,
            sortOnLoad: true,
            proxy: {
                type: 'rest',
                url: '/api/documento/auxtable/Dossie',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            sorters: {
                property: 'dossie_nome'
            }
        }, cfg)]);
    }
});