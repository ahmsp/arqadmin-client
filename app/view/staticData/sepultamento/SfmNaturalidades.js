Ext.define('ArqAdmin.view.staticData.sepultamento.SfmNaturalidades', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'naturalidades-grid',

    store: 'staticData.sepultamento.SfmNaturalidades',

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
            text: 'Naturalidades',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'naturalidade',
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