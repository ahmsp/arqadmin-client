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
        }
    },

    onNavigationButtonClick: function (btn, e, eOpts) {
        switch (btn.itemId) {
            case 'btnDashboard':
                this.showView('dashboardMain');
                break;
        }
    },

    onNavigationMenuitemClick: function (item, e, eOpts) {
        switch (item.itemId) {
            case 'menuitemDocumental':
                this.showView('module-documental');
                break;
            case 'menuitemFotografico':
                this.showView('module-fotografico');
                break;
            case 'menuitemSepultamento':
                this.showView('module-sepultamento');
                break;
        }
    },

    showView: function (viewXtype) {
        var me = this,
            card = me.lookupReference('modulesContainer');

        var viewReference = viewXtype.replace(/-([a-z])/gi, function ($0, $1) {
            return $1.toUpperCase();
        });

        var view = me.lookupReference(viewReference);

        if (!view) {
            view = Ext.widget(viewXtype);
            card.add(view);
        }

        card.getLayout().setActiveItem(view);
    },

    maximizeModuleContainer: function (button, e, eOpts) {
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
            button.setGlyph(ArqAdmin.util.Glyphs.getGlyph('contract'));
            button.setTooltip('Maximizar');
        }

    },

    onLogout: function (button, e, eOpts) {
        var me = this;
        Ext.Ajax.request({
            url: '/auth/logout',
            scope: me,
            success: 'onLogoutSuccess',
            failure: 'onLogoutFailure'
        });
    },

    onLogoutSuccess: function (conn, response, options, eOpts) {
        var result = ArqAdmin.util.Util.decodeJSON(conn.responseText);

        if (result.success) {
            this.getView().destroy();
            window.location.reload();
        } else {
            ArqAdmin.util.Util.showErrorMsg(result.msg);
        }
    },

    onLogoutFailure: function (conn, response, options, eOpts) {
        ArqAdmin.util.Util.showErrorMsg(conn.responseText);
    },

    onContainerAfterLayout: function (container, layout, eOpts) {
        var me = this,
            activeItem = layout.getActiveItem(),
            viewModel = me.getViewModel();

        viewModel.set('moduleTitle', activeItem.getViewModel().get('moduleTitle'));
    }
});
