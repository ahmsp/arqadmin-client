Ext.define('ArqAdmin.view.staticData.fotografico.FtAmbientes', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'ftambientes-grid',

    store: 'staticData.classificacao.FtAmbientes',

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
            text: 'Ambientes',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'ambiente',
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