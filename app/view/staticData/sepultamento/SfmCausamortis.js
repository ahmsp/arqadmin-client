Ext.define('ArqAdmin.view.staticData.sepultamento.SfmCausamortis', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'causamortis-grid',

    store: 'staticData.sepultamento.SfmCausamortis',

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
            text: 'Causamortis',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'causamortis',
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