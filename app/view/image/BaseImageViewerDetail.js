Ext.define('ArqAdmin.view.image.BaseImageViewerDetail', {
    extend: 'Ext.panel.Panel',
    //extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.field.Display'
    ],

    split: true,
    reference: 'displayPanel',
    width: 450,
    //layout: 'card',
    bodyBorder: true,
    collapsible: true,
    splitterResize: false,

    autoScroll: true,
    title: 'Detalhes da imagem',
    cls: 'display-panel',
    defaults: {
        bodyPadding: '6 0 0',
        margin: '4 0 0',
        labelWidth: 150
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: '4 8 0'

});
