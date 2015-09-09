Ext.define('ArqAdmin.model.classificacao.Grupo', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Grupo',

    fields: [
        { name: 'fundo_id' },
        { name: 'subfundo_id' },
        { name: 'grupo_nome', sortType: 'asUCString'}
    ]
});