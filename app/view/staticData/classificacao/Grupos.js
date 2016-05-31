Ext.define('ArqAdmin.view.staticData.classificacao.Grupos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'grupos-grid',

    store: 'staticData.classificacao.Grupos',

    columns: [
        {
            text: 'Id.',
            width: 70,
            tdCls: 'td-align-middle',
            align: 'center',
            dataIndex: 'id',
            resizable: false,
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Grupos',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'grupo_nome',
            editor: {
                allowBlank: false,
                minLength: 3,
                maxLength: 145
            },
            filter: {
                type: 'string'
            }
        }
    ]
});