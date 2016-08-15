Ext.define('ArqAdmin.view.staticData.fotografico.FtCategorias', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'ftcategorias-grid',

    store: 'staticData.fotografico.FtCategorias',

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
            text: 'Categorias',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'categoria',
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