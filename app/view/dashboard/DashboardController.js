Ext.define('ArqAdmin.view.dashboard.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',

    onDataviewItemClick: function(dataview, record, item, index, e, eOpts) {

        var mainController = dataview.up('app-main').getController();

        switch(record.get('acervo')) {
            case 'doc':
                mainController.showView('module-documental');
                break;
            case 'foto':
                mainController.showView('module-fotografico');
                break;
            case 'sepult':
                mainController.showView('module-sepultamento');
                break;
        }
    }
});
