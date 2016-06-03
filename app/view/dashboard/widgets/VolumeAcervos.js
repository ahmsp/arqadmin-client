Ext.define('ArqAdmin.view.dashboard.widgets.VolumeAcervos', {
    extend: 'Ext.panel.Panel',

    xtype: 'widgets-volume-acervos',

    bodyCls: 'statistics-totals-body',
    width: 280,
    margin: '0 20px 0 0',
    title: 'REGISTROS CADASTRADOS',
    tpl: [
        '<div class="statistic-totals-header-total">Total de registros <span>{total:this.numberFormat}</span></div>',
        '<div class="statistic-totals-header">ACERVOS</div>',
        '<tpl for="acervos">',
        '<div class="statistic-totals-description">{description} <span>{ratio:this.numberFormat}</span></div>',
        '<div class="sparkline-totals">',
        '<div class="sparkline-totals-inner sparkline-totals-inner-{status}" style="width: {[(values.ratio / parent.total) * 100]}%;"></div>',
        '</div>',
        '</tpl>',
        '<div class="statistic-totals-header">FUNDOS</div>',
        '<tpl for="fundos">',
        '<div class="statistic-totals-description">{description} <span>{ratio:this.numberFormat}</span></div>',
        '<div class="sparkline-totals">',
        '<div class="sparkline-totals-inner sparkline-totals-inner-{status}" style="width: {[(values.ratio / parent.total) * 100]}%;"></div>',
        '</div>',
        '</tpl>',
        '<div class="statistic-totals-header">FUNDO PMSP</div>',
        '<tpl for="pmsp">',
        '<div class="statistic-totals-description">{description} <span>{ratio:this.numberFormat}</span></div>',
        '<div class="sparkline-totals">',
        '<div class="sparkline-totals-inner sparkline-totals-inner-{status}" style="width: {[(values.ratio / parent.total) * 100]}%;"></div>',
        '</div>',
        '</tpl>',
        {
            numberFormat: function (value) {
                Ext.util.Format.decimalSeparator = ",";
                return Ext.util.Format.number(value, '000,000');
            }
        }
    ],
    data: {
        total: 120117,
        acervos: [
            {
                status: 'darkblue',
                description: 'Textual/Cartográfico',
                ratio: 59111
            },
            {
                status: 'orange',
                description: 'TERMOS DE SEPULTAMENTO',
                ratio: 51938
            },
            {
                status: 'darkgreen',
                description: 'FOTOGRÁFICO',
                ratio: 9068
            }
        ],
        fundos: [
            {
                status: 'purple',
                description: 'Prefeitura Municipal <br>de São Paulo',
                ratio: 102634
            },
            {
                status: 'high',
                description: 'Comissão do IV Centenário <br>da Cidade de São Paulo',
                ratio: 7379
            },
            {
                status: 'red',
                description: 'Severo & Villares <br>(Desenhos Técnicos)',
                ratio: 679
            }
        ],
        pmsp: [
            {
                status: 'green',
                description: 'Serviço Funerário Municipal <br>(Termos de Sepultamento)',
                ratio: 51938
            },
            {
                status: 'yellow',
                description: 'Diretoria de Obras e Viação <br>(Obras Particulares)',
                ratio: 39427
            },
            {
                status: 'violet',
                description: 'Diretoria de Polícia e Higiene <br>(Alvarás e Licenças)',
                ratio: 7864
            }
        ]
    }
});