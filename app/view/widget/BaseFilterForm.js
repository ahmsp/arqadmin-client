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
                    text: 'Nova pesquisa',
                    tooltip: 'Limpa a pesquisa atual',
                    handler: 'setEmptySearch'
                },
                {
                    xtype: 'button',
                    flex: 1,
                    text: 'Pesquisar',
                    handler: 'onFilterFormSearchButtonClick',
                    reference: 'btnPesquisar'
                },
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('cancel2'),
                    tooltip: 'Limpar somente os campos de pesquisa',
                    handler: 'clearSearchForm'
                },
                // {
                //     xtype: 'tbseparator'
                // },
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('info'),
                    tooltip: 'Informações sobre a pesquisa',
                    handler: 'onInfoButtonClick'
                }
            ]
        }
    ],
    
    listeners: {
        beforerender: function (panel) {
            if (panel.up('viewport').getWidth() < 1350) {
                panel.setCollapsed(true);
            }
        }
    }
});