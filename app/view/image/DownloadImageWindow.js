Ext.define('ArqAdmin.view.image.DownloadImageWindow', {
    extend: 'Ext.window.Window',
    xtype: 'download-window',

    requires: [],

    //viewModel: {
    //    data: {
    //        title: '',
    //        currentImage: ''
    //    }
    //},

    height: 500,
    width: 500,
    glyph: ArqAdmin.util.Glyphs.getGlyph('download'),
    bodyPadding: 10,
    title: 'Download de imagens',
    draggable: false,
    autoScroll: true,
    modal: true,
    closable: true,

    bind: {
        //title: '{title}',
        //glyph: '{glyph}'
    },

    items: [
        {
            xtype: 'form',
            //title: 'My Form',
            //layout: 'anchor',

            items: [
                {
                    xtype: 'fieldset',
                    flex: 1,
                    title: 'tamanho das imagens',
                    defaultType: 'radio',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'radiogroup',
                            //fieldLabel: 'Single Column',
                            columns: 1,
                            items: [
                                {boxLabel: 'Padrão: 1500px ou 10cm (maior lado); 72dpi; formato: jpg', name: 'size', inputValue: 1},
                                {boxLabel: 'Padrão: 3500px ou 30cm (maior lado); 300dpi; formato: jpg', name: 'size', inputValue: 2, checked: true},
                                {boxLabel: 'Item 3', name: 'size', inputValue: 3}
                            ]
                        }
                    ]
                }
            ]
        }
        //{
        //    xtype: 'gridpanel',
        //    height: 250,
        //    width: 400,
        //    title: 'My Grid Panel',
        //    columns: [
        //        {
        //            xtype: 'gridcolumn',
        //            dataIndex: 'string',
        //            text: 'String'
        //        },
        //        {
        //            xtype: 'numbercolumn',
        //            dataIndex: 'number',
        //            text: 'Number'
        //        },
        //        {
        //            xtype: 'datecolumn',
        //            dataIndex: 'date',
        //            text: 'Date'
        //        },
        //        {
        //            xtype: 'booleancolumn',
        //            dataIndex: 'bool',
        //            text: 'Boolean'
        //        }
        //    ]
        //}
    ]
});