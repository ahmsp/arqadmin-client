Ext.define('ArqAdmin.view.documental.image.ImageViewerWindow', {
    extend: 'Ext.window.Window',
    xtype: 'imageviewer-window',

    requires: [
        'ArqAdmin.view.documental.image.ImageViewerModel',
        'ArqAdmin.view.documental.image.ImageViewerDataview',
        'ArqAdmin.view.documental.image.ImageViewerController',
        'ArqAdmin.view.documental.image.ImageViewerDetail',
        'ArqAdmin.view.documental.image.ImageViewerForm',
        'ArqAdmin.view.documental.image.DownloadImageWindow',
        'ArqAdmin.view.documental.ThumbsDataview'
    ],

    controller: 'imageviewer',
    viewModel: {
        type: 'imageviewer'
    },

    height: 500,
    width: 500,
    border: false,
    glyph: ArqAdmin.util.Glyphs.getGlyph('image'),
    //cls: 'x-custom-imgprev-window',
    layout: 'border',
    bodyPadding: 10,
    title: 'Visualização de imagens',
    maximized: true,

    autoScroll: true,
    modal: true,
    closable: true,

    //bodyStyle: {
    //    background: '#ececec'
    //},

    style: {
        border: 'none'
    },

    bind: {
        //title: '{title}',
        //glyph: '{glyph}'
    },

    items: [
        {
            xtype: 'imageviewer-img',
            region: 'center'
        },
        {
            xtype: 'imageviewer-dataview',
            region: 'south'
        },
        {
            xtype: 'panel',
            region: 'east',
            split: true,
            reference: 'imageViewerDisplayPanel',
            width: 450,
            layout: 'card',
            bodyBorder: true,
            collapsible: true,
            title: {
                bind: '{displayPanelTitle}'
            },
            defaults: {
                listeners: {
                    activate: 'onDisplayPanelChildActivate'
                }
            },
            items: [
                {
                    xtype: 'panel',
                    reference: 'ImageViewerMessageContainer',
                    items: [
                        {
                            xtype: 'container',
                            items: [
                                {
                                    xtype: 'container',
                                    html: [
                                        '<p>Selecione uma imagem para exibir os detalhes. ',
                                        'Para editar os dados clique no botão "Editar" com a imagem selecionada.<br>',
                                        'Para adicionar uma imagem clique no botão "Nova imagem".</p>'
                                    ],
                                    padding: '25px 35px',
                                    style: {
                                        'text-align': 'center'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'imageviewer-detail'
                },
                {
                    xtype: 'imageviewer-form'
                }
            ]
        }
    ]

});