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

            //bind: '{images}',

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
                        var imgPath = ArqAdmin.config.Runtime.getImagesCartografico() + id + '/100';
                        return '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image.png\';">';
                    }
                }
            ],
            listeners: {
                viewready: function (view) {
                    view.getSelectionModel().select(view.getStore().getAt(0));
                },
                select: function (viewmodel, record, index) {
                    var me = this,
                        imageViewer = me.up('window').down('container'),
                        image = imageViewer.getImage();

                    if(record){
                        me.up('window').getViewModel().set('currentImage', record.getData());
                        //form.loadRecord(record);

                        var imgLink = ArqAdmin.config.Runtime.getImagesCartografico() + record.getId() + '/600';
                        image.setSrc(imgLink);
                    }


                }
            }
        }
    ]
});