Ext.define('ArqAdmin.view.fotografico.ResultGallery', {
    extend: 'Ext.panel.Panel',
    xtype: 'fotografico-result-gallery',

    reference: 'resultGallery',

    header: false,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'dataview',
            flex: 1,
            scrollable: true,

            bind: '{fotografias}',

            cls: 'images-view',
            emptyText: [
                '<div class="empty-text">' +
                '<p>Nenhuma imagem para exibir.</p>' +
                '<p>Faça sua pesquisa utilizando o campo de busca acima, ' +
                'para procurar em todo conteúdo do acervo ' +
                'ou utilize os campos específicos da Pesquisa Detalhada no painel ao lado, ' +
                'para obter resultados mais objetivos.</p>' +
                '</div>'
            ],
            itemSelector: 'div.thumb-wrap',
            trackOver: true,
            overItemCls: 'x-item-over',
            tpl: [
                '<tpl for=".">',
                    '<div class="thumb-wrap thumb-wrap-medium">',
                        '<div class="thumb">{[this.getImage(values)]}',
                            '<div class="expand-img">',
                                '<a href="#" id="img-{[values.id]}"><span class="icon-expand" style="font-family:icomoon;"> Visualizar</span></a>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</tpl>',
                {
                    getImage: function (values) {
                        if (!Ext.isEmpty(values.id) && !Ext.isEmpty(values.imagem_original)) {
                            var imgPath = ArqAdmin.config.Runtime.getImagesFotografico() + values.id + '/320';
                            return '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image-75.png\';">';
                        } else {
                            return '<img src="resources/ico/no-image-75.png" >';
                        }
                    }
                }
            ],
            listeners: {
                beforeselect: 'onGridBeforeselect',
                select: 'onGridSelect',
                itemdblclick: 'onGridCelldblclick',
                activate: 'onGridActivate',
                click: {
                    delegate: 'a',
                    preventDefault: true,
                    element: 'el',
                    fn: 'onButtonShowImageClick'
                }
            }
        }
    ],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            width: 360,
            displayInfo: true,
            bind : '{fotografias}'
        }
    ],
    listeners: {
        activate: function (panel) {
            var dataview = panel.down('dataview');
            dataview.fireEvent('activate', dataview);
        }
    }
});