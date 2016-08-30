Ext.define('ArqAdmin.view.documental.DocumentalController', {
    extend: 'ArqAdmin.view.base.AcervosViewController',
    alias: 'controller.documental',

    control: {
        "#editClassificFieldset combobox": {
            change: 'onCascadingComboChange',
            focus: 'onCascadingComboFocus'
        },
        "#filterClassificFieldset combobox": {
            change: 'onCascadingComboChange',
            focus: 'onCascadingComboFocus'
        },
        "textfield": {
            specialkey: 'onTextfieldSpecialkey'
        }
    },

    /*
     * Filter Form
     */
    onFilterFormButtonFilterClick: function (button) {
        var me = this,
            form = button.up('form'),
            params = form.getValues(false, true),
            grid = me.lookupReference('resultTable'),
            store = grid.getStore(),
            filters = [];

        Ext.Object.each(params, function (key, value) {
            var loProperty = 'lo_' + key;

            if (key.substring(0, 3) !== 'lo_') {
                filters.push({
                    'property': key,
                    'value': value,
                    'operator': form.getForm().findField(key).operator,
                    'logical_operator': (params.hasOwnProperty(loProperty)) ? params[loProperty] : 'and'
                });
            }
        });

        // grid.filters.clearFilters(true);
        delete store.getProxy().extraParams.search_all;
        delete store.getProxy().extraParams.likes;
        // delete store.getProxy().extraParams['search_all'];
        store.clearFilter(true);
        store.setFilters(filters);
        store.load();
    },

    onFilterFormButtonClearClick: function (button) {
        button.up('form').reset();
    },

    onSearchfieldTriggerClick: function () {
        var me = this,
            field = me.lookupReference('searchAllField'),
            value = field.getValue();

        if (!Ext.isEmpty(value)) {
            me.searchAll(value);
        }
    },

    onSearchfieldSpecialkey: function (field, e, eOpts) {
        var value = field.getValue();

        if (e.getKey() == e.ENTER && !Ext.isEmpty(value)) {
            this.searchAll(value);
        }
    },

    onClearAllFilters: function () {
        var me = this,
            grid = me.lookupReference('resultTable'),
            searchField = me.lookupReference('searchAllField'),
            filterForm = me.lookupReference('filterForm'),
            store = grid.getStore();

        searchField.setValue('');
        filterForm.reset();
        delete store.getProxy().extraParams.search_all;
        delete store.getProxy().extraParams.likes;
        grid.filters.clearFilters();
        store.clearFilter(true);
        store.load();
    },

    searchAll: function (term) {
        var me = this,
            grid = me.lookupReference('resultTable'),
            store = me.getStore('documentos');

        if (Ext.isEmpty(term)) {
            return;
        }

        grid.filters.clearFilters();
        store.clearFilter(true);
        store.getProxy().extraParams['search_all'] = term;
        delete store.getProxy().extraParams.likes;
        store.load();
    },

    onGridRender: function (grid) {
        if (grid.referece = 'resultList') {
            grid.tip = Ext.create('Ext.tip.ToolTip', {
                target: grid.el,
                delegate: grid.view.cellSelector,
                trackMouse: true,
                anchor: 'top',
                dismissDelay: 0,
                bodyStyle: 'background-color:#eee;padding:0;',
                renderTo: Ext.getBody(),
                listeners: {
                    beforeshow: function updateTipBody(tip) {
                        var gridColumns = grid.view.getGridColumns(),
                            column = gridColumns[tip.triggerElement.cellIndex];

                        if (column.dataIndex === 'id') {
                            var record = grid.view.getRecord(tip.triggerElement.parentNode),
                                dt = record.get('desenhos_tecnicos');

                            if (!Ext.isEmpty(dt)) {
                                var imgPath = ArqAdmin.config.Runtime.getImagesDocumental() + dt[0].id + '/320';
                                var ttip = [
                                    '<div class="tipcls">' +
                                    '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image-75.png\';">' +
                                    '</div>'
                                ];
                                tip.update(ttip);
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    },
                    click: {
                        fn: function (tip) {
                            tip.hide();
                        }
                    }
                }
            });
        }
    },

    onGridBeforeselect: function (rowmodel, record, index, eOpts) {
        var me = this,
            editForm = me.lookupReference('editForm');

        if (editForm.isDirty()) {
            Ext.Msg.show({
                title: 'Formulário editado!',
                msg: 'Os dados do formulário foram alterados. <br />Você deseja descartar as alterações?',
                buttons: Ext.Msg.YESNO,
                animateTarget: 'button',
                icon: Ext.Msg.QUESTION,
                fn: function (btn, ev) {
                    if (btn === 'yes') {
                        me.forceResetForm(editForm);
                        rowmodel.select(index)
                    }
                }
            });
            return false;
        }
    },

    onGridSelect: function (rowmodel, record, index, eOpts) {
        var me = this,
            layoutItems = me.lookupReference('resultsPanel').getLayout().getLayoutItems();

        // selects record in both grids
        Ext.Object.each(layoutItems, function (key, componentGrid) {

            if (componentGrid.reference == 'resultGallery') {
                componentGrid = componentGrid.down('dataview');
            }

            var selection = componentGrid.getSelectionModel().getSelection()[0];
            if (record !== selection) {
                // componentGrid.getSelectionModel().select(record);
                me.selectRecord(componentGrid, record);
            }
        });
    },

    onGridResultTableSelect: function (rowmodel, record, index, eOpts) {
        var me = this,
            imagesList = record.getData().desenhos_tecnicos;

        me.getStore('desenhosTecnicos').loadRawData(imagesList);
        // me.getStore('desenhosTecnicos').filter('documento_id', record.getId());
        me.getViewModel().set('record', record);
        // me.editFormLoadRecord(record, false);
        me.detailsPanelLoadRecord(record, true);
    },

    onButtonShowImageClick: function (event, target) {
        //var imgId = target.id.split('-').pop();
        this.showImageViewerWindow();
    },

    onGridCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var me = this;

        if (cellIndex === 0 && !Ext.isEmpty(record.data.desenhos_tecnicos)) {
            me.showImageViewerWindow();
        }
    },

    onGridClearFilters: function () {
        this.lookupReference('resultTable').filters.clearFilters(true);
    },

    setResultsPanelActiveItem: function (button) {
        var me = this;

        switch (button.itemId) {
            case 'btnShowTable':
                me.showViewResultsPanel('resultTable');
                break;
            case 'btnShowList':
                me.showViewResultsPanel('resultList');
                break;
            case 'btnShowGallery':
                me.showViewResultsPanel('resultGallery');
                break;
        }
    },

    showViewResultsPanel: function (itemReference) {
        var me = this,
            layout = me.getReferences().resultsPanel.getLayout(),
            item = me.lookupReference(itemReference);

        layout.setActiveItem(item);
    },

    //showViewDisplayPanel: function (view) {
    //    var layout = this.lookupReference('displayPanel').getLayout();
    //    layout.setActiveItem(view);
    //},

    showImageViewerWindow: function () {
        var me = this,
            win = Ext.widget('imageviewer-window');

        if (me.hasRole()) {
            win.down('imageviewer-img').down('toolbar').add(
                {xtype: 'tbseparator'},
                {
                    text: 'Nova imagem',
                    // itemId: 'btnAdd',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('add'),
                    tooltip: 'Adicionar nova imagem',
                    handler: 'onAdd'
                },
                {
                    text: 'Editar imagem',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('edit'),
                    tooltip: 'Editar a imagem selecionada',
                    bind: {
                        disabled: '{!resultTable.selection}'
                    },
                    handler: 'onEdit'
                }
            );
        }

        win.getViewModel().set('documentoId', me.getViewModel().get('record').getId());
        win.on('close', function () {
            me.getStore('documentos').reload();
        });
        win.show();
    },

    onAdd: function () {
        var me = this,
            editForm = me.lookupReference('editForm'),
            newRecord = Ext.create('ArqAdmin.model.documental.Documento');

        newRecord.setId(null);

        if (editForm.isDirty()) {
            Ext.Msg.show({
                title: 'Formulário editado!',
                msg: 'Os dados do formulário foram alterados. <br />Você deseja descartar as alterações?',
                buttons: Ext.Msg.YESNO,
                animateTarget: 'button',
                icon: Ext.Msg.QUESTION,
                fn: function (btn, ev) {
                    if (btn == 'yes') {
                        me.editFormLoadRecord(newRecord, true);
                        me.changeDisableCascadingCombos('editForm');
                    }
                }
            });
        } else {
            me.editFormLoadRecord(newRecord, true);
            me.changeDisableCascadingCombos('editForm');
            me.deselectAllGrids();
        }
    },

    onEdit: function () {
        var me = this,
            record = me.getViewModel().get('record'),
            acervoId = me.findAcervoId(record.getData());

        record.set('acervo_id', acervoId);

        me.editFormLoadRecord(record, true);
        me.changeDisableCascadingCombos('editForm');
    },

    onSave: function () {
        var me = this,
            form = me.lookupReference('editForm'),
            formBasic = form.getForm(),
            record = form.getRecord(),
            values = form.getValues(),
            store = me.getStore('documentos');

        if (!form.isDirty()) {
            return;
        }

        if (formBasic.isValid()) {

            record.set(values);

            if (record.phantom) {
                record.setId(null);
                store.add(record);
            }

            store.sync({
                scope: me,
                success: function (batch, options) {
                    var operations = batch.getOperations(),
                        result = Ext.decode(operations[0].getResponse().responseText);

                    me.checkboxWithImageSetValue(false);
                    store.load({
                        scope: me,
                        callback: function (records, operation, success) {
                            var record = store.findRecord('id', result.id) || 0,
                                grid = me.lookupReference('resultTable');

                            form.reset();
                            me.selectRecord(grid, record);
                        }
                    });
                    ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com êxito!');
                }
            });
        } else {
            Ext.Msg.alert('Erro!', 'O formulário contém dados inválidos!');
        }
    },

    onRemove: function (button, e, eOpts) {
        var me = this;

        Ext.Msg.show({
            title: 'Confirmação de exclusão!',
            msg: 'Você tem certeza que deseja excluir este registro?',
            buttons: Ext.Msg.YESNO,
            animateTarget: 'button',
            icon: Ext.Msg.QUESTION,
            fn: function (btn, ev) {
                if (btn === 'yes') {
                    var record = me.getViewModel().get('record'),
                        store = me.getStore('documentos');

                    store.remove(record);
                    store.sync({
                        success: function () {
                            store.load({
                                scope: me,
                                callback: function (records, operation, success) {
                                    var grid = me.lookupReference('resultTable');
                                    me.selectRecord(grid, 0)
                                }
                            });
                            ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'Registro removido com sucesso!');
                        },
                        failure: function () {
                            Ext.Msg.alert('Erro!', 'Não foi possivel remover o registro!');
                        },
                        scope: me
                    });
                }
            }
        });
    },

    onTextfieldSpecialkey: function (field, e, eOpts) {

        if (e.getKey() == e.ENTER) {
            var form = field.up('form');
            if (form) {
                if (form.xtype === 'documental-filterform') {
                    this.lookupReference('btnPesquisar').fireHandler();
                } else if (form.xtype === 'documental-editform') {
                    this.lookupReference('btnSave').fireHandler();
                }
            }
        }
    },

    onAcervoComboSelect: function (combo, records, eOpts) {
        var me = this,
            formPanel = combo.up('panel'),
            formPanelRef = formPanel.reference,
            form = formPanel.getForm(),
            values = records.getData(),
            fieldset = (formPanelRef === 'editForm') ? 'editClassificFieldset' : 'filterClassificFieldset',
            combos = me.lookupReference(fieldset).getReferences();

        delete values.id;
        me.clearFilterCascadingCombos(combos);

        form.setValues(values);

        if (formPanelRef === 'editForm') {
            me.lookupReference('especiedocumentalCombo').focus(true, 180);
        }
    },

    onCascadingComboChange: function (combo, records, eOpts, conn) {
        var me = this,
            formPanel = combo.up('panel'),
            formRef = formPanel.reference,
            acervoComboRef = (formRef === 'editForm') ? 'editAcervoCombo' : 'filterAcervoCombo',
            fieldset = (formRef === 'editForm') ? 'editClassificFieldset' : 'filterClassificFieldset',
            combos = me.lookupReference(fieldset).getReferences();

        // clear all next combos
        var start = false;
        Ext.Object.each(combos, function (key, cb, obj) {
            // check if this is next combo
            if (cb === combo.next()) {
                start = true;
            }

            if (start === true) {
                cb.clearValue();
            }
        });

        me.changeDisableCascadingCombos(formRef);
        me.lookupReference(acervoComboRef).setValue(me.findAcervoId(formPanel.getValues()));
    },

    onCascadingComboFocus: function (component, event, eOpts) {
        var combo = component;

        if (combo.reference == 'fundoCombo') {
            return;
        }

        var prevCombo = combo.prev();
        var filterProperty = prevCombo.name;
        var comboStore = combo.getStore();

        comboStore.clearFilter();

        // filter the combo based in parent combo value (id)
        comboStore.filterBy(function (record) {
            return record.get(filterProperty) === prevCombo.value;
        });
    },

    /* Clear the filters of cascading combos */
    clearFilterCascadingCombos: function (combos) {
        Ext.Object.each(combos, function (key, combo, obj) {
            combo.getStore().clearFilter();
        });
    },

    /*
     * Change the disabled state of cascading combos,
     * based on defined values
     *
     * @param {string} form reference ('filterForm'|'editForm')
     */
    changeDisableCascadingCombos: function (formRef) {
        var me = this,
            fieldset = (formRef === 'filterForm') ? 'filterClassificFieldset' : 'editClassificFieldset',
            combos = me.lookupReference(fieldset).getReferences();

        var lastSelectedCombo = null;
        Ext.Object.each(combos, function (key, combo, obj) {
            if (!Ext.isEmpty(combo.value)) {
                combo.enable();
                lastSelectedCombo = combo;
            } else if (combo.reference !== 'fundoCombo') {
                combo.disable();
            }
        });
        if (lastSelectedCombo) {
            lastSelectedCombo.next().enable();
        }
    },

    findAcervoId: function (classificacaoData) {
        var store = Ext.getStore('staticData.classificacao.Acervos');

        var recordIndex = store.findBy(
            function (rec, id) {
                if ((classificacaoData.fundo_id || 0) === rec.get('fundo_id') &&
                    (classificacaoData.subfundo_id || 0) === rec.get('subfundo_id') &&
                    (classificacaoData.grupo_id || 0) === rec.get('grupo_id') &&
                    (classificacaoData.subgrupo_id || 0) === rec.get('subgrupo_id') &&
                    (classificacaoData.serie_id || 0) === rec.get('serie_id') &&
                    (classificacaoData.subserie_id || 0) === rec.get('subserie_id') &&
                    (classificacaoData.dossie_id || 0) === rec.get('dossie_id')) {
                    return true;
                }
                return false;
            }
        );

        return (recordIndex == -1) ? null : store.getAt(recordIndex).getId();
    }
});
