Ext.define('ArqAdmin.view.dashboard.DashboardViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',

    onDataviewItemClick: function(dataview, record, item, index, e, eOpts) {

        var appMain = dataview.up('app-main');
        var cardLayout = appMain.lookupReference('modulescontainer').getLayout();

        switch(record.get('acervo')) {
            case 'doc':
                cardLayout.setActiveItem(appMain.lookupReference('documental'));
                break;
            case 'foto':
                cardLayout.setActiveItem(appMain.lookupReference('fotograficoContainer'));
                break;
            case 'sepult':
                cardLayout.setActiveItem(appMain.lookupReference('sepultamentoContainer'));
                break;
        }
    }
});
