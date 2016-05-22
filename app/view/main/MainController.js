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

        me.control({
            "app-main": {
                afterrender: this.initiateControllers
            }
        });
    },

    initiateControllers: function () {
        ArqAdmin.app.createController('StaticData');
    },

    onNavigationButtonClick: function (btn, e, eOpts) {

        switch (btn.itemId) {
            case 'btnDashboard':
                this.showView('module-dashboard');
                break;
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
            card = me.lookupReference('modulesContainer'),
            viewReference,
            view,
            task;

        viewReference = viewXtype.replace(/-([a-z])/gi, function ($0, $1) {
            return $1.toUpperCase();
        });

        view = me.lookupReference(viewReference);

        if (!view) {
            me.getView().mask('Carregando...');
            task = new Ext.util.DelayedTask(function () {
                view = Ext.widget(viewXtype);
                card.add(view);
                card.getLayout().setActiveItem(view);
                me.getView().unmask();
            }).delay(200);
        } else {
            card.getLayout().setActiveItem(view);
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
