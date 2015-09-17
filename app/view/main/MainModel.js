/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ArqAdmin.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'ArqAdmin',

        appName: 'ArqAdmin - Sistema de gestão dos acervos do Arquivo Histórico de São Paulo',
        appHeaderIcon: '<span class="fa fa-desktop fa-lg app-header-logo">',
        footer: 'Alexandre Cyro Pereira ...',

        auth: {
            hash: ''
        },

        moduleTitle: ''
    }

    //TODO - add data, formulas and/or methods to support your view
});