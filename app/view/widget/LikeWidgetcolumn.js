Ext.define('ArqAdmin.view.widget.LikeWidgetcolumn', {
    extend: 'Ext.grid.column.Widget',
    alias: 'widget.LikeWidgetcolumn',

    width: 40,
    text: '<span class="icon-star2" style="font-family:icomoon;color:#587f86">&#xe90e;</span>',
    tooltip: 'Favoritos',
    sortable: false,
    menuDisabled: true,
    tdCls: 'td-column-like',
    widget: {
        xtype: 'button',
        ui: 'plain-toolbar-small',
        cls: 'btn-column-like',
        border: false,
        enableToggle: true,
        glyph: ArqAdmin.util.Glyphs.getGlyph('star'),
        tooltip: 'Favorito',
        handler: 'onLikeWidgetClick'
    },
    // widget: {
    //     xtype: 'checkbox',
    //     handler: function (button, e, options) {
    //         var record = button.getWidgetRecord();
    //         console.log(record);
    //     }
    // },
    onWidgetAttach: function (column, widget, record) {
        // var grid = column.up('gridpanel').getView();
        // me.selectRecord(componentGrid, record);
        // widget.widgetId = record.get('id');

        if (!Ext.isEmpty(record.get('likable'))) {
            widget.setPressed(true);
        } else {
            widget.setPressed(false);
        }
    }
});