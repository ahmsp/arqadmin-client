Ext.define('ArqAdmin.store.staticData.classificacao.Especiedocumentais', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.especiedocumentais',

    model: 'ArqAdmin.model.staticData.classificacao.Especiedocumental',

    sorters: {
        property: 'especiedocumental_nome'
    }

});