/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.require('ArqAdmin.ux.form.trigger.Clear');
Ext.require('ArqAdmin.overrides.grid.filters.filter.List');
Ext.require('ArqAdmin.overrides.view.View');
Ext.require('ArqAdmin.controller.OAuth');
Ext.require('ArqAdmin.util.OAuthMonitor');

Ext.define('ArqAdmin.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'ArqAdmin.config.Runtime',
        'ArqAdmin.user.Profile',
        'ArqAdmin.view.login.Login',
        'ArqAdmin.view.main.Main',
        'ArqAdmin.util.Glyphs'
    ],

    name: 'ArqAdmin',

    controllers: [
        'OAuth'
    ],

    glyphFontFamily: 'icomoon',

    defaultToken : 'painel',

    init: function () {
        var me = this;

        // AjaxEventHandler
        //Ext.util.Observable.observe(Ext.data.Connection);
        //Ext.data.Connection.on({
        //    beforerequest: me.onBeforeRequest,
        //    requestcomplete: me.onRequestComplete,
        //    requestexception: me.onRequestException
        //});

        Ext.Ajax.on({
            beforerequest: me.onBeforeRequest,
            requestcomplete: me.onRequestComplete,
            requestexception: me.onRequestException
        });

        // Start the mask on the body and get a reference to the mask
        me.splashscreen = Ext.getBody().mask('Inicializando...', 'splashscreen');

        // Add a new class to this mask as we want it to look different from the default.
        me.splashscreen.addCls('splashscreen');

        // Insert a new div before the loading icon where we can place our logo.
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

        me.localeOverrides();
    },

    launch: function () {
        var me = this,
            refreshToken = localStorage.getItem('refresh-token'),
            allowedAccess = false;

        if (refreshToken) {
            var oAuthController = ArqAdmin.app.getController('OAuth'),
                configs = ArqAdmin.config.Runtime.getConfig(),
                params = {};

            params.client_id = configs.client_id;
            params.client_secret = configs.client_secret;
            params.grant_type = 'refresh_token';
            params.refresh_token = refreshToken;
            params.checktoken = true;

            Ext.Ajax.request({
                url: configs.apiBaseUrl + '/authenticate',
                method: 'POST',
                jsonData: params,
                scope: me,
                success: function (response) {
                    var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
                    if (result.access_token) {
                        oAuthController.saveToken(result.access_token, result.refresh_token);
                        ArqAdmin.user.Profile.setAppUser();
                        allowedAccess = true;
                    }
                }
            });
        }

        var task = new Ext.util.DelayedTask(function () {
            //Fade out the body mask
            me.splashscreen.fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function (el, startTime, eOpts) {
                        Ext.widget(allowedAccess ? 'app-main' : 'login-dialog');
                    }
                }
            });
        });
        task.delay(3000);
    },

    onBeforeRequest: function (conn, options, eOpts) {
        var token = localStorage.getItem('access-token');
        options.useDefaultXhrHeader = false; //nao incluir X-Requested-With ???
        options.headers = {
            'Authorization': 'Bearer ' + token
        };
        //conn.setCors(true);
    },

    onRequestException: function (conn, response, options) {
        var error = ArqAdmin.util.Util.decodeJSON(response.responseText);

        // check if request is a refreshtoken of "launch" method
        if (options.jsonData && options.jsonData.checktoken) {
            return true;
        }

        if (options.url.split('/').pop() === 'authenticate') {

            //errors OAuth
            //status: 401 //{"error": "invalid_credentials","error_description": "The user credentials were incorrect."}
            //status: 400 //{"error":"invalid_request","error_description":"The refresh token is invalid."} ????
            //status: 401 //{"error":"access_denied", "The resource owner or authorization server denied the request."} // ver as mensagens

            ArqAdmin.user.Profile.resetUser();

            Ext.Msg.show({
                title: 'Problema de autorização!',
                message: 'Sessão expirada. A aplicação será reiniciada',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR,
                fn: function (btn) {
                    if (btn === 'ok') {
                        ArqAdmin.app.getController('OAuth').logout();
                    }
                }
            });
        } else {
            var errorDescription = ArqAdmin.util.Util.decodeJSON(error.error_description);

            if (Ext.isObject(errorDescription)) {
                var message = '';

                Ext.Object.each(errorDescription, function(key, value, myself) {
                    message = message + value + "<br>";
                });

                ArqAdmin.util.Util.showErrorMsg(message);
            } else {
                ArqAdmin.util.Util.showErrorMsg(errorDescription);
                // ArqAdmin.util.Util.showErrorMsg(error.user_message);
            }
        }
    },

    onRequestComplete: function (conn, response, options) {

        if (response.status === 200 && options.url.split('/').pop() === 'authenticate') {
            ArqAdmin.util.OAuthMonitor.start();

            console.log('NEW TOKEN - (onRequestComplete)' + Ext.Date.format(new Date(), 'H:i:s'));
        }
    },

    localeOverrides: function () {

        Ext.define("Ext.locale.pt_BR.grid.locking.Locale", {
            override: "Ext.grid.locking.Lockable",
            lockText: "Travar",
            unlockText: "Destravar"
        });

        Ext.define("Ext.locale.pt_BR.grid.filters.Filters", {
            override: "Ext.grid.filters.Filters",
            menuFilterText: "Filtros"
        });

        Ext.define("Ext.locale.pt_BR.grid.filters.filter.Boolean", {
            override: "Ext.grid.filters.filter.Boolean",
            yesText: "Sim",
            noText: "Não"
        });

        Ext.define("Ext.locale.pt_BR.grid.filters.filter.Date", {
            override: "Ext.grid.filters.filter.Date",
            // getFields: function() {
            //     return {
            //         lt: {text: 'Antes'},
            //         gt: {text: 'Depois'},
            //         eq: {text: 'Em'}
            //     };
            // }
            config: {
                fields: {
                    lt: {
                        text: 'Antes de'
                    },
                    gt: {
                        text: 'Depois de'
                    },
                    eq: {
                        text: 'Em'
                    }
                },
                // Defaults to Ext.Date.defaultFormat
                dateFormat: null
            }
        });

        Ext.define("Ext.locale.pt_BR.grid.filters.filter.List", {
            override: "Ext.grid.filters.filter.List",
            loadingText: "Carregando..."
        });

        Ext.define("Ext.locale.pt_BR.grid.filters.filter.Number", {
            override: "Ext.grid.filters.filter.Number",
            emptyText: "Digite um número..."
        });

        Ext.define("Ext.locale.pt_BR.grid.filters.filter.String", {
            override: "Ext.grid.filters.filter.String",
            emptyText: "Insira o termo para filtrar..."
        });

        Ext.define("Ext.locale.pt_BR.LoadMask", {
            override: "Ext.LoadMask",
            msg: "Carregando..."
        });

        Ext.define("Ext.locale.pt_BR.grid.RowEditor", {
            override: "Ext.grid.RowEditor",
            saveBtnText: 'Ok',
            cancelBtnText: 'Cancelar',
            errorsText: 'Erro',
            dirtyText: 'Sem registros para exibir'
        });
    }

});
