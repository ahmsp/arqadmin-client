Ext.define('ArqAdmin.view.fotografico.image.ImageViewerWindow', {
    extend: 'Ext.window.Window',
    xtype: 'fotografico-imageviewer-window',

    requires: [
        'ArqAdmin.view.fotografico.image.DownloadImageWindow',
        'ArqAdmin.view.fotografico.image.ImageViewerController'
    ],

    controller: 'fotografico-imageviewer',

    viewModel: {
        data: {
            currentImage: {},
            role: 'ROLE_FOTOGRAFICO'
        },
        formulas: {
            hasRole: function (get) {
                var role = get('role') || '';
                return  ArqAdmin.user.Profile.hasRole(role);
            }
        }
    },

    height: 500,
    width: 500,
    border: false,
    glyph: ArqAdmin.util.Glyphs.getGlyph('image'),
    layout: 'border',
    bodyPadding: 10,
    title: 'Visualização dae imagem',
    maximized: true,

    modal: true,
    closable: true,

    style: {
        border: 'none'
    },

    items: [
        {
            xtype: 'imageviewer-img',
            region: 'center'
        }
    ]

});