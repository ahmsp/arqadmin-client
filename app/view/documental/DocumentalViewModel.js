Ext.define('ArqAdmin.view.documental.DocumentalViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.documental',

    data: {
        moduleTitle: 'Acervo Documental / Cartográfico',
        displayPanelTitle: 'Detalhes do registro',
        displayPanelActiveItem: ''
    },

    formulas: {
        editFormActive: function (get) {
            return get('displayPanelActiveItem') === 'documentalForm';
        }
    }

});