Ext.define('ArqAdmin.view.documental.DocumentalController', {
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
            grid = me.lookupReference('resultTable'),
            store = grid.getStore(),
            filters = [];

        if (form.getForm().findField('com_imagem').getValue()) {
            params.com_imagem = 1;
        }

        Ext.Object.each(params, function (key, value) {
            filters.push({
                'property': key,
                'value': value,
                'operator': form.getForm().findField(key).operator
            });
        });

        grid.filters.clearFilters(true);
        store.clearFilter(true);
        store.filter(filters);
    },

    onFilterFormButtonClearClick: function (button) {
        button.up('form').reset();
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
                        gridColums = grid.view.getGridColumns();
                        column = gridColums[tip.triggerElement.cellIndex];
                        if (column.dataIndex === 'id') {
                            record = grid.view.getRecord(tip.triggerElement.parentNode);
                            var dt = record.get('desenhos_tecnicos');
                            if (!Ext.isEmpty(dt)) {
                                var imgPath = ArqAdmin.config.Runtime.getImagesCartografico() + dt[0].id + '/320';
                                var ttip = [
                                    '<div class="tipcls">' +
                                    '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image.png\';">' +
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

            if (componentGrid.reference == 'resultGallery') {
                componentGrid = componentGrid.down('dataview');
            }

            if (record !== componentGrid.getSelectionModel().getSelection()[0]) {
                me.selectRecord(componentGrid, record);
            }
        });

        me.getViewModel().set('record', record);
        me.detailsPanelLoadRecord(record, true);
    },

    onButtonShowImageClick: function (event, target) {
        var imgId = target.id.split('-').pop();

        this.showImageViewerWindow(imgId);
    },

    onGridCelldblclick: function () {
        this.onEdit();
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

    showViewDisplayPanel: function (view) {
        var layout = this.getReferences().displayPanel.getLayout();
        layout.setActiveItem(this.lookupReference(view));
    },

    showImageViewerWindow: function (imageId) {
        var me = this,
            win = Ext.widget('imageviewer-window');

        var dataView = me.lookupReference('resultGallery').down('dataview');
        var record = dataView.getSelectionModel().getSelection()[0];

        //console.log(dataView);
        //console.log(record);

        win.getViewModel().set('currentImage', record.data.desenhos_tecnicos[0]);

        win.add({
            xtype: 'dt-imagedetail',
            region: 'east'
        });

        var store = me.getStore('desenhosTecnicos');
        var images = record.getData().desenhos_tecnicos;

        //Ext.Object.each(images, function(key, value) {
        //});

        store.loadRawData(images);
        console.log(store);
        win.down('dataview').setStore(store);

        //win.getViewModel().getStore('images').setModel(record);
        //win.getViewModel().set('images', record);

        //win.on('render', function (win) {
        //    console.log(win.getViewModel().get('images'));
        //});

        win.show();
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
        var store = Ext.getStore('staticData.classificacao.Acervos');

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
            me.deselectAllGrids();
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
                    var operations = batch.getOperations();
                    var result = Ext.decode(operations[0].getResponse().responseText);
                    store.load({
                        scope: me,
                        callback: function (records, operation, success) {
                            //me.forceResetForm(form);
                            form.reset();
                            var record = store.findRecord('id', result.id);
                            me.selectRecord(null, record)
                        }
                    });
                    ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com êxito!');
                }
            });
        } else {
            ArqAdmin.util.Util.showToast('danger', 'Erro!', 'O formulário contém dados inválidos!');
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
                                    me.selectRecord(null, 0)
                                }
                            });
                            ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'Registro removido com sucesso!');
                        },
                        failure: function () {
                            ArqAdmin.util.Util.showToast('danger', 'Erro!', 'Não foi possivel remover o registro!');
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
