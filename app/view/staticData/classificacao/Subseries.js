Ext.define('ArqAdmin.view.staticData.classificacao.Subseries', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'subseries-grid',

    store: 'staticData.classificacao.Subseries',

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
            text: 'Sub-séries',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'subserie_nome',
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