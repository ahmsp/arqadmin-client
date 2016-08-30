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
            card = me.lookupReference(me.getViewModel().get('displayPanelReference'));

        card.getLayout().setActiveItem(view);
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

    /**
     * Selects a record instance by record instance or index.
     * @param {Ext.grid.Panel/Ext.view.view} view An gridpanel or an dataview
     * @param {Ext.data.Model/Number} record An record or an index
     */
    selectRecord: function (view, record) {
        var selectionModel = view.getSelectionModel();

        if (selectionModel.isSelected(record)) {
            selectionModel.deselect(record);
        }

        selectionModel.select(record);
    },

    selectRecordDelay: function (grid, record, delay) {
        var rec = record || 0,
            taskDelay = delay || 1000,
            selection,
            task;

        grid.getSelectionModel().select(rec);

        selection = grid.getSelectionModel().getSelection();
        if (Ext.isEmpty(selection)) {
            task = new Ext.util.DelayedTask(function () {
                grid.getSelectionModel().select(rec);
            }).delay(taskDelay);
        }
    },

    onGridCelldblclick: function (grid, td, cellIndex) {
        if (!this.hasRole()) {
            return;
        }

        if (cellIndex !== 0) {
            this.onEdit();
        }
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
    },

    onInfoButtonClick: function () {
        var me = this,
            win = Ext.widget('iframe-window'),
            iFrame = win.down('uxiframe');

        win.width = 800;
        win.title = 'Informações sobre a pesquisa';
        iFrame.src = 'resources/docs/pesquisa.html';
        win.show();
    },

    onCheckboxWithImageChange: function (checkbox, newValue, oldValue, eOpts) {
        var me = this,
            viewModel = me.getViewModel(),
            store = me.getStore(viewModel.get('acervoStore'));

        viewModel.set('withImage', newValue);
        store.load();
    },

    checkboxWithImageSetValue: function (value) {
        var me = this,
            checkboxWithImage = me.lookupReference('checkboxWithImage');

        if (checkboxWithImage.getValue() != value) {
            checkboxWithImage.suspendEvent('change');
            checkboxWithImage.setValue(false);
            checkboxWithImage.resumeEvent('change');
            me.getViewModel().set('withImage', false);
        }
    },

    hasRole: function () {
        return this.getViewModel().get('hasRole');
    },

    onLikeWidgetClick: function (button, e, opts) {
        var me = this,
            record = button.getWidgetRecord(),
            grid = me.lookupReference('resultTable'),
            acervoRoute = me.getViewModel().get('acervoRoute');

        me.selectRecord(grid, record);
        me.like(acervoRoute, record.getId());
    },

    like: function (acervo, acervoId) {
        var me = this;

        Ext.Ajax.request({
            url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/' + acervo + '/' + acervoId + '/like',
            scope: me,
            success: function () {
                if (me.isFilteredByLike()) {
                    me.lookupReference('resultTable').getStore().load();
                }
            }
        });
    },

    onFilterLikes: function (button) {
        var me = this,
            grid = me.lookupReference('resultTable'),
            store = grid.getStore(),
            searchField = me.lookupReference('searchAllField'),
            withImageField = me.lookupReference('checkboxWithImage');

        // var oldParams = {
        //     'withImageField': withImageField.getValue(),
        //     'searchField': searchField.getValue(),
        //     'extraParams': store.getProxy().extraParams,
        //     'gridFilters': grid.filters
        // };

        // searchField.setValue('');
        // withImageField.setValue(false);
        // delete store.getProxy().extraParams.search_all;
        // delete store.getProxy().extraParams.likes;
        // grid.filters.clearFilters();
        // store.clearFilter(true);

        if (button.pressed) {
            store.getProxy().extraParams['likes'] = true;
        } else {
            delete store.getProxy().extraParams.likes;
        }
        store.load();
    },

    onClearFilterLikes: function () {
        var store = this.lookupReference('resultTable').getStore();
        delete store.getProxy().extraParams.likes;
        store.load();
    },

    onRemoveLikes: function () {
        var me = this,
            acervoRoute = me.getViewModel().get('acervoRoute'),
            store = me.lookupReference('resultTable').getStore();

        if (store.getTotalCount() > 0) {
            Ext.Ajax.request({
                url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/' + acervoRoute + '/unlike-all',
                success: function () {
                    store.load();
                }
            });
        }
    },

    isFilteredByLike: function () {
        var store = this.lookupReference('resultTable').getStore();
        return !!store.getProxy().extraParams.likes;
    },

    onAcervoStoreBeforeload: function (store) {
        var me = this,
            filterLikes = !!store.getProxy().extraParams.likes,
            viewModel = me.getViewModel(),
            withImage = viewModel.get('withImage');

        viewModel.set('filterLikes', filterLikes);
        me.lookupReference('btnFavourites').toggle(filterLikes);

        if (withImage === false) {
            delete store.getProxy().extraParams.com_imagem;
        } else {
            store.getProxy().extraParams['com_imagem'] = withImage;
        }
    },

    onAcervoStoreLoad: function (store) {
        var me = this,
            resultGallery = me.lookupReference('resultGallery');

        if (resultGallery) {
            resultGallery.down('dataview').refresh();
        }

        me.getViewModel().set('totalRecords', store.getTotalCount());
    },

    onExportLikesToFile: function (button) {
        var me = this,
            acervoRoute = me.getViewModel().get('acervoRoute'),
            fileType = button.action;

        Ext.Ajax.request({
            url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/' + acervoRoute + '/favorites/download/' + fileType,
            scope: me,
            success: 'onDownloadSuccess',
            failure: 'onDownloadFailure'
        });
    },

    onDownloadSuccess: function (response, opts) {
        var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
        window.open(result.url_download, '_self');
    },

    onDownloadFailure: function (response, opts) {
        var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
        ArqAdmin.util.Util.showErrorMsg(result.error_description);
    },

    showHistoryWindow: function () {
        var me = this,
            view = me.getView(),
            viewModel = me.getViewModel(),
            id = viewModel.get('record').getId(),
            acervoRoute = viewModel.get('acervoRoute'),
            store = me.getStore('revisions');

        store.getProxy().url = ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/' + acervoRoute + '/' + id + '/revision';
        store.load();

        me.dialog = view.add({
            xtype: 'history-window'
        });

        me.dialog.show();
    }
});
