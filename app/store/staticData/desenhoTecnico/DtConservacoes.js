Ext.define('ArqAdmin.store.staticData.desenhoTecnico.DtConservacoes', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dtconservacoes',

    model: 'ArqAdmin.model.staticData.desenhoTecnico.DtConservacao',

    sorters: {
        property: 'conservacao'
    }

});