Ext.define('ArqAdmin.store.classificacao.Grupos', {
    extend: 'ArqAdmin.store.Base',

    alias: 'store.grupos',

    model: 'ArqAdmin.model.classificacao.Grupo',

    sorters: {
        property: 'grupo_nome'
    }

});