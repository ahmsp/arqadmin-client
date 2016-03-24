Ext.define('ArqAdmin.view.staticData.classificacao.Series', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'series-grid',

    store: 'staticData.classificacao.Series',

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
            text: 'Séries',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'serie_nome',
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