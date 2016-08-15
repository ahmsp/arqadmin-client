Ext.define('ArqAdmin.view.staticData.fotografico.FtSeries', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'ftseries-grid',

    store: 'staticData.fotografico.FtSeries',

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
            text: 'Séries',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'serie',
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