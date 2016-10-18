Ext.define('ArqAdmin.view.documental.image.ImageViewerDataview', {
    extend: 'Ext.panel.Panel',
    xtype: 'imageviewer-dataview',

    title: 'Imagens relacionadas',
    split: true,
    collapsible: true,
    autoScroll: true,
    height: 150,

    items: [
        {
            xtype: 'dataview',
            reference: 'imageViewerDataview',

            bind: '{documentalImages}',

            multiSelect: false,
            scrollable: true,
            cls: 'images-view',
            emptyText: '<span class="empty-text">Nenhuma imagem para exibir</span>',
            itemSelector: 'div.thumb-wrap',
            trackOver: true,
            overItemCls: 'x-item-over',
            tpl: [
                '<tpl for=".">',
                    '<div class="thumb-wrap thumb-wrap-small"">',
                        '<div class="thumb">{[this.getImage(values.id, values.arquivo_nome)]}</div>',
                    '</div>',
                '</tpl>',
                {
                    getImage: function (id, arquivoNome) {
                        if (!Ext.isEmpty(arquivoNome)) {
                            imgPath = ArqAdmin.config.Runtime.getImagesDocumental() + id + '/75';
                            return '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image-75.png\';">';
                        } else {
                            return '<img src="resources/ico/no-image-75.png" >';
                        }
                    }
                }
            ],
            listeners: {
                viewready: 'onDataviewViewready',
                select: 'onDataviewSelect',
                itemclick: 'onDataviewSelect',
                itemdblclick: 'onGridCelldblclick',
                deselect: 'onImageviewerDataviewDeselect'
            }
        }
    ]
});