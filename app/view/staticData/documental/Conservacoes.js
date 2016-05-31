Ext.define('ArqAdmin.view.staticData.documental.Conservacoes', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'conservacoes-grid',

    store: 'staticData.documental.Conservacoes',

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
            text: 'Estado de Conservação',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'conservacao_estado',
            editor: {
                allowBlank: false,
                maxLength: 15,
                minLength: 3
            },
            filter: {
                type: 'string'
            }
        }
    ]
});