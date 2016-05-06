Ext.define('ArqAdmin.view.staticData.fotografico.FtGrupos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'ftgrupos-grid',

    store: 'staticData.classificacao.FtGrupos',

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
            text: 'Grupos',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'grupo',
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