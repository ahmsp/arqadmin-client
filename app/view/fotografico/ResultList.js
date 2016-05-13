Ext.define('ArqAdmin.view.fotografico.ResultList', {
    extend: 'ArqAdmin.view.fotografico.BaseGrid',
    xtype: 'fotografico-result-list',

    reference: 'resultList',
    enableColumnHide: false,
    enableColumnMove: false,
    enableColumnResize: false,
    sortableColumns: false,

    columns: [
        {
            xtype: 'gridcolumn',
            renderer: function (value, metaData, record) {
                var fotografiaId = record.getId();
                if (!Ext.isEmpty(fotografiaId)) {
                    var imgPath = ArqAdmin.config.Runtime.getImagesFotografico() + fotografiaId + '/75';
                    return '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image-75.png\';">';
                } else {
                    return '<img src="resources/ico/no-image-75.png" >';
                }
            },
            dataIndex: 'id',
            tdCls: 'x-custom-td-thumbnail',
            text: 'Imagem'
        },
        {
            xtype: 'templatecolumn',
            tpl: [
                '<span>Identificação:</span> {identificacao}<br>',
                '<span>Assunto:</span> {assunto_geral}; {assunto_1}; {assunto_2}; {assunto_3}<br>',
                '<span>Bairro:</span> {bairro}<br>',
                '<span>Data:</span> {data_imagem}<br>',
                '<span>Autoria:</span> {autoria}<br>',
            ],
            tdCls: 'x-custom-td-list',
            text: 'Dados da Imagem',
            flex: 1
        }
    ],
    listeners: {
        cellclick: 'onGridCellClick'
    }
});
