Ext.define('ArqAdmin.store.staticData.classificacao.Fundos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.fundos',

    model: 'ArqAdmin.model.staticData.classificacao.Fundo',

    sorters: {
        property: 'fundo_nome'
    }

});