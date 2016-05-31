Ext.define('ArqAdmin.view.staticData.desenhoTecnico.DtEscalas', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'escalas-grid',

    store: 'staticData.desenhoTecnico.DtEscalas',

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
            text: 'Escalas',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'escala',
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