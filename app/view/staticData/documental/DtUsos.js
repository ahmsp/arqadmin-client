Ext.define('ArqAdmin.view.staticData.documental.DtUsos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'usos-grid',

    store: 'staticData.documental.DtUsos',

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
            text: 'Estado de Conservação',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'uso',
            editor: {
                allowBlank: false,
                maxLength: 75,
                minLength: 3
            },
            filter: {
                type: 'string',
                menuFilterText: 'Filtros',
                emptyText: 'Insira o termo para filtar...'
            }
        }
    ]
});