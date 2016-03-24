Ext.define('ArqAdmin.view.base.AcervosViewController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'ArqAdmin.util.Util',
        'ArqAdmin.util.Glyphs'
    ],

    forceResetForm: function (form) {
        form.getForm().getFields().each(function (field) {
            field.originalValue = field.getInitialConfig('value');
        });
        form.reset(true);
    },

    onDataviewViewready: function (view) {
        var selected = view.getStore().getAt(0);

        if (selected) {
            view.getSelectionModel().select(selected);
        }
    },

    onDisplayPanelChildActivate: function (page, eOpts) {
        this.getViewModel().set('displayPanelActiveItem', page.reference);
    },

    /**
     *
     * @param {Ext.data.Record} record
     * @param {boolean} showForm
     */
    detailsPanelLoadRecord: function (record, showForm) {
        var me = this,
            detailPanel = me.lookupReference(me.getViewModel().get('detailPanelReference'));

        detailPanel.loadRecord(record);

        if (showForm) {
            me.showViewDisplayPanel(detailPanel);
        }
    },

    /**
     * Loads an {@link Ext.data.Model} into this form
     *
     * @param {Ext.data.Model} record The record to load
     * @param {boolean} showForm
     */
    editFormLoadRecord: function (record, showForm) {
        var me = this,
            form = me.lookupReference(me.getViewModel().get('editFormReference'));

        me.getViewModel().set('record', record);
        me.forceResetForm(form);
        form.loadRecord(record);

        if (showForm) {
            me.showViewDisplayPanel(form);
        }
    },

    showViewDisplayPanel: function (view) {
        var me = this,
            layout = me.lookupReference(me.getViewModel().get('displayPanelReference')).getLayout();

        layout.setActiveItem(view);
    },

    onCancelEdit: function (button, e, eOpts) {
        var me = this,
            form = me.lookupReference(me.getViewModel().get('editFormReference')),
            record = form.getRecord();

        form.reset(true);

        if (record.phantom) {
            form.loadRecord(record);
            me.showViewDisplayPanel(0);
        } else {
            me.showViewDisplayPanel(me.lookupReference(me.getViewModel().get('detailPanelReference')));
        }
    },

    onButtonStaticDataClick: function (button) {

        var win = Ext.widget('staticdata-window', {
            title: button.tooltip.toUpperCase(),
            //animateTarget: button
            listeners: {
                close: function () {
                    var grid = this.down('gridpanel');
                    grid.filters.clearFilters();
                    grid.getStore().reload();
                }
            }
        });

        win.add({
            xtype: button.action,
            region: 'center'
        });

        if (button.action === 'acervos-grid') {
            win.add({
                xtype: 'acervos-form',
                region: 'south'
            });
        }

        win.show();
    },

    //onGridRender: function (grid) {
    //    var me = this;
    //
    //    if (grid.store.isLoading() || grid.store.getCount() == 0) {
    //        grid.store.on('load', function () {
    //            me.selectRecord(grid, 0);
    //        });
    //    } else {
    //        me.selectRecord(grid, 0);
    //    }
    //},

    onGridActivate: function (grid) {
        var selection = grid.getSelectionModel().getSelection()[0];
        if (selection) {
            if (grid.isXType('dataview')) {
                grid.focusNode(selection);
            } else {
                grid.getView().focusRow(selection);
            }
        }
    },

    selectRecord: function (grid, record) {
        var grid = grid || this.lookupReference('resultTable');

        grid.getSelectionModel().select(record);

        //if (grid.isXType('dataview')) {
        //    grid.focusNode(record);
        //} else {
        //    grid.getView().focusRow(record);
        //}
    },

    /**
     * deselect all in both grids
     */
    deselectAllGrids: function () {
        var layoutItems = this.lookupReference('resultsPanel').getLayout().getLayoutItems();
        Ext.Object.each(layoutItems, function (key, componentGrid) {
            if (componentGrid.reference == 'resultGallery') {
                componentGrid = componentGrid.down('dataview');
            }
            componentGrid.getSelectionModel().deselectAll();
        });
    }
});
