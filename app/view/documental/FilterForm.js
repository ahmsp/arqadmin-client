Ext.define('ArqAdmin.view.documental.FilterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'documental-filterform',

    reference: 'filterForm',

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
    formBind: true,
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
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'combobox',
            submitValue: false,
            reference: 'filterAcervoCombo',
            fieldLabel: 'Classificação (Sugestões)',
            name: 'acervo_id',
            //emptyText: 'Selecione uma classificação...',
            displayField: 'acervo_nome',
            queryMode: 'local',
            store: 'staticData.classificacao.Acervos',
            valueField: 'id',
            listeners: {
                select: 'onAcervoComboSelect'
            }
        },
        {
            xtype: 'fieldset',
            reference: 'filterClassificFieldset',
            border: '1 0 0 0',
            itemId: 'filterClassificFieldset',
            margin: '10 0 20',
            padding: '10 0 0',
            defaults: {
                queryMode: 'local',
                triggers: {
                    clear: {
                        type: 'clear',
                        clearOnEscape: true
                    }
                }
            },
            referenceHolder: true,
            collapsible: true,
            title: 'Classificação',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'combobox',
                    reference: 'fundoCombo',
                    fieldLabel: 'Fundo',
                    name: 'fundo_id',
                    displayField: 'fundo_nome',
                    store: 'staticData.classificacao.Fundos',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'subfundoCombo',
                    disabled: true,
                    fieldLabel: 'Subfundo',
                    name: 'subfundo_id',
                    displayField: 'subfundo_nome',
                    store: 'staticData.classificacao.Subfundos',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'grupoCombo',
                    disabled: true,
                    fieldLabel: 'Grupo',
                    name: 'grupo_id',
                    displayField: 'grupo_nome',
                    store: 'staticData.classificacao.Grupos',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'subgrupoCombo',
                    disabled: true,
                    fieldLabel: 'Subgrupo',
                    name: 'subgrupo_id',
                    displayField: 'subgrupo_nome',
                    store: 'staticData.classificacao.Subgrupos',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'serieCombo',
                    disabled: true,
                    fieldLabel: 'Série',
                    name: 'serie_id',
                    displayField: 'serie_nome',
                    store: 'staticData.classificacao.Series',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'subserieCombo',
                    disabled: true,
                    fieldLabel: 'Subsérie',
                    name: 'subserie_id',
                    displayField: 'subserie_nome',
                    store: 'staticData.classificacao.Subseries',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'dossieCombo',
                    disabled: true,
                    fieldLabel: 'Dossiê',
                    name: 'dossie_id',
                    displayField: 'dossie_nome',
                    store: 'staticData.classificacao.Dossies',
                    valueField: 'id',
                    operator: 'eq'
                }
            ]
        },
        {
            xtype: 'checkboxfield',
            fieldLabel: 'Com imagem',
            name: 'com_imagem',
            checked: true,
            inputValue: '1',
            operator: '='
        },
        {
            xtype: 'textfield',
            name: 'id',
            fieldLabel: 'Registro',
            operator: 'eq'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Assunto',
            name: 'assunto',
            operator: 'like'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Interessado',
            name: 'interessado',
            operator: 'like'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Endereço',
            name: 'dt_endereco',
            operator: 'like'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Autor',
            name: 'dt_autor',
            operator: 'like'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Construtor',
            name: 'dt_construtor',
            operator: 'like'
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
                    name: 'ano_ini',
                    operator: 'gte'
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
                    name: 'ano_fim',
                    operator: 'lte'
                }
            ]
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Data',
            name: 'data_doc',
            operator: 'like'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nº do Processo',
            name: 'processo',
            operator: 'like'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Cod. Imagem',
            name: 'cod_imagem',
            operator: 'like'
        }
    ]
});