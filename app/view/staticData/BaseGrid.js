Ext.define('ArqAdmin.view.staticData.BaseGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'staticdatagrid',

    requires: [
        'ArqAdmin.util.Glyphs'
    ],

    columnLines: true,
    enableColumnHide: false,
    viewConfig: {
        stripeRows: true
    },

    initComponent: function () {
        var me = this;

        me.plugins = [
            {
                ptype: 'gridfilters',
                menuFilterText: 'Filtros'
            },
            {
                ptype: 'rowediting',
                clicksToEdit: 1,
                pluginId: 'rowEditing',
                errorSummary: false
            }
        ];

        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                ui: 'toolbar-light',
                itemId: 'topToolbar',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'add',
                        text: 'Adicionar novo',
                        glyph: ArqAdmin.util.Glyphs.getGlyph('add')
                    },
                    {
                        xtype: 'tbfill'
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearFilter',
                        text: 'Limpar filtros',
                        glyph: ArqAdmin.util.Glyphs.getGlyph('filter')
                    }
                ]
            }
        ];

        me.columns = Ext.Array.merge(
            me.columns,
            [
                {
                    xtype: 'widgetcolumn',
                    width: 50,
                    sortable: false,
                    menuDisabled: true,
                    resizable: false,
                    widget: {
                        xtype: 'button',
                        ui: 'plain-toolbar-small',
                        glyph: ArqAdmin.util.Glyphs.getGlyph('remove'),
                        tooltip: 'Excluir',
                        scope: me,
                        handler: function (btn) {
                            me.fireEvent('widgetclick', me, btn);
                        }
                    }
                }
            ]
        );

        me.callParent(arguments);
    }
});