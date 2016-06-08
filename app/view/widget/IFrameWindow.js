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
    // layout: {
    //
    // },

    bodyStyle: {
        background: '#ececec'
        // background: '#fff'
    },
    // dockedItems: [
    //     {
    //         xtype: 'toolbar',
    //         dock: 'bottom',
    //         // ui: 'toolbar-light',
    //
    //         items: [
    //             '->',
    //             {
    //                 xtype: 'button',
    //                 flex: 1,
    //                 text: 'Fechar',
    //                 handler: function () {
    //                     this.up('window').close();
    //                 }
    //             }
    //         ]
    //     }
    // ],
    items: [
        {
            xtype: 'uxiframe',
            region: 'center',
            src: '',
            padding: 10
        },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            region: 'south',
            items: [
                {
                    xtype: 'button',
                    ui: 'plain-toolbar-small',
                    overCls: 'bt-plain-over',
                    flex: 1,
                    text: 'Fechar',
                    handler: function () {
                        this.up('window').close();
                    }
                }
            ]
        }

    ]
});