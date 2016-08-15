Ext.define('ArqAdmin.view.staticData.fotografico.FtFundos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'ftfundos-grid',

    store: 'staticData.fotografico.FtFundos',

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
            dataIndex: 'fundo',
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