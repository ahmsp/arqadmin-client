Ext.define('ArqAdmin.view.documental.image.ImageViewerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.imageviewer',

    data: {
        record: {},
        displayPanelTitle: 'Detalhes da imagem',
        displayPanelActiveItem: 'displayPanel',

        detailPanelReference: 'imageViewerDetailsPanel',
        editFormReference: 'imageViewerForm',
        displayPanelReference: 'imageViewerDisplayPanel'
    },

    formulas: {

        currentImage: function (get) {
            return get('record').data;
        },

        displayPanelTitle: function (get) {
            var title = 'Detalhes da Imagem';

            if (get('displayPanelActiveItem') == 'imageViewerForm') {
                title = get('record').phantom ? 'Editar imagem' : 'Nova imagem';
            }

            return title;
        }
    }

});