Ext.define('ArqAdmin.view.staticData.fotografico.FtTipologias', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'fttipologias-grid',

    store: 'staticData.classificacao.FtTipologias',

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
            text: 'Tipologias',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'tipologia',
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