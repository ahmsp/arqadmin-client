Ext.define('ArqAdmin.view.staticData.localizacao.LcSalas', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'salas-grid',

    store: 'staticData.localizacao.LcSalas',

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
            text: 'Sala',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'sala',
            editor: {
                allowBlank: false,
                minLength: 3,
                maxLength: 45
            },
            filter: {
                type: 'string'
            }
        }
    ]
});