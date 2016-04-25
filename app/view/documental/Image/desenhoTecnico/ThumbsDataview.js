Ext.define('ArqAdmin.view.documental.image.desenhoTecnico.ThumbsDataview', {
    extend: 'Ext.view.View',
    //alias: 'widget.thumbsdataview',
    xtype: 'documental-thumbsdataview',

    requires: [],

    reference: 'thumbsDataview',

    bind: {
        store: '{desenhosTecnicos}'
    },
    scrollable: true,
    cls: 'images-view',
    emptyText: '<span class="empty-text">Nenhuma imagem para exibir</span>',
    itemSelector: 'div.thumb-wrap',
    trackOver: true,
    overItemCls: 'x-item-over',
    tpl: [
        '<tpl for=".">',
        '<div class="thumb-wrap thumb-wrap-small">',
        '<div class="thumb">{[this.getImage(values.id)]}</div>',
        '</div>',
        '</tpl>',
        {
            getImage: function (id) {
                if (!Ext.isEmpty(id)) {
                    var imgPath = ArqAdmin.config.Runtime.getImagesDocumental() + id + '/100';
                    return '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image.png\';">';
                } else {
                    return '<img src="resources/ico/no-image.png" >';
                }
            }
        }
    ],
    listeners: {
        select: 'showImageViewerWindow'
    }
});
