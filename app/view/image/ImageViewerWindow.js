Ext.define('ArqAdmin.view.image.ImageViewerWindow', {
    extend: 'Ext.window.Window',
    xtype: 'imageviewer-window',

    requires: [
        'ArqAdmin.view.image.ImageViewer',
        'ArqAdmin.view.image.ImageViewerDataview',
        'ArqAdmin.view.image.ImageViewerController',
        'ArqAdmin.view.image.DownloadImageWindow'
    ],

    controller: 'imageviewer',
    viewModel: {
        data: {
            title: '',
            currentImage: ''
        }
        //stores: {
        //    download: {
        //        fields: [
        //            {name: 'size'},
        //            {name: 'px'},
        //            {name: 'cm'},
        //            {name: 'dpi'}
        //        ],
        //        data: [
        //            {
        //                "size": "Pequeno",
        //                "px": "3.500",
        //                "cm": "30",
        //                "dpi": "72"
        //            },
        //            {
        //                "size": "Pequeno",
        //                "px": "3.500",
        //                "cm": "30",
        //                "dpi": "72"
        //            },
        //            {
        //                "size": "Pequeno",
        //                "px": "3.500",
        //                "cm": "30",
        //                "dpi": "72"
        //            }
        //        ]
        //    }
        //}
    },

    height: 500,
    width: 500,
    border: false,
    glyph: ArqAdmin.util.Glyphs.getGlyph('image'),
    //cls: 'x-custom-imgprev-window',
    layout: 'border',
    bodyPadding: 10,
    title: 'Visualização de imagens',
    maximized: true,

    autoScroll: true,
    modal: true,
    closable: true,

    //bodyStyle: {
    //    background: '#ececec'
    //},

    style: {
        border: 'none'
    },

    bind: {
        //title: '{title}',
        //glyph: '{glyph}'
    },

    items: [
        {
            xtype: 'imageviewer',
            region: 'center'
        },
        {
            xtype: 'imageviewer-dataview',
            region: 'south'
        }
        //{
        //    xtype: 'imageviewer-detail',
        //    region: 'east',
        //}
    ]

});