Ext.define('ArqAdmin.view.staticData.fotografico.FtCromias', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'ftcromias-grid',

    store: 'staticData.classificacao.FtCromias',

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
            text: 'Cromias',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'cromia',
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