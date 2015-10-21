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
            emptyText: '<span class="empty-text">Nenhuma imagem para exibir</span>',
            itemSelector: 'div.thumb-wrap',
            trackOver: true,
            overItemCls: 'x-item-over',
            tpl: [
                '<tpl if="this.count(values)" >',
                '<tpl for=".">',
                '<tpl if="!Ext.isEmpty(values.desenhos_tecnicos)">',
                '<div class="thumb-wrap thumb-wrap-medium" id="{file_name}">',
                '<div class="thumb">{[this.getImage(values.desenhos_tecnicos)]}</div>',
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
                        if (count > 0) {
                            return true;
                        }
                        return false;
                    },
                    getImage: function (dt) {
                        if (!Ext.isEmpty(dt)) {
                            var imgPath = ArqAdmin.config.Runtime.getImagesCartografico() + dt[0].id + '/320';
                            return '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image.png\';">';
                        } else {
                            return '<img src="resources/ico/no-image.png" >';
                        }
                    }
                }
            ],
            listeners: {
                //beforeselect: 'onGridBeforeselect',
                select: 'onGridSelect'
                //celldblclick: 'onGridCelldblclick',
                //render: 'onGridRender',
                //activate: 'onGridActivate'
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
    ]

});