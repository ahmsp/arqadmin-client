Ext.define('ArqAdmin.view.image.ImageViewerDataview', {
    extend: 'Ext.panel.Panel',
    xtype: 'imageviewer-dataview',

    title: 'Imagens relacionadas',
    split: true,
    collapsible: true,
    autoScroll: true,
    height: 170,

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
                        '<div class="thumb">{[this.getImage(values.id)]}</div>',
                    '</div>',
                '</tpl>',
                {
                    getImage: function (id) {
                        if (!Ext.isEmpty(id)) {
                            imgPath = ArqAdmin.config.Runtime.getImagesDocumental() + id + '/100';
                            return '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image.png\';">';
                        } else {
                            return '<img src="resources/ico/no-image.png" >';
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