Ext.define('ArqAdmin.store.documental.Documentos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.documentos',

    model: 'ArqAdmin.model.documental.Documento',

    pageSize: 100,
    remoteFilter: true,
    remoteSort: true

});