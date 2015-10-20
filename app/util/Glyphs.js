Ext.define('ArqAdmin.util.Glyphs', {
    singleton: true,

    config: {
        webFont: 'icomoon',
        add: 'xe044',
        edit: 'xe60f',
        remove: 'xe045',
        save: 'xe046',
        cancel: 'xe047',

        dashboard: 'xf029',
        acervos: 'xe603',
        report: 'xf011',
        chart: 'xe60c',
        admin: 'xe605',
        user: 'xe60b',
        users: 'xe60e',
        exit: 'xe606',
        expand: 'xe600',
        contract: 'xe604',

        filter: 'xf0b0',
        table: 'xe602',
        list: 'xe601',
        gallery: 'xf00a'
    },

    constructor: function(config) {
        this.initConfig(config);
    },

    getGlyph : function(glyph) {
        var me = this,
            font = me.getWebFont();
        if (typeof me.config[glyph] === 'undefined') {
            return false;
        }
        return me.config[glyph] + '@' + font;
    }
});