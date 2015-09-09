Ext.define('ArqAdmin.store.desenho.DtConservacoes', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.dtconservacoes',

    model: 'ArqAdmin.model.desenho.DtConservacao',

    sorters: {
        property: 'conservacao'
    }

});