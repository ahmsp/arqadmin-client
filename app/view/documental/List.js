Ext.define('ArqAdmin.view.documental.List', {
    extend: 'ArqAdmin.view.documental.BaseGrid',
    xtype: 'documental-list',

    reference: 'documentalList',
    enableColumnHide: false,
    enableColumnMove: false,
    enableColumnResize: false,
    sortableColumns: false,

    columns: [
        {
            xtype: 'gridcolumn',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                if (value) {
                    var imgPath = 'data/img-acervo-dt/thumbnails/';
                    var imgThumb = value.replace('.jpg','_75x75.jpg');
                    return '<img src="' + imgPath + imgThumb + '" >';
                } else {
                    return '<img src="resources/ico/no-image.png" >';
                }
            },
            dataIndex: 'imagem',
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
    ]
});