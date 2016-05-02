Ext.define('ArqAdmin.view.staticData.sepultamento.SfmCemiterios', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'cemiterios-grid',

    store: 'staticData.sepultamento.SfmCemiterios',

    columns: [
        {
            text: 'Id.',
            width: 70,
            tdCls: 'td-align-middle',
            align: 'center',
            dataIndex: 'id',
            resizable: false,
            filter: {
                type: 'numeric',
                emptyText: 'Insira o número...'
            }
        },
        {
            text: 'Cemitérios',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'cemiterio',
            editor: {
                allowBlank: false,
                minLength: 3,
                maxLength: 145
            },
            filter: {
                type: 'string',
                menuFilterText: 'Filtros',
                emptyText: 'Insira o termo para filtar...'
            }
        }
    ]
});