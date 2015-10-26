Ext.define('ArqAdmin.view.base.ViewController', {
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
            componentGrid.getSelectionModel().deselectAll();
        });
    }
});
