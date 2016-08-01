Ext.define('ArqAdmin.view.widget.BaseFilterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'base-filterform',

    reference: 'filterForm',

    requires: [
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.form.field.Checkbox',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'Ext.form.Label',
        'ArqAdmin.view.widget.ComboBool'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scrollable: true,
    bodyPadding: 10,
    title: 'Pesquisa Detalhada',
    formBind: true,
    defaults: {
        // labelWidth: 110,
        margin: '5 0',
        triggers: {
            clear: {
                type: 'clear',
                clearOnEscape: true
            }
        }
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'toolbar-light',
            items: [
                {
                    xtype: 'button',
                    flex: 1,
                    text: 'Limpar formulário',
                    handler: 'onFilterFormButtonClearClick'
                },
                {
                    xtype: 'button',
                    flex: 1,
                    text: 'Pesquisar',
                    handler: 'onFilterFormButtonFilterClick',
                    reference: 'btnPesquisar'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('info'),
                    tooltip: 'Informações sobre a pesquisa',
                    handler: 'onInfoButtonClick'
                }
            ]
        }
    ]
});