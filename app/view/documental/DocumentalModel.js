Ext.define('ArqAdmin.view.documental.DocumentalModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.documental',

    data: {
        moduleTitle: 'Acervos Textual e Cartográfico',
        displayPanelTitle: 'Detalhes do registro',
        displayPanelActiveItem: '',
        
        detailPanelReference: 'detailsPanel',
        editFormReference: 'editForm',
        displayPanelReference: 'displayPanel',

        acervoRoute: 'documento',
        acervoStore: 'documentos',
        withImage: true,

        role: 'ROLE_DOCUMENTAL'
    },

    stores: {
        documentos: {
            model: 'ArqAdmin.model.documental.Documento',
            autoLoad: false,
            pageSize: 100,
            remoteFilter: true,
            remoteSort: true,
            listeners: {
                beforeload: 'onAcervoStoreBeforeload',
                load: 'onAcervoStoreLoad'
            }
        },
        desenhosTecnicos: {
            model: 'ArqAdmin.model.desenho.DesenhoTecnico',
            autoLoad: false,
            pageSize: 100,
            remoteFilter: true,
            remoteSort: true
        },
        revisions: {
            model: 'ArqAdmin.model.RevisionHistory',
            autoLoad: false,
            remoteFilter: false,
            remoteSort: false,
            proxy: {
                type: 'ajax',
                // url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/documento/' + '{record.id}' + '/revision',
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

        displayPanelTitle: function (get) {
            var title = 'Detalhes do registro';

            if (get('displayPanelActiveItem') == 'editForm') {
                title = get('record').phantom ? 'Novo registro' : 'Editar registro';
            }

            return title;
        },

        hasRole: function (get) {
            var role = get('role') || '';
            return  ArqAdmin.user.Profile.hasRole(role);
        },

        hasRecords: function(get) {
            return get('totalRecords') > 0;
        }

    }


});