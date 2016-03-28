Ext.define('ArqAdmin.view.staticData.classificacao.AcervosForm', {
    extend: 'Ext.form.Panel',
    xtype: 'acervos-form',

    reference: 'acervosForm',
    scrollable: true,
    cls: 'custom-form-panel',
    bodyPadding: 10,
    header: false,
    title: 'Classificação',
    trackResetOnLoad: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bind: {
        disabled: '{!acervosGrid.selection}'
    },
    defaults: {
        queryMode: 'local',
        triggers: {
            clear: {
                type: 'clear',
                clearOnEscape: true
            }
        }
    },
    fieldDefaults: {
        labelWidth: 100,
        forceSelection: true,
        typeAhead: true
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'toolbar-light',
            defaults: {
                tooltipType: 'title'
            },
            //itemId: 'topToolbar',
            items: [
                {
                    xtype: 'label',
                    style: {
                        color: '#fff',
                        'font-size': '14px',
                        'line-height': '16px',
                        'font-weight': 'bold'
                    },
                    text: 'Classificação'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    itemId: 'save',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('save'),
                    text: 'Salvar',
                    reference: 'btnSave',
                    tooltip: 'Salvar classificação para o atalho selecionado'
                },
                {
                    xtype: 'button',
                    itemId: 'cancel',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('cancel'),
                    text: 'Cancelar',
                    tooltip: 'Cancelar edição de classificação'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'hiddenfield',
            name: 'id',
            value: null
        },
        {
            xtype: 'combobox',
            reference: 'fundoCombo',
            fieldLabel: 'Fundo',
            name: 'fundo_id',
            displayField: 'fundo_nome',
            store: 'staticData.classificacao.Fundos',
            valueField: 'id'
        },
        {
            xtype: 'combobox',
            reference: 'subfundoCombo',
            disabled: true,
            fieldLabel: 'Subfundo',
            name: 'subfundo_id',
            displayField: 'subfundo_nome',
            store: 'staticData.classificacao.Subfundos',
            valueField: 'id'
        },
        {
            xtype: 'combobox',
            reference: 'grupoCombo',
            disabled: true,
            fieldLabel: 'Grupo',
            name: 'grupo_id',
            displayField: 'grupo_nome',
            store: 'staticData.classificacao.Grupos',
            valueField: 'id'
        },
        {
            xtype: 'combobox',
            reference: 'subgrupoCombo',
            disabled: true,
            fieldLabel: 'Subgrupo',
            name: 'subgrupo_id',
            displayField: 'subgrupo_nome',
            store: 'staticData.classificacao.Subgrupos',
            valueField: 'id'
        },
        {
            xtype: 'combobox',
            reference: 'serieCombo',
            disabled: true,
            fieldLabel: 'Série',
            name: 'serie_id',
            displayField: 'serie_nome',
            store: 'staticData.classificacao.Series',
            valueField: 'id'
        },
        {
            xtype: 'combobox',
            reference: 'subserieCombo',
            disabled: true,
            fieldLabel: 'Subsérie',
            name: 'subserie_id',
            displayField: 'subserie_nome',
            store: 'staticData.classificacao.Subseries',
            valueField: 'id'
        },
        {
            xtype: 'combobox',
            reference: 'dossieCombo',
            disabled: true,
            fieldLabel: 'Dossiê',
            name: 'dossie_id',
            displayField: 'dossie_nome',
            store: 'staticData.classificacao.Dossies',
            valueField: 'id'
        }
    ]
});
