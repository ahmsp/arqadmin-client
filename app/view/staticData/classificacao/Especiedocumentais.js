Ext.define('ArqAdmin.view.staticData.classificacao.Especiedocumentais', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'especiedocumental-grid',

    store: 'staticData.classificacao.Especiedocumentais',

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
            text: 'Especie Documental',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'especiedocumental_nome',
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