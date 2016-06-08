Ext.define('ArqAdmin.view.fotografico.FotograficoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.fotografico',

    data: {
        moduleTitle: 'Acervo Fotográfico',
        displayPanelTitle: 'Detalhes da imagem',
        displayPanelActiveItem: '',

        detailPanelReference: 'detailsPanel',
        editFormReference: 'editForm',
        displayPanelReference: 'displayPanel',

        role: 'ROLE_FOTOGRAFICO'
    },

    stores: {
        fotografias: {
            model: 'ArqAdmin.model.fotografico.Fotografia',
            autoLoad: true,
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
                // url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/fotografia/' + '{record.id}' + '/revision',
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
            var title = 'Detalhes da imagem';

            if (get('displayPanelActiveItem') == 'editForm') {
                title = get('record').phantom ? 'Nova registro' : 'Editar registro';
            }

            return title;
        },

        imageUrl: function (get) {
            var rec = get('record');

            if (!Ext.isEmpty(rec.get('imagem_original'))) {
                return ArqAdmin.config.Runtime.getImagesFotografico() + rec.id + '/320';
            }

            return 'resources/ico/no-image-75.png';
        },

        hideFilefield: function (get) {
            var rec = get('record');
            return (!rec.phantom && !Ext.isEmpty(rec.get('imagem_original')));
        },

        hasRole: function (get) {
            var role = get('role') || '';
            return  ArqAdmin.user.Profile.hasRole(role);
        }

    }

});