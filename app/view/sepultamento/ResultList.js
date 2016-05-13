Ext.define('ArqAdmin.view.sepultamento.ResultList', {
    extend: 'ArqAdmin.view.sepultamento.BaseGrid',
    xtype: 'sepultamento-result-list',

    reference: 'resultList',
    enableColumnHide: false,
    enableColumnMove: false,
    enableColumnResize: false,
    sortableColumns: false,

    columns: [
        {
            xtype: 'gridcolumn',
            renderer: function (value, metaData, record) {
                var img = record.get('imagem');
                if (!Ext.isEmpty(img)) {
                    var imgPath = ArqAdmin.config.Runtime.getImagesSepultamento() + record.getId() + '/75';
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
                '<span>Nome:</span> {sfm_nome}<br>',
                '<span>Cônjuge:</span> {sfm_conjuge}<br>',
                '<span>Pai:</span> {sfm_pai}<br>',
                '<span>Mãe:</span> {sfm_mae}<br>',
                '<span>Data:</span> {sfm_data_morte}'
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
