Ext.define('ArqAdmin.store.classificacao.Especiedocumentais', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.especiedocumentais',

    model: 'ArqAdmin.model.classificacao.Especiedocumental',

    sorters: {
        property: 'especiedocumental_nome'
    }

});