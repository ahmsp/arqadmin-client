Ext.define('ArqAdmin.config.Runtime', {
    singleton: true,

    config: {
        baseUrl: 'http://arqadmin.dev',
        //baseUrl: 'http://localhost:8000'

        client_id: 'LNCMz1G9iV6vpMH8b4BIlt33FmUmycEcn6iM1lZm',
        client_secret: 'LV3OIv9pzSVqMLGkxgGVx9meKK9qIe5r8kGbN7V1',
        grant_type: 'password'
    },

    constructor: function (config) {
        this.initConfig(config);
    }
});