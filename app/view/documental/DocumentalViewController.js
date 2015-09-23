Ext.define('ArqAdmin.view.documental.DocumentalViewController', {
    extend: 'ArqAdmin.view.base.ViewController',
    alias: 'controller.documental',

    control: {
        "gridpanel": {
            select: 'onGridpanelSelect',
            celldblclick: 'onEdit'
        },
        "#classificFieldset combobox": {
            //select: 'onCascadingComboChange',
            change: 'onCascadingComboChange',
            focus: 'onCascadingComboFocus'
        },
        "#filterClassificFieldset combobox": {
            //select: 'onCascadingComboChange',
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


    /*
     * Result Grid
     */
    onGridpanelSelect: function (rowmodel, record, index, eOpts) {
        var me = this,
            viewModel = me.getViewModel(),
            detailForm = me.lookupReference('documentalDetails');

        // selects record in both grids
        var layoutItems = me.lookupReference('cardLists').getLayout().getLayoutItems();
        Ext.Object.each(layoutItems, function (key, componentGrid) {
            if (record !== componentGrid.getSelection()[0]) {
                me.selectRecord(componentGrid, index);
            }
        });

        viewModel.set('record', record);
        detailForm.loadRecord(record);
        viewModel.set('displayPanelTitle', 'Detalhes do registro');
        me.showView('documentalDetails');
    },

    showView: function (view) {
        var layout = this.getReferences().displayPanel.getLayout();
        layout.setActiveItem(this.lookupReference(view));
    },

    onDisplayPanelChildActivate: function (page, eOpts) {
        this.getViewModel().set('displayPanelActiveItem', page.reference);
    },

    formLoadRecord: function (record) {
        var me = this,
            combosRefs = me.lookupReference('classificFieldset').getReferences(),
            form = me.lookupReference('documentalForm');

        //me.forceResetForm(form);
        me.clearFilterCascadingCombos(combosRefs);
console.log(form.getValues(false, true));
        form.loadRecord(record);
console.log(form.getValues(false, true));
        me.changeDisableCascadingCombos(combosRefs);
    },

    onAcervoComboSelect: function (combo, records, eOpts) {
        var me = this,
            formPanel = combo.up('panel'),
            form = formPanel.getForm(),
            values = records.getData();

        var classificFieldset = (formPanel.xtype === 'documental-form') ? 'classificFieldset' : 'filterClassificFieldset';
        var combosRefs = me.lookupReference(classificFieldset).getReferences();

        delete values.id;
        me.clearFilterCascadingCombos(combosRefs);

        form.setValues(values);
        me.changeDisableCascadingCombos(combosRefs);

        if (formPanel.xtype === 'documental-form') {
            me.lookupReference('especiedocumentalCombo').focus(true, 180);
        }
    },

    onCascadingComboChange: function (combo, records, eOpts, conn) {
        var me = this,
            formPanel = combo.up('panel');

        if (formPanel.xtype === 'documental-form') {
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
        me.setAcervoComboValue(acervoCombo);
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

    /*
     * Checks if the combination of "classificação" corresponds to an existing "acervo"
     * and sets the corresponding value for the combo
     */
    setAcervoComboValue: function (acervoCombo) {
        var me = this,
            acervoCombo = me.lookupReference(acervoCombo),
            formPanel = acervoCombo.up('panel');

        var classificFieldset = (formPanel.xtype === 'documental-form') ? 'classificFieldset' : 'filterClassificFieldset';
        var refs = me.lookupReference(classificFieldset).getReferences();

        acervoCombo.clearValue();

        // check if the combination exists in acervoCombo
        var recordIndex = acervoCombo.getStore().findBy(
            function (record, id) {

                if (refs.fundoCombo.value === record.get('fundo_id') &&
                    refs.subfundoCombo.value === record.get('subfundo_id') &&
                    refs.grupoCombo.value === record.get('grupo_id') &&
                    refs.subgrupoCombo.value === record.get('subgrupo_id') &&
                    refs.serieCombo.value === record.get('serie_id') &&
                    refs.subserieCombo.value === record.get('subserie_id') &&
                    refs.dossieCombo.value === record.get('dossie_id')) {
                    return true;
                }
                return false;
            }
        );

        if (recordIndex != -1) {
            // set combo value by index
            acervoCombo.setValue(acervoCombo.getStore().getAt(recordIndex).get(acervoCombo.valueField));
        }
    },

    onAdd: function (button, e, eOpts) {
        var me = this,
            formPanel = me.lookupReference('documentalForm'),
            //form = formPanel.getForm(),
            newRecord = Ext.create('ArqAdmin.model.documental.Documento');

        if (formPanel.isDirty()) {

console.log(formPanel.getValues(false, true));

            Ext.Msg.show({
                title: 'Formulário editado!',
                msg: 'Os dados do formulário foram alterados. <br />Você descartar as alterações?',
                buttons: Ext.Msg.YESNO,
                animateTarget: 'button',
                icon: Ext.Msg.QUESTION,
                fn: function (btn, ev) {
                    if (btn == 'yes') {
                        me.getViewModel().set('displayPanelTitle', 'Novo registro');
                        newRecord.set('id', null);
                        me.formLoadRecord(newRecord);
                        me.showView('documentalForm');
                    }
                }
            });
        } else {
            me.getViewModel().set('displayPanelTitle', 'Novo registro');
            newRecord.set('id', null);
            me.formLoadRecord(newRecord);
            me.showView('documentalForm');
        }
    },

    onEdit: function () {
        var me = this,
            record = me.getViewModel().get('record');

        me.formLoadRecord(record);
        me.getViewModel().set('displayPanelTitle', 'Editar registro');
        me.showView('documentalForm');
    },

    onRemove: function (button, e, eOpts) {
        var me = this;

        // Ask user to confirm this action
        Ext.Msg.confirm('Confirm Delete', 'Você tem certeza que deseja excluir este registro?', function (result) {

            // User confirmed yes
            if (result == 'yes') {

                var record = me.getViewModel().get('record'),
                    store = Ext.StoreManager.lookup('documental.Documentos');

                // Delete record from store
                store.remove(record);
                store.sync();

                console.log('result');
                // Hide display
                //me.showView('documentalMessageContainer');

            }

        });
    },

    onSave: function () {
        var form = this.getReferences().documentalForm.getForm(),
            record = form.getRecord(),
            values = form.getValues(false, true),
            store = Ext.StoreManager.lookup('documental.Documentos');

        if (form.isValid()) {

            record.set(values);

            if (record.phantom) {
                store.add(record);
            }

            store.sync({
                success: function () {
                    //             message = 'Registro adicionado com sucesso!';
                    //             form.down('textfield#fieldNome').focus(true, 180);
                    store.load();
                    //             RegSepult.util.Alert.msg(message, '');

                    // Display record
                    //this.onGridpanelSelect(this, record);

                    console.log("success!!");
                },
                failure: function () {
                    console.log("failed...");
                },
                callback: function () {
                    console.log("calling callback");
                },
                scope: this
            });

            // Commit changes
            //     store.commitChanges();

            //     console.log(me);

        }
    },

    onCancelEdit: function (button, e, eOpts) {
        this.showView('documentalDetails');
    },

    onTextfieldSpecialkey: function (field, e, eOpts) {

        if (e.getKey() == e.ENTER) {
            var form = field.up('form');
            if (form.xtype === 'documental-filterform') {
                this.lookupReference('btnPesquisar').fireHandler();
            } else if (form.xtype === 'documental-form') {
                this.lookupReference('btnSave').fireHandler();
            }
        }
    }

});
