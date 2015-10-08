Ext.define('ArqAdmin.controller.OAuth', {
    extend: 'Ext.app.Controller',

    init: function () {
        var me = this;

        this.refreshTokenTask = new Ext.util.DelayedTask(function () {
            me.doRefreshToken();
        });

        me.addRef([
            {
                ref: 'appMain',
                selector: 'app-main'
            }
        ]);
        this.callParent();
    },

    doRefreshToken: function () {
        var me = this,
            refreshToken = localStorage.getItem('refresh-token');

        if (refreshToken) {
            var configs = ArqAdmin.config.Runtime.getConfig(),
                params = {};

            params.client_id = configs.client_id;
            params.client_secret = configs.client_secret;
            params.grant_type = 'refresh_token';
            params.refresh_token = refreshToken;

            Ext.Ajax.request({
                url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/authenticate',
                method: 'POST',
                jsonData: params,
                scope: me,
                success: function (response) {
                    var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
                    if (result.access_token) {
                        me.saveToken(result.access_token, result.refresh_token);
                    }
                }
            });
        }
    },

    saveToken: function (accessToken, refreshToken) {
        localStorage.setItem('access-token', accessToken);
        localStorage.setItem('refresh-token', refreshToken);
    },

    clearToken: function () {
        localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');
    },

    logout: function () {
        var me = this;

        me.clearToken();
        me.getAppMain().destroy();
        window.location.reload();
    },

    refreshTokenTaskDelay: function () {
        this.refreshTokenTask.delay(ArqAdmin.config.Runtime.getRefreshTokenInterval());
    }
});