Ext.define('ArqAdmin.view.documental.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'documental-list',

    requires: [
        'Ext.grid.column.Template',
        'Ext.XTemplate',
        'Ext.toolbar.Paging'
    ],

    reference: 'documentalList',
    enableColumnHide: false,
    enableColumnMove: false,
    enableColumnResize: false,
    sortableColumns: false,
    store: 'documental.Documentos',

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
    ],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            width: 360,
            displayInfo: true,
            store: 'documental.Documentos'
        }
    ]

});