Ext.define('ArqAdmin.store.desenho.DesenhosTecnicos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.desenhostecnicos',

    model: 'ArqAdmin.model.desenho.DesenhoTecnico',

    pageSize: 100,
    remoteFilter: true,
    remoteSort: true
});