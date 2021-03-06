Ext.define('ArqAdmin.controller.StaticData', {
    extend: 'Ext.app.Controller',

    requires: [
        'ArqAdmin.util.Util',
        'ArqAdmin.util.Glyphs'
    ],

    stores: [
        'staticData.documental.Conservacoes',
        'staticData.documental.DtUsos',
        'staticData.classificacao.Acervos',
        'staticData.classificacao.Fundos',
        'staticData.classificacao.Subfundos',
        'staticData.classificacao.Grupos',
        'staticData.classificacao.Subgrupos',
        'staticData.classificacao.Series',
        'staticData.classificacao.Subseries',
        'staticData.classificacao.Dossies',
        'staticData.classificacao.Especiedocumentais',
        'staticData.desenhoTecnico.DtConservacoes',
        'staticData.desenhoTecnico.DtEscalas',
        'staticData.desenhoTecnico.DtSuportes',
        'staticData.desenhoTecnico.DtTecnicas',
        'staticData.desenhoTecnico.DtTipos',
        'staticData.localizacao.LcAcondicionamentos',
        'staticData.localizacao.LcCompartimentos',
        'staticData.localizacao.LcMoveis',
        'staticData.localizacao.LcSalas',
        'staticData.sepultamento.SfmCartorios',
        'staticData.sepultamento.SfmCausamortis',
        'staticData.sepultamento.SfmCemiterios',
        'staticData.sepultamento.SfmEstadocivis',
        'staticData.sepultamento.SfmNacionalidades',
        'staticData.sepultamento.SfmNaturalidades',
        'staticData.fotografico.FtFundos',
        'staticData.fotografico.FtGrupos',
        'staticData.fotografico.FtSeries',
        'staticData.fotografico.FtTipologias',
        'staticData.fotografico.FtCromias',
        'staticData.fotografico.FtCategorias',
        'staticData.fotografico.FtCampos',
        'staticData.fotografico.FtAmbientes'
    ],

    views: [
        'staticData.BaseGrid',
        'staticData.documental.Conservacoes',
        'staticData.documental.DtUsos',
        'staticData.classificacao.Acervos',
        'staticData.classificacao.AcervosForm',
        'staticData.classificacao.Fundos',
        'staticData.classificacao.Subfundos',
        'staticData.classificacao.Grupos',
        'staticData.classificacao.Subgrupos',
        'staticData.classificacao.Series',
        'staticData.classificacao.Subseries',
        'staticData.classificacao.Dossies',
        'staticData.classificacao.Especiedocumentais',
        'staticData.desenhoTecnico.DtConservacoes',
        'staticData.desenhoTecnico.DtEscalas',
        'staticData.desenhoTecnico.DtSuportes',
        'staticData.desenhoTecnico.DtTecnicas',
        'staticData.desenhoTecnico.DtTipos',
        'staticData.localizacao.LcAcondicionamentos',
        'staticData.localizacao.LcCompartimentos',
        'staticData.localizacao.LcMoveis',
        'staticData.localizacao.LcSalas',
        'staticData.sepultamento.SfmCartorios',
        'staticData.sepultamento.SfmCausamortis',
        'staticData.sepultamento.SfmCemiterios',
        'staticData.sepultamento.SfmEstadocivis',
        'staticData.sepultamento.SfmNacionalidades',
        'staticData.sepultamento.SfmNaturalidades',
        'staticData.fotografico.FtFundos',
        'staticData.fotografico.FtGrupos',
        'staticData.fotografico.FtSeries',
        'staticData.fotografico.FtTipologias',
        'staticData.fotografico.FtCromias',
        'staticData.fotografico.FtCategorias',
        'staticData.fotografico.FtCampos',
        'staticData.fotografico.FtAmbientes'
    ],

    refs: [
        {
            ref: 'acervosForm',
            selector: 'acervos-form'
        }
    ],

    init: function (application) {

        var me = this;

        me.control({
            'staticdatagrid': {
                render: me.onRender,
                edit: me.onRowEditingEdit,
                canceledit: me.onRowEditingCanceledit,
                widgetclick: me.onWidgetClick
            },
            'staticdatagrid button#add': {
                click: me.onButtonClickAdd
            },
            'staticdatagrid button#edit': {
                click: me.onButtonClickEdit
            },
            'staticdatagrid button#clearFilter': {
                click: me.onButtonClickClearFilter
            },
            'acervos-form button#save': {
                click: me.onAcervoFormSave
            },
            'acervos-form button#cancel': {
                click: me.onAcervoFormCancel
            },
            "acervos-form combobox": {
                change: 'onCascadingComboChange',
                focus: 'onCascadingComboFocus'
            },
            'acervos-grid': {
                select: me.onAcervosGridSelect
            }
        });
    },

    loadStores: function () {
        Ext.Array.each(this.stores, function (store, index, countriesItSelf) {
            Ext.getStore(store).load();
        });
    },

    onRender: function (component, eOpts) {
        Ext.grid.RowEditor.prototype.cancelBtnText = "Cancelar";
        Ext.grid.RowEditor.prototype.saveBtnText = "Atualizar";
    },

    onButtonClickAdd: function (button, e, options) {
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            rowEditing = grid.getPlugin('rowEditing'),
            newRecord = Ext.create(modelName);

        newRecord.setId(null);
        store.insert(0, newRecord);
        rowEditing.startEdit(newRecord, 1);

        if (grid.xtype === 'acervos-grid') {
            this.getAcervosForm().getForm().loadRecord(newRecord);
        }
    },

    onButtonClickEdit: function (button) {
        var grid = button.up('staticdatagrid'),
            record = grid.getSelection()[0],
            rowEditing = grid.getPlugin('rowEditing');

        rowEditing.startEdit(record, 1);
    },

    onRowEditingEdit: function (editor, context, options) {
        var store = context.grid.getStore();

        store.sync({
            success: function (batch, options) {
                store.reload();
                ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com êxito!');
            },
            failure: function (batch, options) {
                ArqAdmin.util.Util.showToast('danger', 'Erro!', 'Não foi possivel atualizar o registro!');
            }
        });
    },

    onRowEditingCanceledit: function (editor, context, eOpts) {
        // Canceling editing of a locally added, unsaved record: remove it
        if (context.record.phantom) {
            context.grid.getStore().remove(context.record);
        }
    },

    onButtonClickClearFilter: function (button, e, options) {
        button.up('staticdatagrid').filters.clearFilters();
    },

    onWidgetClick: function (grid, button) {
        var store = grid.getStore(),
            rec = button.getWidgetRecord();

        if (rec) {
            Ext.Msg.confirm('Confirmação de exclusão', 'Você tem certeza que deseja excluir este registro?', function (result) {
                if (result == 'yes') {
                    store.remove(rec);
                    store.sync({
                        success: function (batch, options) {
                            store.reload();
                            ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi removido com êxito!');
                        },
                        failure: function () {
                            Ext.Msg.alert('Erro', 'Não foi possível excluir o item. <br>Consulte um administrador.');
                            store.reload();
                        }
                    });
                }
            });
        }
    },

    onAcervosGridSelect: function (rowmodel, record, index, options) {
        var me = this,
            formPanel = me.getAcervosForm(),
            form = formPanel.getForm(),
            combos = formPanel.query('combobox');

        me.clearFilterCascadingCombos(combos);
        form.loadRecord(record);
    },

    onCascadingComboChange: function (combo, records, eOpts, conn) {
        var me = this,
            formPanel = me.getAcervosForm(),
            combos = formPanel.query('combobox');

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

        me.changeDisableCascadingCombos(combos);
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
    clearFilterCascadingCombos: function (combos) {
        Ext.Object.each(combos, function (key, combo, obj) {
            combo.getStore().clearFilter();
        });
    },

    /*
     * Change the disabled state of cascading combos,
     * based on defined values
     *
     * @param {object} comboboxes
     */
    changeDisableCascadingCombos: function (combos) {
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

    onAcervoFormSave: function () {
        var me = this,
            form = me.getAcervosForm(),
            formBasic = form.getForm(),
            record = form.getRecord(),
            values = form.getValues(),
            store = me.getStore('staticData.classificacao.Acervos');

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
                    store.load();
                    ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com êxito!');
                },
                failure: function (batch, options) {
                    ArqAdmin.util.Util.showToast('danger', 'Erro!', 'Não foi possivel atualizar o registro!');
                }
            });

        } else {
            ArqAdmin.util.Util.showToast('danger', 'Erro!', 'O formulário contém dados inválidos!');
        }
    },

    onAcervoFormCancel: function (button, e, eOpts) {
        var me = this,
            form = me.getAcervosForm(),
            record = form.getRecord();

        form.reset(true);

        if (record.phantom) {
            form.loadRecord(record);
        }
    }

});