Ext.define('ArqAdmin.view.sepultamento.SepultamentoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sepultamento',

    data: {
        moduleTitle: 'Acervo Registros de Sepultamento',
        displayPanelTitle: 'Detalhes do registro',
        displayPanelActiveItem: '',

        detailPanelReference: 'detailsPanel',
        editFormReference: 'editForm',
        displayPanelReference: 'displayPanel'
    },

    stores: {
        sepultamentos: {
            model: 'ArqAdmin.model.sepultamento.RegistroSepultamento',
            autoLoad: true,
            pageSize: 100,
            remoteFilter: true,
            remoteSort: true
        }
    },

    formulas: {

        displayPanelTitle: function (get) {
            var title = 'Detalhes do registro';

            if (get('displayPanelActiveItem') == 'editForm') {
                title = get('record').phantom ? 'Novo registro' : 'Editar registro';
            }

            return title;
        }
    }
});