Ext.define('ArqAdmin.user.Profile', {
    singleton: true,

    config: {
        name: '(Indefinido)',
        shortName: '(Indefinido)',
        username: '',
        roles: []
    },

    setAppUser: function (callback) {
        var me = this;

        Ext.Ajax.request({
            url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/user/profile',
            method: 'POST',
            scope: me,
            success: function (response, opts) {
                var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
                this.setUserProfile(result);

                if (typeof callback !== 'undefined') {
                    callback(result);
                }
            },
            failure: function (response, opts) {
                this.setUserProfile('');
            }
        });
    },

    setUserProfile: function (userProfile) {
        var me = this,
            name = '(Indefinido)',
            shortName = '(Indefinido)',
            username = '',
            roles = [];

        if (!Ext.isEmpty(userProfile)) {
            name = userProfile.name || name;
            shortName =  name.replace(/(\w+\s\w+).+/, "$1");
            username = userProfile.username || '';
            roles = userProfile.roles || [];
        }

        me.setName(name);
        me.setShortName(shortName);
        me.setUsername(username);
        me.setRoles(roles);
    },

    getUserProfile: function () {
        var me = this;
        return {
            name: me.getName(),
            shortName: me.getShortName(),
            username: me.getUsername(),
            roles: me.getRoles()
        };
    },

    resetUser: function () {
        this.setUserProfile('');
    },

    hasRole : function(role) {
        return Ext.Array.contains(this.getRoles(), role);
    },

    constructor: function (config) {
        this.initConfig(config);
    }
});