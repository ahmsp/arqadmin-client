Ext.define('ArqAdmin.view.staticData.desenhoTecnico.DtTecnicas', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'tecnicas-grid',

    store: 'staticData.desenhoTecnico.DtTecnicas',

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
            text: 'Técnicas',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'tecnica',
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