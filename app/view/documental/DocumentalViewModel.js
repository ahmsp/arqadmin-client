Ext.define('ArqAdmin.view.documental.DocumentalViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.documental',

    data: {
        moduleTitle: 'Acervo Documental / Cartográfico',
        displayPanelTitle: 'Detalhes do registro',
        displayPanelActiveItem: ''
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
        //        bindTo: '{documentalTable.selection}',
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