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
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {

                var imgId = record.get('desenhos_tecnicos')[0].id;

                //if (value) {
                //    //var imgPath = 'data/img-acervo-dt/thumbnails/';
                //    //var imgThumb = value.replace('.jpg','_75x75.jpg');
                //    //return '<img src="' + imgPath + imgThumb + '" >';
                if(imgId){
                    return '<img src="http://arqadmin.dev/api/desenhotecnico/' + imgId + '/imagem" >';

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
    ]
});