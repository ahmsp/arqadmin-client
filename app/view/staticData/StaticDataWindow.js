Ext.define('ArqAdmin.view.staticData.StaticDataWindow', {
    extend: 'Ext.window.Window',
    xtype: 'staticdata-window',

    height: 600,
    width: 700,
    layout: 'border',
    glyph: ArqAdmin.util.Glyphs.getGlyph('edit'),
    title: 'Edição de dados auxiliares',
    draggable: false,
    modal: true,
    closable: true,
    bodyStyle: {
        background: '#ececec'
    },

    items: []

});