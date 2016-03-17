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
                //render: me.render,
                //edit: me.onEdit,
                afterrender: me.onAfterRender,
                widgetclick: me.onWidgetClick
            },
            'staticdatagrid button#add': {
                click: me.onButtonClickAdd
            },
            'staticdatagrid button#save': {
                click: me.onButtonClickSave
            },
            'staticdatagrid button#cancel': {
                click: me.onButtonClickCancel
            },
            'staticdatagrid button#clearFilter': {
                click: me.onButtonClickClearFilter
            },
            'citiesgrid button#clearGrouping': {
                toggle: me.onButtonToggleClearGrouping
            }
        });
    },

    loadStores: function () {
        Ext.Array.each(this.stores, function (store, index, countriesItSelf) {
            Ext.getStore(store).load();
        });
    },

    onStoreSync: function (store, operation, options) {
        console.log('sync');

        ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com êxito!');
    },

    //render: function (component, options) {
    //    //component.getStore().load();
    //
    //    if (component.xtype === 'citiesgrid' && component.features.length > 0) {
    //        if (component.features[0].ftype === 'grouping') {
    //            component.down('toolbar#topToolbar').add([
    //                {
    //                    xtype: 'tbseparator'
    //                },
    //                {
    //                    xtype: 'button',
    //                    itemId: 'clearGrouping',
    //                    text: 'Group by Country: ON',
    //                    glyph: Packt.util.Glyphs.getGlyph('groupCountry'),
    //                    enableToggle: true,
    //                    pressed: true
    //                }
    //            ]);
    //        }
    //    }
    //},

    onButtonClickAdd: function (button, e, options) {
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            cellEditing = grid.getPlugin('cellplugin'),
            newRecord = Ext.create(modelName);

        newRecord.setId(null);
        store.insert(0, newRecord);

        cellEditing.startEditByPosition({row: 0, column: 1});
    },

    onButtonClickSave: function (button, e, options) {
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            errors = grid.validate();

        if (errors === undefined) {
            store.sync({
                success: function (batch, options) {
                    store.load();
                    ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com êxito!');
                }
            });
        } else {
            Ext.Msg.alert(errors);
        }
    },

    //onEdit: function (editor, context, options) {
    //    context.record.set('last_update', new Date());
    //},

    onButtonClickCancel: function (button, e, options) {
        button.up('staticdatagrid').getStore().reload();
    },

    onButtonClickClearFilter: function (button, e, options) {
        console.log(button.up('staticdatagrid').filters);

        button.up('staticdatagrid').filters.clearFilters();
    },

    onWidgetClick: function (grid, button) {
        var store = grid.getStore(),
            rec = button.getWidgetRecord();

        store.remove(rec);
        Ext.Msg.alert('Excluir', 'Salve as alterações para efetivar a exclusão dos registro removidos');
    },

    onAfterRender: function (grid, options) {
        var view = grid.getView();
        view.on('itemupdate', function (record, index, node, options) {
            grid.validateRow(record, index, node, options);
        });
    }
});