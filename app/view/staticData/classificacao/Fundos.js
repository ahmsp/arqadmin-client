Ext.define('ArqAdmin.view.staticData.classificacao.Fundos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'fundos-grid',

    store: 'staticData.classificacao.Fundos',

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
            text: 'Fundos',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'fundo_nome',
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