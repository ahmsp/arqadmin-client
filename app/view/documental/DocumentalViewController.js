Ext.define('ArqAdmin.view.documental.DocumentalViewController', {
    extend: 'ArqAdmin.view.base.ViewController',
    alias: 'controller.documental',

    control: {
        "#classificFieldset combobox": {
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
            grid = me.lookupReference('documentalTable'),
            store = grid.getStore(),
            filters = [];

        Ext.Object.each(params, function (key, value) {
            filters.push({
                'property': key,
                'value': value,
                'operator': form.getForm().findField(key).operator
            });
        });

        store.clearFilter(false);
        grid.filters.clearFilters(true);
        store.filter(filters);
    },

    onFilterFormButtonClearClick: function (button) {
        button.up('form').reset();
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
                        me.forceResetForm(me.lookupReference('editForm'));
                        rowmodel.select(index)
                    }
                }
            });
            return false;
        }
    },

    onGridSelect: function (rowmodel, record, index, eOpts) {
        var me = this;

        // selects record in both grids
        var layoutItems = me.lookupReference('resultsPanel').getLayout().getLayoutItems();
        Ext.Object.each(layoutItems, function (key, componentGrid) {
            if (record !== componentGrid.getSelection()[0]) {
                me.selectRecord(componentGrid, index);
            }
        });

        me.getViewModel().set('record', record);
        me.detailsPanelLoadRecord(record, true);
    },

    onGridCelldblclick: function () {
        this.onEdit();
    },

    onGridClearFilters: function () {
        this.lookupReference('documentalTable').filters.clearFilters(true);
    },

    setResultsPanelActiveItem: function (button) {
        var me = this;

        switch (button.itemId) {
            case 'btnShowTable':
                me.showViewResultsPanel('documentalTable');
                break;
            case 'btnShowList':
                me.showViewResultsPanel('documentalList');
                break;
            case 'btnShowGallery':
                me.showViewResultsPanel('documentalGallery');
                break;
        }
    },

    showViewResultsPanel: function (itemReference) {
        var me = this,
            layout = me.getReferences().resultsPanel.getLayout(),
            item = me.lookupReference(itemReference);

        layout.setActiveItem(item);
    },

    showViewDisplayPanel: function (view) {
        var layout = this.getReferences().displayPanel.getLayout();
        layout.setActiveItem(this.lookupReference(view));
    },

    onDisplayPanelChildActivate: function (page, eOpts) {
        this.getViewModel().set('displayPanelActiveItem', page.reference);
    },

    /**
     * Loads an {@link Ext.data.Model} into this form
     *
     * @param {Ext.data.Model} record The record to load
     * @param {boolean} showForm
     */
    editFormLoadRecord: function (record, showForm) {
        var me = this,
            combosRefs = me.lookupReference('classificFieldset').getReferences(),
            form = me.lookupReference('editForm');

        //record.get('id');
        var $title = (Ext.Object.isEmpty(record)) ? 'Novo registro' : 'Editar registro';

        me.forceResetForm(form);
        //me.clearFilterCascadingCombos(combosRefs); //todo: remove
        form.loadRecord(record);
        me.changeDisableCascadingCombos(combosRefs);

        if (showForm) {
            me.showViewDisplayPanel('editForm');
            me.getViewModel().set('displayPanelTitle', $title);
        }
    },

    /**
     *
     * @param {Ext.data.Record} record
     * @param {boolean} showForm
     */
    detailsPanelLoadRecord: function (record, showForm) {
        var me = this;

        me.lookupReference('detailsPanel').loadRecord(record);
        if (showForm) {
            me.getViewModel().set('displayPanelTitle', 'Detalhes do registro');
            me.showViewDisplayPanel('detailsPanel');
        }
    },

    onAcervoComboSelect: function (combo, records, eOpts) {
        var me = this,
            formPanel = combo.up('panel'),
            form = formPanel.getForm(),
            values = records.getData();

        var classificFieldset = (formPanel.xtype === 'documental-editform') ? 'classificFieldset' : 'filterClassificFieldset';
        var combosRefs = me.lookupReference(classificFieldset).getReferences();

        delete values.id;
        me.clearFilterCascadingCombos(combosRefs);

        form.setValues(values);
        //me.changeDisableCascadingCombos(combosRefs);

        if (formPanel.xtype === 'documental-editform') {
            me.lookupReference('especiedocumentalCombo').focus(true, 180);
        }
    },

    onCascadingComboChange: function (combo, records, eOpts, conn) {
        var me = this,
            formPanel = combo.up('panel');

        if (formPanel.xtype === 'documental-editform') {
            var classificFieldset = 'classificFieldset';
            var acervoCombo = 'acervoCombo';
        } else {
            var classificFieldset = 'filterClassificFieldset';
            var acervoCombo = 'filterAcervoCombo';
        }

        var combosRefs = me.lookupReference(classificFieldset).getReferences();

        // clear all next combos
        var start = false;
        Ext.Object.each(combosRefs, function (key, cb, obj) {
            // check if this is next combo
            if (cb === combo.next()) {
                start = true;
            }

            if (start === true) {
                cb.clearValue();
            }
        });

        me.changeDisableCascadingCombos(combosRefs);
        me.lookupReference(acervoCombo).setValue(me.findAcervoId(formPanel.getValues()));
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

        // filter the combo based in parent cobo value (id)
        comboStore.filterBy(function (record) {
            return record.get(filterProperty) === prevCombo.value;
        });
    },

    /* Clear the filters of cascading combos */
    clearFilterCascadingCombos: function (combosReferences) {
        var combos = combosReferences;

        Ext.Object.each(combos, function (key, combo, obj) {
            combo.getStore().clearFilter();
        });
    },

    /*
     * Change the disabled state of cascading combos,
     * based on defined values
     */
    changeDisableCascadingCombos: function (combosReferences) {
        var combos = combosReferences;

        var lastSelectedCombo = null;
        Ext.Object.each(combos, function (key, combo, obj) {

            if (!Ext.isEmpty(combo.value)) {
                combo.enable();
                lastSelectedCombo = combo;
            } else if (combo !== combos.fundoCombo) {
                combo.disable();
            }
        });
        if (lastSelectedCombo) {
            lastSelectedCombo.next().enable();
        }
    },

    findAcervoId: function (classificacaoData) {
        var store = Ext.getStore('classificacao.Acervos');

        var recordIndex = store.findBy(
            function (rec, id) {
                if ((classificacaoData.fundo_id || null) === rec.get('fundo_id') &&
                    (classificacaoData.subfundo_id || null) === rec.get('subfundo_id') &&
                    (classificacaoData.grupo_id || null) === rec.get('grupo_id') &&
                    (classificacaoData.subgrupo_id || null) === rec.get('subgrupo_id') &&
                    (classificacaoData.serie_id || null) === rec.get('serie_id') &&
                    (classificacaoData.subserie_id || null) === rec.get('subserie_id') &&
                    (classificacaoData.dossie_id || null) === rec.get('dossie_id')) {
                    return true;
                }
                return false;
            }
        );

        return (recordIndex == -1) ? null : store.getAt(recordIndex).getId();
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
                    }
                }
            });
        } else {
            me.editFormLoadRecord(newRecord, true);
        }
    },

    onEdit: function () {
        var me = this,
            record = me.getViewModel().get('record'),
            acervoId = me.findAcervoId(record.getData());

        record.set('acervo_id', acervoId);

        me.editFormLoadRecord(record, true);
        me.getViewModel().set('displayPanelTitle', 'Editar registro');
        me.showViewDisplayPanel('editForm');
    },

    onSave: function () {
        var me = this,
            form = me.lookupReference('editForm'),
            formBasic = form.getForm(),
            record = form.getRecord(),
            values = form.getValues(),
            store = Ext.getStore('documental.Documentos');

        if (formBasic.isValid()) {

            record.set(values);

            if (record.phantom) {
                record.setId(null);
                store.add(record);
            }

            store.sync({
                scope: me,
                success: function (batch, options) {
                    //var result = Ext.decode(batch.operations[0].getResponse().responseText);

                    store.load({
                        scope: me,
                        callback: function (records, operation, success) {
                            //me.forceResetForm(form);
                            form.reset();
                            me.selectRecord(me.lookupReference('documentalTable'), 0)
                        }
                    });
                    ArqAdmin.util.Util.showToast('Sucesso!', 'Registro salvo com sucesso!');
                },
                failure: function (batch, options) {
                    //ArqAdmin.util.Util.handleFormFailure(action);

                    // console.log(batch);
                    //var exceptionList = batch.getExceptions(), // getOperations()
                    //    msg = Ext.decode(exceptionList[0]._response.responseText).message;
                    //
                    //console.log(msg);

                    // failure in store event
                    //listeners: {
                    //    exception: function(proxy, response, operation, eOpts) {
                    //        alert('exception');
                    //    }
                    //}

                }
            });
        } else {
            ArqAdmin.util.Util.showToast('Atenção!', 'O formulário contém erros!');
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
                        store = Ext.StoreManager.lookup('documental.Documentos');

                    store.remove(record);
                    store.sync({
                        success: function () {
                            store.load({
                                scope: me,
                                callback: function (records, operation, success) {
                                    me.selectRecord(me.lookupReference('documentalTable'), 0)
                                }
                            });
                            ArqAdmin.util.Util.showToast('Sucesso!', 'Registro removido com sucesso!');
                        },
                        failure: function (form, action) {
                            ArqAdmin.util.Util.handleFormFailure(action);
                        },
                        scope: me
                    });
                }
            }
        });
    },

    onCancelEdit: function (button, e, eOpts) {
        this.showViewDisplayPanel('detailsPanel');
    },

    onTextfieldSpecialkey: function (field, e, eOpts) {

        if (e.getKey() == e.ENTER) {
            var form = field.up('form');
            if (form.xtype === 'documental-filterform') {
                this.lookupReference('btnPesquisar').fireHandler();
            } else if (form.xtype === 'documental-editform') {
                this.lookupReference('btnSave').fireHandler();
            }
        }
    }

});
