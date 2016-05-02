Ext.define('ArqAdmin.view.widget.IFrameWindow', {
    extend: 'Ext.window.Window',
    xtype: 'iframe-window',

    height: 600,
    width: 600,
    layout: 'border',
    glyph: ArqAdmin.util.Glyphs.getGlyph('info'),
    title: '',
    draggable: true,
    autoScroll: true,
    modal: true,
    closable: true,

    bodyStyle: {
        // background: '#ececec'
        background: '#fff'
    },

    items: [
        {
            xtype: 'uxiframe',
            src: '',
            padding: 10
        }
    ]
});