Ext.define('ArqAdmin.store.documental.Documentos', {
    //extend: 'Ext.data.Store',
    extend: 'ArqAdmin.store.Base',

    //requires: [
    //    'Packt.model.film.SearchActor'
    //],

    alias: 'store.documentos',

    model: 'ArqAdmin.model.documental.Documento',
    //autoLoad: true,
    pageSize: 100,
    remoteFilter: true,
    remoteSort: true,

    proxy: {
        type: 'rest',
        url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/documento',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }

});
