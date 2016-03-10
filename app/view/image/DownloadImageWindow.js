Ext.define('ArqAdmin.view.image.DownloadImageWindow', {
    extend: 'Ext.window.Window',
    xtype: 'download-window',

    requires: [
        'ArqAdmin.view.image.ImageViewerController'
    ],
    controller: 'imageviewer',

    //viewModel: {
    //    data: {
    //        title: '',
    //        currentImage: ''
    //    }
    //},

    height: 350,
    width: 500,
    layout: 'border',
    glyph: ArqAdmin.util.Glyphs.getGlyph('download'),
    title: 'Download da imagem',
    draggable: false,
    autoScroll: true,
    modal: true,
    closable: true,
    bodyStyle: {
        background: '#ececec'
    },

    items: [
        {
            xtype: 'form',
            reference: 'downloadImageForm',
            //title: 'Download',
            layout: 'anchor',
            region: 'center',
            bodyPadding: '10 15 0',
            //margin: '10 20 20',

            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'toolbar-light',
                    items: [
                        {xtype: 'tbfill'},
                        {
                            xtype: 'button',
                            text: 'Salvar imagem',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('download'),
                            handler: 'downloadImage'
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('cancel'),
                            text: 'Cancelar',
                            handler: function (button) {
                                button.up('window').close();
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'id',
                    value: ''
                },
                {
                    xtype: 'displayfield',
                    //fieldLabel: 'Imagem',
                    //labelAlign: 'top',
                    name: 'descricao',
                    value: '',
                    fieldStyle: {
                        'font-size': '18px  !important',
                        'line-height': '130%',
                        'font-weight': 'bold'
                    },
                    padding: 0
                },
                {
                    xtype: 'fieldset',
                    flex: 1,
                    title: 'Tamanho da imagem',
                    defaultType: 'radio',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    margin: '15 0 10',
                    items: [
                        {
                            xtype: 'radiogroup',
                            columns: 1,
                            items: [
                                {
                                    boxLabel: 'Média: 1800px ou 15cm (maior lado); 300dpi; formato: jpg',
                                    name: 'img_size',
                                    inputValue: 'medium'
                                },
                                {
                                    boxLabel: 'Grande (padrão): 3600px ou 30cm (maior lado); 300dpi; formato: jpg',
                                    name: 'img_size',
                                    inputValue: 'standard',
                                    checked: true
                                },
                                {
                                    boxLabel: 'Grande: 3600px ou 30cm (maior lado); 300dpi; formato: tif',
                                    name: 'img_size',
                                    inputValue: 'large'
                                },
                                {
                                    boxLabel: 'Original*: Tamanho original da imagem digitalizada.',
                                    name: 'img_size',
                                    inputValue: 'original'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'component',
                    html: [
                        'Obs.: Na opção da imagem original, ',
                        'dependendo do formato, pode ser necessário programa ',
                        'especifico para visualização ou edição da imagem.'
                    ]
                }
            ]
        }
    ]
});