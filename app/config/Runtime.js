Ext.define('ArqAdmin.config.Runtime', {
    singleton: true,

    config: {
        apiBaseUrl: 'http://arqadmin.dev',
        //apiBaseUrl: 'http://localhost:8000'

        imagesDocumental: 'http://arqadmin.dev/imagem/documental/',
        downloadDocumental: 'http://arqadmin.dev/api/imagem/documental/',
        uploadDocumental: 'http://arqadmin.dev/api/upload/imagem/documental/',

        client_id: 'LNCMz1G9iV6vpMH8b4BIlt33FmUmycEcn6iM1lZm',
        client_secret: 'LV3OIv9pzSVqMLGkxgGVx9meKK9qIe5r8kGbN7V1',
        grant_type: 'password',

        refreshTokenInterval: 1000 * 60 * 55 // 55 minutes
    },

    constructor: function (config) {
        this.initConfig(config);
    }
});