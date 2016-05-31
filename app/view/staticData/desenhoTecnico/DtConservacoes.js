Ext.define('ArqAdmin.view.staticData.desenhoTecnico.DtConservacoes', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'dtconservacoes-grid',

    store: 'staticData.desenhoTecnico.DtConservacoes',

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
            text: 'Conservações',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'conservacao',
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
