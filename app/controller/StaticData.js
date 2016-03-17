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
        'staticData.sepultamento.SfmNaturalidades'
    ],

    views: [
        'staticData.BaseGrid',
        'staticData.documental.Conservacoes'

        //'staticData.documental.DtUsos',
        //'staticData.classificacao.Acervos',
        //'staticData.classificacao.Fundos',
        //'staticData.classificacao.Subfundos',
        //'staticData.classificacao.Grupos',
        //'staticData.classificacao.Subgrupos',
        //'staticData.classificacao.Series',
        //'staticData.classificacao.Subseries',
        //'staticData.classificacao.Dossies',
        //'staticData.classificacao.Especiedocumentais',
        //'staticData.desenhoTecnico.DtConservacoes',
        //'staticData.desenhoTecnico.DtEscalas',
        //'staticData.desenhoTecnico.DtSuportes',
        //'staticData.desenhoTecnico.DtTecnicas',
        //'staticData.desenhoTecnico.DtTipos',
        //'staticData.localizacao.LcAcondicionamentos',
        //'staticData.localizacao.LcCompartimentos',
        //'staticData.localizacao.LcMoveis',
        //'staticData.localizacao.LcSalas',
        //'staticData.sepultamento.SfmCartorios',
        //'staticData.sepultamento.SfmCausamortis',
        //'staticData.sepultamento.SfmCemiterios',
        //'staticData.sepultamento.SfmEstadocivis',
        //'staticData.sepultamento.SfmNacionalidades',
        //'staticData.sepultamento.SfmNaturalidades'
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
            'staticdatagrid button#clearFilter': {
                click: me.onButtonClickClearFilter
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
    },

    onRowEditingEdit: function (editor, context, options) {
        var store = context.grid.getStore();

        store.sync({
            success: function (batch, options) {
                store.reload();
                ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com êxito!');
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
            Ext.Msg.confirm('Confirmação de esclusão', 'Você tem certeza que deseja excluir este registro?', function (result) {
                if (result == 'yes') {
                    store.remove(rec);
                    store.sync({
                        success: function (conn, response, options, eOpts) {
                            store.reload();
                            ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi removido com êxito!');
                        }
                    });
                }
            });
        }
    }
});