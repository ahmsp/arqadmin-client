Ext.define('ArqAdmin.view.staticData.sepultamento.SfmEstadocivis', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'estadoscivis-grid',

    store: 'staticData.sepultamento.SfmEstadocivis',

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
            text: 'Estados Civis',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'estadocivil',
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