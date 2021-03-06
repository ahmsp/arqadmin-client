Ext.define('ArqAdmin.view.staticData.sepultamento.SfmNacionalidades', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'nacionalidades-grid',

    store: 'staticData.sepultamento.SfmNacionalidades',

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
            text: 'Nacionalidades',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'nacionalidade',
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