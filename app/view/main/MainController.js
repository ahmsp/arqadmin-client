Ext.define('ArqAdmin.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'ArqAdmin.util.Util',
        'ArqAdmin.controller.StaticData',
        'ArqAdmin.controller.Root'
    ],

    alias: 'controller.main',

    control: {
        "#navigation toolbar button": {
            click: 'onNavigationButtonClick'
        },
        "#navigation toolbar menuitem": {
            click: 'onNavigationButtonClick'
        },
        "button#btnMaximize": {
            click: 'maximizeModuleContainer'
        }
    },

    init: function () {
        var me = this;

        me.control({
            "app-main": {
                afterrender: this.initiateControllers
            }
        });
    },

    initiateControllers: function () {
        ArqAdmin.app.createController('Root');
        ArqAdmin.app.createController('StaticData');
        this.redirectTo(Ext.util.History.getToken(), true);
    },

    onNavigationButtonClick: function (btn, e, eOpts) {
        if (btn.action) {
            this.redirectTo(btn.action, true);
        }
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
