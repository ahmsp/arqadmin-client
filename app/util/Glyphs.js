Ext.define('ArqAdmin.util.Glyphs', {
    singleton: true,

    config: {
        webFont: 'icomoon',
        add: 'xe044',
        edit: 'xe60f',
        remove: 'xe045',
        save: 'xe046',
        cancel: 'xe047',
        copy: 'xe915',

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
        expandVertical: 'xe90b',
        expandHorizontal: 'xe90c',
        adjust: 'xe902',
        zoomIn: 'xe907',
        zoomOut: 'xe908',
        undo: 'xe905',
        redo: 'xe906',
        star: 'xe90e',
        starOutline: 'xe90d',
        image2: 'xe90f',
        images2: 'xe910',
        download: 'xe912',
        reload: 'xe914',

        filter: 'xf0b0',
        table: 'xe602',
        list: 'xe601',
        gallery: 'xf00a',
        image: 'xe904',
        close: 'xe610',
        info: 'xe913',
        checklist: 'xf076'
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