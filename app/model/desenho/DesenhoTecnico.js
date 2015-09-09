Ext.define('ArqAdmin.model.desenho.DesenhoTecnico', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'DesenhoTecnico',

    fields: [
        {
            name: 'documento_id',
            reference: 'Documento'
        },
        {
            name: 'notacao'
        },
        {
            name: 'prancha_num'
        },
        {
            name: 'original_num'
        },
        {
            name: 'desenho_data'
        },
        {
            name: 'descricao'
        },
        {
            name: 'desenhista'
        },
        {
            name: 'original'
        },
        {
            name: 'copia'
        },
        {
            name: 'dt_tipo_id',
            reference: 'DtTipo'
        },
        {
            name: 'dimensao'
        },
        {
            name: 'dt_suporte_id',
            reference: 'DtSuporte'
        },
        {
            name: 'dt_escala_id',
            reference: 'DtEscala'
        },
        {
            name: 'dt_tecnica_id',
            reference: 'DtTecnica'
        },
        {
            name: 'notas'
        },
        {
            name: 'dt_conservacao_id',
            reference: 'DtConservacao'
        },
        {
            name: 'arquivo_nome'
        }
    ]
});


