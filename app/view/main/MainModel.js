/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ArqAdmin.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'ArqAdmin',
        baseUrl: '',

        appName: 'ArqAdmin - Sistema de gestão dos acervos do Arquivo Histórico de São Paulo',
        appHeaderIcon: '<span class="fa fa-desktop fa-lg app-header-logo">',
        footer: 'Alexandre Cyro Pereira ...',

        //token: '',

        moduleTitle: ''
    },

    formulas: {
        baseUrl: function () {
            //return ArqAdmin.config.Runtime.getBaseUrl();
        }

    }


    //TODO - add data, formulas and/or methods to support your view
});