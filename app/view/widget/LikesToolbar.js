Ext.define('ArqAdmin.view.widget.LikesToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.LikesToolbar',

    dock: 'top',
    ui: 'toolbar-light',

    hidden: true,
    bind: {
        hidden: '{!filterLikes}'
    },

    items: [
        {
            xtype: 'label',
            style: {
                color: '#fff',
                'font-size': '16px',
                'line-height': '16px',
                'font-weight': 'bold'
            },
            text: 'Meus favoritos'
        },
        {
            xtype: 'tbfill'
        },
        {
            glyph: ArqAdmin.util.Glyphs.getGlyph('back'),
            text: 'Voltar para pesquisa',
            handler: 'onClearFilterLikes'
        },
        {
            xtype: 'tbseparator'
        },
        {
            glyph: ArqAdmin.util.Glyphs.getGlyph('trash'),
            text: 'Limpar favoritos',
            handler: 'onRemoveLikes',
            disabled: true,
            bind: {
                disabled: '{!hasRecords}'
            }
        },
        {
            glyph: ArqAdmin.util.Glyphs.getGlyph('fileSymlinkFile'),
            text: 'Exportar para arquivo',
            disabled: true,
            bind: {
                disabled: '{!hasRecords}'
            },
            menu: {
                xtype: 'menu',
                items: [
                    {
                        xtype: 'menuitem',
                        action: 'xls',
                        glyph: ArqAdmin.util.Glyphs.getGlyph('fileExcelO'),
                        text: 'Exportar para Excel',
                        handler: 'onExportLikesToFile'
                    },
                    {
                        xtype: 'menuitem',
                        action: 'pdf',
                        glyph: ArqAdmin.util.Glyphs.getGlyph('filePdfO'),
                        text: 'Exportar para PDF',
                        handler: 'onExportLikesToFile'
                    },
                    {
                        xtype: 'menuitem',
                        action: 'csv',
                        glyph: ArqAdmin.util.Glyphs.getGlyph('fileTextO'),
                        text: 'Exportar para CSV',
                        handler: 'onExportLikesToFile'
                    }
                ]
            }
        }
    ]
});