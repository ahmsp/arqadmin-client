Ext.define('ArqAdmin.view.security.UserModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user',

    data: {
        role: 'ROLE_ADMIN',
        editType: 'guest'
    },

    stores: {
        users: {
            model: 'ArqAdmin.model.security.User',
            autoLoad: true,
            pageSize: 500
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
            var titleType = get('titleType');
            return get('record').phantom ? 'Cadastrar novo ' + titleType : 'Editar dados do ' + titleType;
        },

        hasRole: function (get) {
            var role = get('role') || '';
            return ArqAdmin.user.Profile.hasRole(role);
        },

        editUser: function (get) {
            return get('editType') === 'user';
        },

        isPhantom: function (get) {
            return get('record').phantom;
        },

        titleType: function (get) {
            return get('editType') === 'user' ? 'usuário' : 'consulente'
        },

        isGuestEditorOrRecordPhantom: function (get) {
            return !get('editUser') || get('isPhantom');
        },

        isSelectedGuest: function (get) {
            var userData = get('record').data;
            return userData.username.slice(0, 1) == 'c' && Ext.isEmpty(userData.roles);
        },

        isPhantomOrSelectedUser: function (get) {
            return get('isPhantom') || !get('isSelectedGuest');
        }
    }
});