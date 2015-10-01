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
            url: '/{prefix}/{entityName:lowercase}', // '/api/subfundo'
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json'
            },
            listeners: {
                exception: function (proxy, request, operation) {
                    var message = request.responseText || 'Erro! Ocorreu uma falha no servidor';

                    ArqAdmin.util.Util.showErrorMsg(message);
                }
            }

        }
    }
});
