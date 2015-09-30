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
        var selection = grid.getSelection()[0];
        if (selection) {
            grid.getView().focusRow(selection);
        }
    },

    selectRecord: function (grid, recordIndex) {
        //grid.setSelection(recordIndex);
        grid.getView().getSelectionModel().select(recordIndex);
        grid.getView().focusRow(recordIndex);
    }
});
