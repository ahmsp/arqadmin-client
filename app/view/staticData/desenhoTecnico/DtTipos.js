Ext.define('ArqAdmin.view.staticData.desenhoTecnico.DtTipos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'tipos-grid',

    store: 'staticData.desenhoTecnico.DtTipos',

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
            text: 'Tipos',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'tipo',
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
