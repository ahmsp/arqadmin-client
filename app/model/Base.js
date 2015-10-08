Ext.define('ArqAdmin.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'ArqAdmin.util.Util',
        'Ext.data.proxy.Rest'
    ],

    fields: [
        {name: 'id', type: 'int'}
    ],

    schema: {
        namespace: 'ArqAdmin.model',
        urlPrefix: 'api',
        proxy: {
            type: 'rest',
            url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/{prefix}/{entityName:lowercase}',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json'
            }
        }
    }
});
