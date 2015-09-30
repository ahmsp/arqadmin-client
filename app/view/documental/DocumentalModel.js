Ext.define('ArqAdmin.view.documental.DocumentalModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.documental',

    data: {
        moduleTitle: 'Acervo Documental / Cartográfico',
        displayPanelTitle: 'Detalhes do registro',
        displayPanelActiveItem: ''
    },

    stores: {
        documentos: {
            model: 'ArqAdmin.model.documental.Documento',
            autoLoad: true,
            pageSize: 100,
            remoteFilter: true,
            remoteSort: true
        }
        //desenhosTecnicos: {
        //    model: 'ArqAdmin.model.desenho.DesenhoTecnico',
        //    autoLoad: true
        //}
    },


    //links: {
    //    //currentItem: record || Ext.create('ArqAdmin.model.documental.Documento')
    //    currentItem: record || {
    //        type: 'Documento',
    //        create: true
    //    }
    //},

    formulas: {
        editFormActive: function (get) {
            return get('displayPanelActiveItem') === 'editForm';
        }

        //currentItem: {
        //
        //    bind: {
        //        bindTo: '{resultTable.selection}',
        //        deep: true
        //    },
        //
        //    get: function (documento) {
        //        return documento;
        //    },
        //
        //    set: function (documento) {
        //        var me = this;
        //        if (!documento.isModel) {
        //            documento = me.get('documentos').getById(documento);
        //        }
        //        me.set('currentItem', documento);
        //    }
        //}

    }


});