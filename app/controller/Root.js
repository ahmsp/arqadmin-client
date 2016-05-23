Ext.define('ArqAdmin.controller.Root', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.addRef([{
            ref: 'modulesContainer',
            selector: '#modulesContainer'
        }, {
            ref: 'main',
            selector: 'app-main'
        }]);
        this.callParent();
    },

    routes: {
        'painel|documental|fotografico|sepultamento': {
            action: 'onRouteModules'
        }
    },

    listen: {
        controller: {
            '*': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },

    onRouteModules: function () {
        var me = this,
            hash = Ext.util.History.getToken();

        switch (hash) {
            case 'painel':
                me.showView('module-dashboard');
                break;
            case 'documental':
                me.showView('module-documental');
                break;
            case 'fotografico':
                me.showView('module-fotografico');
                break;
            case 'sepultamento':
                me.showView('module-sepultamento');
                break;
        }
    },

    showView: function (viewXtype) {
        var me = this,
            card = me.getModulesContainer();

        var view = card.items.findBy(function (view) {
            return view.isXType(viewXtype);
        });

        if (!view) {
            view = card.add({
                xtype: viewXtype
            });
        }
        card.getLayout().setActiveItem(view);
    },

    onUnmatchedRoute: function (hash) {
        // hash = Ext.util.History.getToken();
        // var msg = 'O recurso <b>"' + hash + '"</b> que você está tentando acessar, não existe';
        // ArqAdmin.util.Util.showErrorMsg(msg);
        Ext.util.History.back();
    }
});