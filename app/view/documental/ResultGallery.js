Ext.define('ArqAdmin.view.documental.ResultGallery', {
    extend: 'Ext.panel.Panel',
    xtype: 'result-gallery',

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

            //store: 'documental.Documentos',
            bind: '{documentos}',

            cls: 'images-view',
            // emptyText: '<span class="empty-text">Nenhuma imagem para exibir</span>',
            itemSelector: 'div.thumb-wrap',
            trackOver: true,
            overItemCls: 'x-item-over',
            tpl: [
                '<tpl if="this.count(values)" >',
                    '<tpl for=".">',
                        '<tpl if="!Ext.isEmpty(values.desenhos_tecnicos)">',
                            '<div class="thumb-wrap thumb-wrap-medium">',
                                '<div class="thumb">{[this.getImage(values.desenhos_tecnicos)]}',
                                    '<div class="expand-img">',
                                        '<a href="#" id="img-{[values.desenhos_tecnicos[0].id]}"><span class="icon-expand" style="font-family:icomoon;"> Visualizar</span></a>',
                                    '</div>',
                                    '{[this.spamMoreImages(values.desenhos_tecnicos)]}',
                                '</div>',
                            '</div>',
                        '</tpl>',
                    '</tpl>',
                '<tpl else>',
                    '<span class="empty-text" >Nenhuma imagem para exibir</span>',
                '</tpl>',
                {
                    count: function (values) {
                        var count = 0;
                        Ext.Object.each(values, function (k, v) {
                            if (!Ext.isEmpty(v.desenhos_tecnicos)) {
                                count++;
                            }
                        });
                        return count > 0 || false;
                    },
                    spamMoreImages: function (dt) {
                        var count = 0;
                        Ext.Object.each(dt, function (k, v) {
                            if (!Ext.isEmpty(v.id)) {
                                count++;
                            }
                        });

                        if (count > 1) {
                            var more = count -1;
                            return '<span class="img-plus">+' + more + '</span>';
                        }

                        return '';
                    },
                    getImage: function (dt) {
                        if (!Ext.isEmpty(dt) && !Ext.isEmpty(dt[0].arquivo_nome)) {
                            var imgPath = ArqAdmin.config.Runtime.getImagesDocumental() + dt[0].id + '/320';
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
            bind : '{documentos}'
        }
    ],
    listeners: {
        activate: function (panel) {
            var dataview = panel.down('dataview');
            dataview.fireEvent('activate', dataview);
        }
    }
});