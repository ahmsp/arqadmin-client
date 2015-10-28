Ext.define('ArqAdmin.view.image.ImageViewerWindow', {
    extend: 'Ext.window.Window',
    xtype: 'imageviewer-window',

    requires: [
        'ArqAdmin.view.image.ImageViewer',
        'ArqAdmin.view.image.ImageViewerDataview'
    ],

    viewModel: {
        data: {
            title: 'Tititititititititi',
            currentImage: ''
        }
    },

    height: 500,
    width: 500,
    //border: 0,
    //glyph: ArqAdmin.util.Glyphs.getGlyph('image'),
    //cls: 'x-custom-imgprev-window',
    layout: 'border',
    //bodyPadding: 10,
    header: false,
    //title: 'Visualização de imagens',
    maximized: true,
    //plain: true,
    //frame: true,

    autoScroll: true,
    modal: true,
    closable: true,

    //bodyStyle: {
    //    background: '#ececec'
    //},

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
            region: 'south',
        }
        //{
        //    xtype: 'imageviewer-detail',
        //    region: 'east',
        //}
    ]

});