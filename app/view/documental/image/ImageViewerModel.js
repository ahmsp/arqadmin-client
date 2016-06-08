Ext.define('ArqAdmin.view.documental.image.ImageViewerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.imageviewer',

    data: {
        record: {},
        displayPanelTitle: 'Detalhes da imagem',
        displayPanelActiveItem: 'displayPanel',

        detailPanelReference: 'imageViewerDetailsPanel',
        editFormReference: 'imageViewerForm',
        displayPanelReference: 'imageViewerDisplayPanel',

        role: 'ROLE_DOCUMENTAL'
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
        },
        revisions: {
            model: 'ArqAdmin.model.RevisionHistory',
            autoLoad: false,
            remoteFilter: false,
            remoteSort: false,
            proxy: {
                type: 'ajax',
                // url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/registrosepultamento/' + '{record.id}' + '/revision',
                reader: {
                    type: 'json',
                    rootProperty: ''
                }
            },
            sorters: {
                property: 'action_date',
                direction: 'DESC'
            }
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
        },

        hasRole: function (get) {
            var role = get('role') || '';
            return  ArqAdmin.user.Profile.hasRole(role);
        }
    }

});