Ext.define('ArqAdmin.view.staticData.BaseGrid', {
    //extend: 'Ext.ux.LiveSearchGridPanel',
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

        me.selModel = {
            selType: 'cellmodel'
        };

        me.plugins = [
            {
                ptype: 'cellediting',
                clicksToEdit: 1,
                pluginId: 'cellplugin'
            },
            {
                ptype: 'gridfilters',
                menuFilterText: 'Filtros'
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
                        text: 'Adicionar',
                        glyph: ArqAdmin.util.Glyphs.getGlyph('add')
                    },
                    {
                        xtype: 'button',
                        itemId: 'save',
                        text: 'Salvar alterações',
                        glyph: ArqAdmin.util.Glyphs.getGlyph('save')
                    },
                    {
                        xtype: 'button',
                        itemId: 'cancel',
                        text: 'Cancelar alterações',
                        glyph: ArqAdmin.util.Glyphs.getGlyph('cancel')
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

        me.getColumnIndexes = function () {
            var me = this,
                columnIndexes = [];

            Ext.Array.each(me.columns, function (column) {
                // only validate column with editor
                if (Ext.isDefined(column.getEditor())) {
                    columnIndexes.push(column.dataIndex);
                } else {
                    columnIndexes.push(undefined);
                }
            });

            return columnIndexes;
        };

        me.validateRow = function (record, rowIndex) {

            var me = this,
                view = me.getView(),
                errors = record.validate();

            if (errors.isValid()) {
                return true;
            }

            var columnIndexes = me.getColumnIndexes();

            Ext.each(columnIndexes, function (columnIndex, col) {
                var cellErrors, cell, messages;

                cellErrors = errors.getByField(columnIndex);
                if (!Ext.isEmpty(cellErrors)) {
                    cell = view.getCellByPosition({row: rowIndex, column: col});
                    messages = [];
                    Ext.each(cellErrors, function (cellError) {
                        messages.push(cellError.message);
                    });

                    cell.addCls('x-form-error-msg x-form-invalid-icon x-form-invalid-icon-default');
                    // set error tooltip attribute
                    cell.set({
                        'data-errorqtip': Ext.String.format('<ul><li class="last">{0}</li></ul>',
                            messages.join('<br/>'))
                    });
                }
            });

            return false;
        };

        me.validate = function () {

            var me = this,
                isValid = true,
                view = me.getView(),
                error,
                record;

            Ext.each(view.getNodes(), function (row, col) {
                record = view.getRecord(row);

                isValid = (me.validateRow(record, col) && isValid);
            });

            error = isValid ? undefined : {
                title: "Dados inválidos",
                message: "Você deve corrigir os erros antes de salvar."
            };

            return error;
        };

        me.callParent(arguments);
    }
});