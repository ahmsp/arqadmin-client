Ext.define('ArqAdmin.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'ArqAdmin.util.Util'
    ],

    schema: {
        namespace: 'ArqAdmin.model',
        urlPrefix: 'api',
        proxy: {
            type: 'rest',
            url: '/{prefix}/{entityName}', // ex: '/api/classificacao/Subfundo' ???
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
