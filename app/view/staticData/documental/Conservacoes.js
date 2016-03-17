Ext.define('ArqAdmin.view.staticData.documental.Conservacoes', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'conservacoes-grid',

    store: 'staticData.documental.Conservacoes',

    columns: [
        {
            text: 'Cód.',
            width: 70,
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
            dataIndex: 'conservacao_estado',
            editor: {
                allowBlank: false,
                maxLength: 15
            },
            filter: {
                type: 'string',
                menuFilterText: 'Filtros',
                emptyText: 'Insira o termo para filtar...'
            }
        }
    ]
});