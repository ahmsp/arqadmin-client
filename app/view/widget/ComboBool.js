Ext.define('ArqAdmin.view.widget.ComboBool', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.combo-bool',

    // name: 'lo_interessado',
    editable: false,
    cls: 'combo-bool',
    tabIndex: -1,
    margin: '0 0 0 5',
    ui: 'combo-plain',
    width: 25,
    bind: {
        store: '{logicalOperators}'
    },
    valueField: 'id',
    displayField: 'symbol',
    value: 'and',
    hideTrigger: true,
    listConfig: {
        minWidth: 200,
        itemTpl: [
            // set font in ui combo-plain
            '<div><span style="font-family: icomoon">{symbol}</span> &nbsp;&nbsp;{description}</div>'
        ]
    }
});