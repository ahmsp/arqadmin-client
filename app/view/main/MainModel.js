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

        moduleTitle: ''
    },

    stores: {
        logicalOperators: {
            autoLoad: true,
            fields: [
                {name: 'id'},
                {name: 'text'}
            ],
            data: [
                {
                    "id": "and",
                    "text": "Deve conter"
                },
                {
                    "id": "or",
                    "text": "Pode conter"
                },
                {
                    "id": "not",
                    "text": "Não conter"
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
        }
    }
});