Ext.define('ArqAdmin.view.staticData.fotografico.FtCampos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'ftcampos-grid',

    store: 'staticData.classificacao.FtCampos',

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
            text: 'Campos',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'campo',
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