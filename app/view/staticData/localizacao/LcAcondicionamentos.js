Ext.define('ArqAdmin.view.staticData.localizacao.LcAcondicionamentos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'acondicionamentos-grid',

    store: 'staticData.localizacao.LcAcondicionamentos',

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
            dataIndex: 'acondicionamento',
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