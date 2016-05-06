Ext.define('ArqAdmin.view.fotografico.FotograficoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.fotografico',

    data: {
        moduleTitle: 'Acervo Fotográfico',
        displayPanelTitle: 'Detalhes da imagem',
        displayPanelActiveItem: '',

        detailPanelReference: 'detailsPanel',
        editFormReference: 'editForm',
        displayPanelReference: 'displayPanel'
    },

    stores: {
        fotografias: {
            model: 'ArqAdmin.model.fotografico.Fotografia',
            autoLoad: true,
            pageSize: 100,
            remoteFilter: true,
            remoteSort: true
        }
    },

    formulas: {

        displayPanelTitle: function (get) {
            var title = 'Detalhes da imagem';

            if (get('displayPanelActiveItem') == 'editForm') {
                title = get('record').phantom ? 'Nova registro' : 'Editar registro';
            }

            return title;
        }

    }
    
});