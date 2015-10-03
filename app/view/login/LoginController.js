/**
 * Created by cyro on 03/07/15.
 */
Ext.define('ArqAdmin.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    requires: [
        'ArqAdmin.util.Util'
    ],

    control: {
        "textfield": {
            specialkey: 'onTextfieldSpecialkey'
        }
    },

    onTextfieldSpecialkey: function(field, e, eOpts) {
        var form = this.lookupReference('loginform');
        if (form.isValid()) {
            if (e.getKey() == e.ENTER) {
                var button = this.lookupReference('btnSubmit');
                button.fireEvent('click', button);
            }
        }
    },

    doLogin: function() {
        var me = this,
            form = me.lookupReference('loginform');

        me.getView().mask('Autenticando... Aguarde...');

        form.submit({
            clientValidation: true,
            url: ArqAdmin.config.Runtime.getApiUrl() + '/auth/login',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });

    },

    onLoginFailure: function(form, action) {
        this.getView().unmask();

        ArqAdmin.util.Util.handleFormFailure(action);
    },

    onLoginSuccess: function(form, action) {
        var view = this.getView();
        view.unmask();
        view.close();
        Ext.create('ArqAdmin.view.main.Main');
        // Packt.util.SessionMonitor.start();
    },

    onWindowShow: function(component, eOpts) {
        var bodyHeight = Ext.getBody().getViewSize().height;
        var toPosition = (bodyHeight - component.height) / 2;

        component.animate({
            duration: 200,
            from: {
                y: -component.height
            },
            to: {
                y: toPosition
            },
            listeners: {
                afteranimate: function() {
                    this.lookupReference('fieldUsername').focus(true, 180);
                },
                scope: this
            }
        });

        // Ext.create('Ext.fx.Anim', {
        //     target: win,
        //     duration: 300,
        //     ease: 'elasticIn',
        //     from: {
        //         y: -400 //starting width 400
        //     },
        //     to: {
        //         y: 100
        //     }
        // });
    },

    onFieldPasswordKeypress: function(textfield, e, eOpts) {
        var charCode = e.getCharCode(),
            me = this;

        if((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)){

            if(me.capslockTooltip === undefined){
                me.capslockTooltip = Ext.create('capslocktooltip');
            }

            me.capslockTooltip.show();

        } else {

            if(me.capslockTooltip !== undefined){
                me.capslockTooltip.hide();
            }
        }
    },

    onButtonSubmitClick: function(button, e, eOpts) {
        var me = this;

        if (me.lookupReference('loginform').isValid()){
            me.doLogin();
        }
    }
});