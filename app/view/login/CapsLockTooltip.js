Ext.define('ArqAdmin.view.login.CapsLockTooltip', {
    extend: 'Ext.tip.QuickTip',
    alias: 'capslocktooltip',

    target: 'fieldPassword',
    anchor: 'top',
    anchorOffset: '0',
    dismissDelay: '0',
    autoHide: false,
    title: '<div class="fa fa-exclamation-triangle">Caps Lock</div>',
    html: '<div>A tecla Caps Lock (Maiúsculas) está acionada.</div>'
});