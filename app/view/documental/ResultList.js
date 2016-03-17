Ext.define('ArqAdmin.view.documental.ResultList', {
    extend: 'ArqAdmin.view.documental.BaseGrid',
    xtype: 'result-list',

    reference: 'resultList',
    enableColumnHide: false,
    enableColumnMove: false,
    enableColumnResize: false,
    sortableColumns: false,

    columns: [
        {
            xtype: 'gridcolumn',
            renderer: function (value, metaData, record) {
                var dt = record.get('desenhos_tecnicos');
                if (!Ext.isEmpty(dt)) {
                    var imgPath = ArqAdmin.config.Runtime.getImagesCartografico() + dt[0].id + '/75';
                    return '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image.png\';">';
                } else {
                    return '<img src="resources/ico/no-image.png" >';
                }
            },
            dataIndex: 'id',
            tdCls: 'x-custom-td-thumbnail',
            text: 'Imagem'
        },
        {
            xtype: 'templatecolumn',
            tpl: [
                '<span>Interessado:</span> {interessado}<br>',
                '<span>Assunto:</span> {assunto}<br>',
                '<span>Endereço:</span> {dt_endereco}<br>',
                '<span>Proprietário:</span> {dt_proprietario}<br>',
                '<span>Espécie Documental:</span> {especiedocumental_nome}'
            ],
            tdCls: 'x-custom-td-list',
            text: 'Dados do Item',
            flex: 1
        }
    ],
    listeners: {
        cellclick: 'onGridCellClick'
    }
});
