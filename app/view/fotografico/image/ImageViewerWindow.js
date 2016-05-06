Ext.define('ArqAdmin.view.fotografico.image.ImageViewerWindow', {
    extend: 'Ext.window.Window',
    xtype: 'fotografico-imageviewer-window',

    requires: [
        'ArqAdmin.view.widget.ImageViewerImg',
        'ArqAdmin.view.widget.DownloadImageWindow'
    ],

    height: 500,
    width: 500,
    border: false,
    glyph: ArqAdmin.util.Glyphs.getGlyph('image'),
    layout: 'border',
    bodyPadding: 10,
    title: 'Visualização dae imagem',
    maximized: true,

    autoScroll: true,
    modal: true,
    closable: true,

    style: {
        border: 'none'
    },

    items: [
        {
            xtype: 'imageviewer-img',
            region: 'center'
        }
    ]

});