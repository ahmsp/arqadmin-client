Ext.define('ArqAdmin.config.Runtime', {
    singleton: true,

    config: {
        apiUrl: 'http://arqadmin.dev'
        //apiUrl: 'http://localhost:8000'
    },

    constructor: function (config) {
        this.initConfig(config);
    }
});