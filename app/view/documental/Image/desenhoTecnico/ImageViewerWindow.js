Ext.define('ArqAdmin.view.documental.image.desenhoTecnico.ImageViewerDesenhoTecnico', {
    extend: 'Ext.window.Window',
    xtype: 'imageviewer-desenhotecnico',

    requires: [
        'ArqAdmin.view.documental.image.desenhoTecnico.ImageViewer',
        'ArqAdmin.view.documental.ImageViewerDetail'
    ],

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
            xtype: 'imageviewer-detail',
            region: 'east',
            split: true,
            reference: 'displayPanel',
            width: 450,
            layout: 'card',
            bodyBorder: true,
            collapsible: true,

            //margin: '0 0 0 0',
            splitterResize: false
        }
    ]

});