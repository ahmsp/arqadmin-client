Ext.define('ArqAdmin.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'ArqAdmin.util.Util'
    ],

    alias: 'controller.main',

    control: {
        "#navigation toolbar button": {
            click: 'onNavigationButtonClick'
        },
        "#navigation toolbar menuitem": {
            click: 'onNavigationMenuitemClick'
        },
        "button#btnMaximize": {
            click: 'maximizeModuleContainer'
        },
        "#toolbarHeader button": {
            click: 'onResultToolbarButtonsClick'
        }
    },

    onNavigationButtonClick: function(btn, e, eOpts) {
        switch(btn.itemId) {
            case 'btnDashboard':
                this.showView('dashboardMain');
                break;
        }
    },

    onNavigationMenuitemClick: function(item, e, eOpts) {
        switch(item.itemId) {
            case 'menuitemDocumental':
                this.showView('documental');
                break;
            case 'menuitemFotografico':
                this.showView('fotograficoContainer');
                break;
            case 'menuitemSepultamento':
                this.showView('sepultamentoContainer');
                break;
        }
    },

    maximizeModuleContainer: function(button, e, eOpts) {
        var header = this.lookupReference('headerTitle');
        var nav = this.lookupReference('navigation');
        var footer = this.lookupReference('footer');

        if (header.isVisible()) {

            header.hide();
            nav.hide();
            footer.hide();
            button.setGlyph('58884');
            button.setTooltip('Minimizar');

        } else {

            header.show();
            nav.show();
            footer.show();
            button.setGlyph('58880');
            button.setTooltip('Maximizar');
        }

    },

    onToolbarGridButtonsClick: function(button, e, eOpts) {
        if ((button.itemId == 'btnClearFilters')) {
            button.up('panel').down('grid').filters.clearFilters();
        } else {
            var setActive = (button.itemId == 'btnShowTable') ? 0 : 1;
            button.up('panel').getLayout().setActiveItem(setActive);
        }
    },

    showView: function(view) {
        var me = this;
        var layout = me.getReferences().modulescontainer.getLayout();
        var viewModel = me.getViewModel();

        layout.setActiveItem(me.lookupReference(view));
    },

    onLogoutSuccess: function(conn, response, options, eOpts) {
        var result = ArqAdmin.util.Util.decodeJSON(conn.responseText);

        if (result.success) {
            this.getView().destroy();
            window.location.reload();
        } else {
            ArqAdmin.util.Util.showErrorMsg(result.msg);
        }
    },

    onLogoutFailure: function(conn, response, options, eOpts) {
        ArqAdmin.util.Util.showErrorMsg(conn.responseText);
    },

    onLogout: function(button, e, eOpts) {
        var me = this;
        Ext.Ajax.request({
            url: '/auth/logout',
            scope: me,
            success: 'onLogoutSuccess',
            failure: 'onLogoutFailure'
        });
    },

    onContainerAfterLayout: function(container, layout, eOpts) {
        var me = this;
        var activeItem = layout.getActiveItem();
        var viewModel = me.getViewModel();

        viewModel.set('moduleTitle', activeItem.getViewModel().get('moduleTitle'));
    }
});
