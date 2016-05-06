Ext.define('ArqAdmin.view.staticData.fotografico.FtCategorias', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'ftcategorias-grid',

    store: 'staticData.classificacao.FtCategorias',

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
                type: 'string',
                menuFilterText: 'Filtros',
                emptyText: 'Insira o termo para filtar...'
            }
        }
    ]
});