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
                afterrender: this.onAfterrender
            }
        });
    },

    onAfterrender: function () {
        var me = this;

        ArqAdmin.app.createController('Root');
        ArqAdmin.app.createController('StaticData');
        me.redirectTo(Ext.util.History.getToken(), true);
        me.showWelcomeDialog();
    },

    showWelcomeDialog: function () {
        var showWelcome = ArqAdmin.user.Profile.getUserPreference('not-show-welcome');

        if (showWelcome === true) {
            return;
        }

        var win = Ext.widget('iframe-window');
        win.title = 'Bem-vindo';
        win.height = 500;
        win.down('uxiframe').src = 'resources/docs/bem-vindo.html';

        task = new Ext.util.DelayedTask(function () {
            win.show();
        }).delay(2000);

        ArqAdmin.user.Profile.setUserPreference('not-show-welcome', true);
    },

    showAboutDialog: function () {
        var win = Ext.widget('iframe-window');

        win.add({
            xtype: 'component',
            region: 'north',
            // cls: 'header-title',
            height: 80,
            style: {
                backgroundColor: '#CED5D7'
            },
            html: [
                '<img class="image-acervo" src="resources/img/arq-admin-transparent.png">'
            ]
        });

        win.width = 745;
        win.title = 'Sobre';
        win.down('uxiframe').src = 'resources/docs/sobre.html';

        win.show();
    },

    showHelpDialog: function () {
        var win = Ext.widget('iframe-window');

        win.title = 'Dicas';
        win.width = 800;
        win.down('uxiframe').src = 'resources/docs/pesquisa.html';

        win.show();
    },

    showUserDialog: function (action) {
        if (this.getViewModel().get('isAdmin')) {
            var win = Ext.widget('security-user');
            win.getViewModel().set('editType', 'user');
            win.getViewModel().getStore('users').getProxy().extraParams = {'userType': 'users'};
            win.show();
        }
    },

    showGuestDialog: function () {
        if (this.getViewModel().get('canEditGuest')) {
            var win = Ext.widget('security-user');
            win.getViewModel().set('editType', 'guest');
            delete win.getViewModel().getStore('users').getProxy().extraParams.userType;
            win.show();
        }
    },

    onNavigationButtonClick: function (btn, e, eOpts) {
        var me = this;

        if (btn.action) {
            if (btn.action === 'user-manager') {
                me.showUserDialog();
            } else if (btn.action === 'guest-manager') {
                me.showGuestDialog();
            } else {
                me.redirectTo(btn.action, true);
            }
        }
    },

    maximizeModuleContainer: function (button, e, eOpts) {
        var header = this.lookupReference('headerTitle');
        var nav = this.lookupReference('navigation');
        var footer = this.lookupReference('footer');

        if (header.isVisible()) {

            header.hide();
            nav.hide();
            // footer.hide();
            button.setGlyph(ArqAdmin.util.Glyphs.getGlyph('contract'));
            button.setTooltip('Minimizar');

        } else {

            header.show();
            nav.show();
            // footer.show();
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
