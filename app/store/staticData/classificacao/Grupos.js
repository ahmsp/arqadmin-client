Ext.define('ArqAdmin.store.staticData.classificacao.Grupos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.grupos',

    model: 'ArqAdmin.model.staticData.classificacao.Grupo',

    sorters: {
        property: 'grupo_nome'
    }

});