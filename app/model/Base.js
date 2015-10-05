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
            url: ArqAdmin.config.Runtime.getBaseUrl() + '/{prefix}/{entityName:lowercase}',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json'
            },
            listeners: {
                exception: function (proxy, request, operation) {
                    var error = ArqAdmin.util.Util.decodeJSON(request.responseText);
                    ArqAdmin.util.Util.showErrorMsg(error.error_description);


                // {"error":"access_denied","error_description":"The resource owner or authorization server denied the request."}
                // status 401

                }
            }

        }
    }
});
