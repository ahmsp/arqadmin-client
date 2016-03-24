Ext.define('ArqAdmin.view.staticData.localizacao.LcCompartimentos', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'compartimentos-grid',

    store: 'staticData.localizacao.LcCompartimentos',

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
            text: 'Sala',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'compartimento',
            editor: {
                allowBlank: false,
                minLength: 3,
                maxLength: 45
            },
            filter: {
                type: 'string',
                menuFilterText: 'Filtros',
                emptyText: 'Insira o termo para filtar...'
            }
        }
    ]
});