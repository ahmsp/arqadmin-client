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

    onWindowShow: function (component, eOpts) {
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
                afteranimate: function () {
                    this.lookupReference('fieldUsername').focus(true, 180);
                },
                scope: this
            }
        });
    },

    onTextfieldSpecialkey: function (field, e, eOpts) {
        var form = this.lookupReference('loginform');
        if (form.isValid()) {
            if (e.getKey() == e.ENTER) {
                var button = this.lookupReference('btnSubmit');
                button.fireEvent('click', button);
            }
        }
    },

    onFieldPasswordKeypress: function (textfield, e, eOpts) {
        var charCode = e.getCharCode(),
            me = this;

        if ((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)) {

            if (me.capslockTooltip === undefined) {
                me.capslockTooltip = Ext.create('capslocktooltip');
            }

            me.capslockTooltip.show();

        } else {

            if (me.capslockTooltip !== undefined) {
                me.capslockTooltip.hide();
            }
        }
    },

    onButtonSubmitClick: function (button, e, eOpts) {
        var me = this;

        if (me.lookupReference('loginform').isValid()) {
            me.doLogin();
        }
    },

    doLogin: function () {
        var me = this,
            form = me.lookupReference('loginform'),
            configs = ArqAdmin.config.Runtime.getConfig(),
            formData = form.getValues();

        me.getView().mask('Autenticando... Aguarde...');

        formData.client_id = configs.client_id;
        formData.client_secret = configs.client_secret;
        formData.grant_type = configs.grant_type;

        Ext.Ajax.request({
            url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/authenticate',
            method: 'POST',
            jsonData: formData,
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });
    },

    onLoginSuccess: function (response, opts) {
        var me = this,
            result = ArqAdmin.util.Util.decodeJSON(response.responseText),
            view = me.getView();

        if (result.access_token) {
            ArqAdmin.app.getController('OAuth').saveToken(result.access_token, result.refresh_token);
            ArqAdmin.user.Profile.setAppUser(function () {
                view.unmask();
                view.close();
                Ext.widget('app-main');
            });
            // task = new Ext.util.DelayedTask(function () {
            //     view.unmask();
            //     view.close();
            //     Ext.widget('app-main');
            // }).delay(1000);
        }
    },

    onLoginFailure: function (response, opts) {
        var me = this,
            result = ArqAdmin.util.Util.decodeJSON(response.responseText);

        ArqAdmin.user.Profile.resetUser();
        ArqAdmin.app.getController('OAuth').clearToken();
        me.getView().unmask();

        if (result.error_type == 'invalid_credentials' || result.error_type == 'access_denied') {
            ArqAdmin.util.Util.showErrorMsg(result.user_message);
        }
    },

    gotoAppMain: function (result) {
        var view = this.getView();
console.log('callback');

        view.unmask();
        view.close();
        Ext.widget('app-main');
    }
});