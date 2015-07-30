Ext.define('ArqAdmin.overrides.grid.filters.filter.List', {
    override: 'Ext.grid.filters.filter.List',

    destroy: function () {
        var me = this,
            //store = me.store,
            store = Ext.getStore(me.store), // override: get store instance
            autoStore = me.autoStore;

        // We may bind listeners to both the options store & grid store, so we
        // need to unbind both sets here
        if (store) {
            if (autoStore || store.autoDestroy) {
                store.destroy();
            } else {
                store.un('load', me.bindMenuStore, me);
            }

            me.store = null;
        }

        if (autoStore) {
            me.getGridStore().un({
                scope: me,
                add: me.onDataChanged,
                refresh: me.onDataChanged,
                remove: me.onDataChanged,
                update: me.onDataChanged
            });
        }

        me.callParent();
    }

});
