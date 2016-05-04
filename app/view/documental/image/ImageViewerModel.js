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

    stores: {
        documentalImages: {
            model: 'ArqAdmin.model.desenho.DesenhoTecnico',
            autoLoad: true,
            pageSize: 100,
            remoteFilter: true,
            remoteSort: true,
            filters: [{
                property: 'documento_id',
                value: '{documentoId}'
            }]
        }
    },

    formulas: {

        currentImage: function (get) {
            return get('record').data;
        },

        displayPanelTitle: function (get) {
            var title = 'Detalhes da Imagem';

            if (get('displayPanelActiveItem') == 'imageViewerForm') {
                title = get('record').phantom ?  'Nova imagem' : 'Editar imagem';
            }

            return title;
        },

        isCartografico: {
            bind: {
                bindTo: '{acervoTipo.selection}',
                deep: true
            },
            get: function(record) {
                return record ? record.data.field1 === 'cartografico' : false;
            }
        },

        displayCartografico: function (get) {
            return get('currentImage').acervo_tipo === 'cartografico';
        }
    }

});