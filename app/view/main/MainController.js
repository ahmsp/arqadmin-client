Ext.define('ArqAdmin.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'ArqAdmin.util.Util',
        'ArqAdmin.controller.StaticData'
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

    init: function () {
        var me = this;

        Ext.Ajax.on({
            beforerequest: me.onBeforeRequest,
            //requestcomplete : me.onRequestComplete,
            requestexception: me.onRequestException
        });

        me.control({
            "app-main": {
                afterrender: this.initiateControllers
            }
        });
    },

    initiateControllers: function () {
        ArqAdmin.app.createController('StaticData');
    },

    onBeforeRequest: function (conn, options, eOpts) {

        console.log(options.url);

        var me = this,
            token = localStorage.getItem('access-token');

        options.useDefaultXhrHeader = false; //nao incluir X-Requested-With ???
        options.headers = {'Authorization': 'Bearer ' + token};
    },

    onRequestException: function (conn, response, options, eOpts) {
        var me = this;

        // "error":"access_denied"
        if (response.status === 401) {
            Ext.Msg.show({
                title: 'Sessão expirada!',
                message: 'Sessão expirada. A aplicação nirá icializada',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR,
                fn: function (btn) {
                    if (btn === 'ok') {
                        me.onLogout();
                    }
                }
            });
        } else {
            var error = ArqAdmin.util.Util.decodeJSON(request.responseText);
            ArqAdmin.util.Util.showErrorMsg(error.error_description);
        }
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
        ArqAdmin.app.getController('OAuth').logout();
    },

    onContainerAfterLayout: function (container, layout, eOpts) {
        var me = this,
            activeItem = layout.getActiveItem(),
            viewModel = me.getViewModel();

        viewModel.set('moduleTitle', activeItem.getViewModel().get('moduleTitle'));
    }
});
