Ext.define('ArqAdmin.view.widget.InfoDetailPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'info-panel',

    // reference: 'infoDetailPanel',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'toolbar-light',
            hidden: true,
            bind: {
                hidden: '{!hasRole}'
            },
            items: [
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('add'),
                    text: 'Cadastrar novo item',
                    listeners: {
                        click: 'onAdd'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'container',
                    html: [
                        '<p>Selecione um registro na listagem para exibir os detalhes.<br>',
                        'Se preferir, você pode recolher ou expandir este painel<br>',
                        'clicando na seta do lado direito do título do painel.</p>'
                    ],
                    padding: '25px 35px',
                    style: {
                        'text-align': 'center'
                    }
                }
            ]
        }
    ]
});