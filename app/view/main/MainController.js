Ext.define('ArqAdmin.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'ArqAdmin.util.Util',
        'ArqAdmin.controller.StaticData',
    ],

    alias: 'controller.main',

    init: function () {
        var me = this;

        me.getTokenFromLocalStorage();

        me.control({
            "app-main": {
                afterrender: this.initiateControllers
            }
        });
    },

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

    initiateControllers: function () {
        ArqAdmin.app.createController('StaticData');
    },

    getTokenFromLocalStorage: function () {
        var token = localStorage.getItem('access-token');

        Ext.Ajax.setDefaultHeaders({'Authorization': 'Bearer ' + token});
        this.getViewModel().set('token', token);
    },

    onNavigationButtonClick: function (btn, e, eOpts) {
        switch (btn.itemId) {
            case 'btnDashboard':
                this.showView('module-dashboard');
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
            button.setGlyph(ArqAdmin.util.Glyphs.getGlyph('contract'));
            button.setTooltip('Minimizar');

        } else {

            header.show();
            nav.show();
            footer.show();
            button.setGlyph(ArqAdmin.util.Glyphs.getGlyph('expand'));
            button.setTooltip('Maximizar');
        }

    },

    onLogout: function (button, e, eOpts) {
        //var me = this;

        localStorage.removeItem('access-token');

        //Ext.Ajax.request({
        //    url: ArqAdmin.config.Runtime.getBaseUrl() + '/auth/logout',
        //    scope: me,
        //    success: 'onLogoutSuccess',
        //    failure: 'onLogoutFailure'
        //});

        this.getView().destroy();
        window.location.reload();
    },

    onLogoutSuccess: function (response, eOpts) {
        var result = ArqAdmin.util.Util.decodeJSON(response.responseText);

        if (result.success) {
            this.getView().destroy();
            window.location.reload();
        } else {
            ArqAdmin.util.Util.showErrorMsg(result.msg);
        }
    },

    onLogoutFailure: function (response, eOpts) {
        ArqAdmin.util.Util.showErrorMsg(response.responseText);
    },

    onContainerAfterLayout: function (container, layout, eOpts) {
        var me = this,
            activeItem = layout.getActiveItem(),
            viewModel = me.getViewModel();

        viewModel.set('moduleTitle', activeItem.getViewModel().get('moduleTitle'));
    }
});
