Ext.define('ArqAdmin.view.staticData.sepultamento.SfmNacionalidades', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'nacionalidades-grid',

    store: 'staticData.classificacao.SfmNacionalidades',

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
            text: 'Nacionalidades',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'nacionalidade',
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