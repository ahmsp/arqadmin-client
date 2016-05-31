Ext.define('ArqAdmin.view.staticData.classificacao.Subfundos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'subfundos-grid',

    store: 'staticData.classificacao.Subfundos',

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
            text: 'Sub-fundos',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'subfundo_nome',
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