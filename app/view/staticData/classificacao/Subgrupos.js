Ext.define('ArqAdmin.view.staticData.classificacao.Subgrupos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'subgrupos-grid',

    store: 'staticData.classificacao.Subgrupos',

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
            text: 'Sub-grupos',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'subgrupo_nome',
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