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

        //token: '',

        moduleTitle: ''
    },

    formulas: {
        apiBaseUrl: function () {
            //return ArqAdmin.config.Runtime.getApiBaseUrl();
        }

    }


    //TODO - add data, formulas and/or methods to support your view
});