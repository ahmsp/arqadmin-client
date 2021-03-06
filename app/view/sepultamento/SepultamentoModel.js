Ext.define('ArqAdmin.view.sepultamento.SepultamentoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sepultamento',

    data: {
        moduleTitle: 'Acervo Termos de Sepultamento',
        displayPanelTitle: 'Detalhes do registro',
        displayPanelActiveItem: '',

        detailPanelReference: 'detailsPanel',
        editFormReference: 'editForm',
        displayPanelReference: 'displayPanel',

        acervoRoute: 'registrosepultamento',
        acervoStore: 'sepultamentos',
        withImage: false,

        role: 'ROLE_SEPULTAMENTO'
    },

    stores: {
        sepultamentos: {
            model: 'ArqAdmin.model.sepultamento.RegistroSepultamento',
            autoLoad: false,
            pageSize: 100,
            remoteFilter: true,
            remoteSort: true,
            listeners: {
                beforeload: 'onAcervoStoreBeforeload',
                load: 'onAcervoStoreLoad'
            }
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