Ext.define('ArqAdmin.view.dashboard.widgets.VolumeAcervos', {
    extend: 'Ext.panel.Panel',

    xtype: 'widgets-volume-acervos',

    reference: 'VolumeAcervos',
    bodyCls: 'statistics-totals-body',
    width: 280,
    margin: '0 20px 0 0',
    title: 'REGISTROS CADASTRADOS',
    tpl: [
        '<tpl>',
        '<div class="statistic-totals-header-total">Total de registros <span>{total:this.numberFormat}</span></div>',
        '<div class="statistic-totals-header">ACERVOS</div>',

        '<div class="statistic-totals-wrap"><div class="statistic-totals-description">TEXTUAL E CARTOGRÁFICO</div><div class="statistic-totals-total">{documental:this.numberFormat}</div></div>',
        '<div class="sparkline-totals"><div class="sparkline-totals-inner sparkline-totals-inner-green" style="width: {[(values.documental / values.total) * 100]}%;"></div></div>',

        '<div class="statistic-totals-wrap"><div class="statistic-totals-description">TERMOS DE SEPULTAMENTO</div><div class="statistic-totals-total">{sepultamento:this.numberFormat}</div></div>',
        '<div class="sparkline-totals"><div class="sparkline-totals-inner sparkline-totals-inner-yellowpastel" style="width: {[(values.sepultamento / values.total) * 100]}%;"></div></div>',

        '<div class="statistic-totals-wrap"><div class="statistic-totals-description">FOTOGRÁFICO</div><div class="statistic-totals-total">{fotografico:this.numberFormat}</div></div>',
        '<div class="sparkline-totals"><div class="sparkline-totals-inner sparkline-totals-inner-violet" style="width: {[(values.fotografico / values.total) * 100]}%;"></div></div>',

        '<div class="statistic-totals-header">FUNDOS</div>',
        '<tpl for="fundos">',
        '<div class="statistic-totals-wrap"><div class="statistic-totals-description">{item}</div><div class="statistic-totals-total">{total:this.numberFormat}</div></div>',
        '<div class="sparkline-totals"><div class="sparkline-totals-inner sparkline-totals-inner-arsenic" style="width: {[(values.total / parent.total) * 100]}%;"></div></div>',
        '</tpl>',

        '<div class="statistic-totals-header">SUB-FUNDOS PMSP</div>',
        '<tpl for="subfundos">',
        '<div class="statistic-totals-wrap"><div class="statistic-totals-description">{item}</div><div class="statistic-totals-total">{total:this.numberFormat}</div></div>',
        '<div class="sparkline-totals"><div class="sparkline-totals-inner sparkline-totals-inner-beige" style="width: {[(values.total / parent.total) * 100]}%;"></div></div>',
        '</tpl>',

        '<div class="statistic-totals-header">IMAGENS DIGITALIZADAS</div>',
        '<div class="statistic-totals-wrap"><div class="statistic-totals-description">CARTOGRÁFICO E FOTOGRÁFICO</div><div class="statistic-totals-total">{images_total:this.numberFormat}</div></div>',
        '<div class="sparkline-totals"><div class="sparkline-totals-inner sparkline-totals-inner-darkgray" style="width: {[(values.images_total / values.total) * 100]}%;"></div></div>',
        {
            numberFormat: function (value) {
                Ext.util.Format.decimalSeparator = ",";
                return Ext.util.Format.number(value, '000,000');
            }
        }
    ],
    // data: '',
    listeners: {
        render: function (panel, eOpts) {
            panel.mask('Carregando indicadores...', 'mask-plain');

            Ext.Ajax.request({
                url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/estatisticas/totais',
                method: 'GET',
                scope: this,
                success: function (response, opts) {
                    var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
                    panel.unmask();
                    panel.setData(result);

                    var acervosTotais = {
                        documental: result.documental,
                        fotografico: result.fotografico,
                        sepultamento: result.sepultamento
                    };

                    panel.up('module-dashboard').getViewModel().set('acervosTotais', acervosTotais);
                }
            });
        }
    }
});