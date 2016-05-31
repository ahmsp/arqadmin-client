Ext.define('ArqAdmin.view.staticData.classificacao.Dossies', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'dossies-grid',

    store: 'staticData.classificacao.Dossies',

    columns: [
        {
            text: 'Id.',
            width: 70,
            tdCls: 'td-align-middle',
            align: 'center',
            dataIndex: 'id',
            resizable: false,
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Dossiê',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'dossie_nome',
            editor: {
                allowBlank: false,
                minLength: 3,
                maxLength: 145
            },
            filter: {
                type: 'string'
            }
        }
    ]
});