Ext.define('ArqAdmin.view.staticData.desenhoTecnico.DtSuportes', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'suportes-grid',

    store: 'staticData.desenhoTecnico.DtSuportes',

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
            text: 'Suportes',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'suporte',
            editor: {
                allowBlank: false,
                minLength: 3,
                maxLength: 45
            },
            filter: {
                type: 'string',
                menuFilterText: 'Filtros',
                emptyText: 'Insira o termo para filtar...'
            }
        }
    ]
});