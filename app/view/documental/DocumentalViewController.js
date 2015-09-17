Ext.define('ArqAdmin.view.documental.DocumentalViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.documental',

    control: {
        "gridpanel": {
            select: 'onGridpanelSelect',
            celldblclick: 'edit'
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
        console.log('butao');

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
        // selects record in both grids
        var refs = this.getReferences();
        refs.documentalTable.setSelection(record);
        refs.documentalList.setSelection(record);

        //scroll grid to selected record
        // list.getView().focusRow(index);
        // list.getView().scrollRowIntoView(index);

        this.getViewModel().set('record', record);
        this.showView('documentalDetails');
    },

    showView: function (view) {
        var layout = this.getReferences().displayPanel.getLayout();
        layout.setActiveItem(this.lookupReference(view));
    },

    /*
     * Form Edit
     */
    formLoadRecord: function (record) {
        var me = this,
            combosRefs = me.lookupReference('classificFieldset').getReferences(),
            formPanel = me.getReferences().documentalForm,
            form = formPanel.getForm();

        form.reset();
        me.clearFilterCascadingCombos(combosRefs);
        form.loadRecord(record);
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

    add: function (button, e, eOpts) {
        var formPanel = this.getReferences().documentalForm,
            form = formPanel.getForm(),
            newRecord = Ext.create('ArqAdmin.model.documental.Documento');
        newRecord.set('id', null);

        // Set record
        this.formLoadRecord(newRecord);

        // Set title
        formPanel.setTitle('Adicionar Documento');

        // Show form
        this.showView('documentalForm');

    },

    edit: function (button, e, eOpts) {
        var me = this,
            record = me.getViewModel().get('record');

        me.formLoadRecord(record);
        me.getReferences().displayPanel.setTitle('Editar Documento');
        me.showView('documentalForm');
    },

    remove: function (button, e, eOpts) {
        var me = this;

        // Ask user to confirm this action
        Ext.Msg.confirm('Confirm Delete', 'Você tem certeza que deseja excluir este registro?', function (result) {

            // User confirmed yes
            if (result == 'yes') {

                var record = me.getViewModel().get('record'),
                    store = Ext.StoreManager.lookup('documental.Documentos');

                // Delete record from store
                store.remove(record);

                // Hide display
                me.showView('selectMessage');

            }

        });
    },

    onSave: function (button, e, eOpts) {
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

    cancelEdit: function (button, e, eOpts) {
        // Show details
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
