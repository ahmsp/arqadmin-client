Ext.define('ArqAdmin.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'ArqAdmin.util.Util',
        'Ext.data.proxy.Rest'
    ],

    fields: [
        { name: 'id', type: 'int' }
    ],

    schema: {
        namespace: 'ArqAdmin.model',
        urlPrefix: 'api',
        proxy: {
            type: 'rest',
            url: '/{prefix}/{entityName:lowercase}', // '/api/subfundo'
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json'
                //writeAllFields: true,
                //encode: true, // add a toJSON method when rootProperty is defined
                //rootProperty: 'data',
                //allowSingle: false //one request for creating, updating or deleting records
            },
            listeners: {
                exception: function(proxy, response, operation){
                    ArqAdmin.util.Util.showErrorMsg(response.responseText);
                }
            }

        }
    }
});
