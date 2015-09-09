Ext.define('ArqAdmin.store.sfm.RegistrosSepultamentos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.registrossepultamentos',

    model: 'ArqAdmin.model.sfm.RegistroSepultamento',

    pageSize: 100,
    remoteFilter: true,
    remoteSort: true
});