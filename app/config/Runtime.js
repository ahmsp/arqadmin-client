Ext.define('ArqAdmin.config.Runtime', {
    singleton: true,

    config: {
        apiBaseUrl: Ext.manifest.apiBaseUrl,

        imagesDocumental: Ext.manifest.apiBaseUrl + '/imagem/documental/',
        downloadDocumental: Ext.manifest.apiBaseUrl + '/api/imagem/documental/',
        uploadDocumental: Ext.manifest.apiBaseUrl + '/api/upload/imagem/documental/',

        imagesFotografico: Ext.manifest.apiBaseUrl + '/imagem/fotografico/',
        downloadFotografico: Ext.manifest.apiBaseUrl + '/api/imagem/fotografico/',
        uploadFotografico: Ext.manifest.apiBaseUrl + '/api/imagem/upload/fotografico/',
        removeImageFotografico: Ext.manifest.apiBaseUrl + '/api/imagem/remove/fotografico/',

        imagesSepultamento: Ext.manifest.apiBaseUrl + '/imagem/sepultamento/',
        downloadSepultamento: Ext.manifest.apiBaseUrl + '/api/imagem/sepultamento/',
        uploadSepultamento: Ext.manifest.apiBaseUrl + '/api/imagem/upload/sepultamento/',

        client_id: 'LNCMz1G9iV6vpMH8b4BIlt33FmUmycEcn6iM1lZm',
        client_secret: 'LV3OIv9pzSVqMLGkxgGVx9meKK9qIe5r8kGbN7V1',
        grant_type: 'password',

        refreshTokenInterval: 1000 * 60 * 55 // 55 minutes
    },

    constructor: function (config) {
        this.initConfig(config);
    }
});