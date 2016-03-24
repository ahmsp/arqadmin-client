Ext.define('ArqAdmin.view.staticData.classificacao.Acervos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'acervos-grid',

    store: 'staticData.classificacao.Acervos',

    reference: 'acervosGrid',

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
            text: 'Classificação (atalho)',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'acervo_nome',
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