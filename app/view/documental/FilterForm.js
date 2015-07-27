Ext.define('ArqAdmin.view.documental.FilterForm', {
    extend: 'Ext.form.Panel',

    xtype: 'documental-filterform',

    requires: [
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.form.field.Checkbox',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'Ext.form.Label'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scrollable: true,
    bodyPadding: 10,
    title: 'Pesquisa no Acervo',
    defaults: {
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
                    action: 'clear',
                    flex: 1,
                    text: 'Limpar filtros',
                    handler: function(button) {
                        button.up('form').reset();
                    }
                },
                {
                    xtype: 'button',
                    action: 'filter',
                    flex: 1,
                    text: 'Pesquisar'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'checkboxfield',
            fieldLabel: 'Com imagem',
            name: 'com_imagem',
            checked: true,
            inputValue: '1'
        },
        {
            xtype: 'textfield',
            name: 'id',
            fieldLabel: 'Registro'
        },
        {
            xtype: 'combobox',
            //reference: 'acervoCombo',
            fieldLabel: 'Classificação (Atalho)',
            name: 'acervo_id',
            //emptyText: 'Selecione uma classificação...',
            displayField: 'acervo_nome',
            queryMode: 'local',
            store: 'Acervos',
            valueField: 'id',
            listeners: {
                //select: 'onAcervoComboSelect'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Assunto',
            name: 'assunto'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Endereço',
            name: 'endereco'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Interessado',
            name: 'interessado'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Autor / Construtor',
            name: 'autor_construtor'
        },
        {
            xtype: 'container',
            margin: '0 0 5',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                triggers: {
                    clear: {
                        type: 'clear',
                        clearOnEscape: true
                    }
                }
            },
            items: [
                {
                    xtype: 'label',
                    margin: '0 5 0 0',
                    padding: '4 0 0',
                    width: 100,
                    text: 'Ano (faixa):'
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    minWidth: 65,
                    fieldLabel: 'de',
                    hideLabel: true,
                    labelWidth: 16,
                    name: 'ano_ini'
                },
                {
                    xtype: 'label',
                    margins: '0 5',
                    padding: '4 2 0',
                    text: 'a'
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    minWidth: 65,
                    fieldLabel: 'a',
                    hideLabel: true,
                    labelWidth: 12,
                    name: 'ano_fim'
                }
            ]
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Data',
            name: 'data_doc'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nº do Processo',
            name: 'processo'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Cod. Imagem',
            name: 'imagem'
        }

    ]
});