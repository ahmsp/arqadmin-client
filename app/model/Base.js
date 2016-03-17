Ext.define('ArqAdmin.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'ArqAdmin.util.Util',
        'Ext.data.proxy.Rest'
    ],

    //idProperty: 'id',

    fields: [
        {name: 'id', type: 'int', allowNull: true, persist: false}
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
