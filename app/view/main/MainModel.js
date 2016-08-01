/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ArqAdmin.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'ArqAdmin',
        apiBaseUrl: '',

        appName: 'ArqAdmin - Sistema de gestão dos acervos do Arquivo Histórico de São Paulo',
        appHeaderIcon: '<span class="fa fa-desktop fa-lg app-header-logo">',
        footer: 'Alexandre Cyro Pereira ...',

        // role: '',
        moduleTitle: ''
    },

    stores: {
        logicalOperators: {
            autoLoad: true,
            fields: [
                {name: 'id'},
                {name: 'description'},
                {name: 'symbol'}
            ],
            data: [
                {
                    "id": "and",
                    "description": "Deve conter o termo",
                    "symbol": ""
                },
                {
                    "id": "or",
                    "description": "Pode conter o termo",
                    "symbol": ""
                },
                {
                    "id": "not",
                    "description": "Não deve conter o termo",
                    "symbol": ""
                }
            ]
        }
    },

    formulas: {
        apiBaseUrl: function () {
            //return ArqAdmin.config.Runtime.getApiBaseUrl();
        },

        userProfile: function () {
            return ArqAdmin.user.Profile.getUserProfile();
        },

        isAdmin: function () {
            return ArqAdmin.user.Profile.hasRole('ROLE_ADMIN');
        },

        canEditGuest: function () {
            return ArqAdmin.user.Profile.hasRole('ROLE_ADMIN')
                || ArqAdmin.user.Profile.hasRole('ROLE_DOCUMENTAL')
                || ArqAdmin.user.Profile.hasRole('ROLE_FOTOGRAFICO')
                || ArqAdmin.user.Profile.hasRole('ROLE_SEPULTAMENTO')
                || ArqAdmin.user.Profile.hasRole('ROLE_ATENDIMENTO');
        },

        hasRole: function (get) {
            var role = get('role') || '';
            return ArqAdmin.user.Profile.hasRole('ROLE_ADMIN')
                || ArqAdmin.user.Profile.hasRole(role);
        }
    }
});