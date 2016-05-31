Ext.define('ArqAdmin.view.staticData.sepultamento.SfmCartorios', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'cartorios-grid',

    store: 'staticData.sepultamento.SfmCartorios',

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
            text: 'Cartórios',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'cartorio',
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