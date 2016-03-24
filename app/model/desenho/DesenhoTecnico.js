Ext.define('ArqAdmin.model.desenho.DesenhoTecnico', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'DesenhoTecnico',

    fields: [
        {
            name: 'documento_id',
            type: 'int',
            allowNull: true,
            reference: 'documental.Documento'
        },
        {
            name: 'acervo_tipo'
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
            name: 'original',
            type: 'boolean'
        },
        {
            name: 'copia',
            type: 'boolean'
        },
        {
            name: 'dt_tipo_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.desenhoTecnico.DtTipo'
        },
        {
            name: 'dt_tipo_tipo',
            mapping: 'dt_tipo.tipo',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'dimensao'
        },
        {
            name: 'dt_suporte_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.desenhoTecnico.DtSuporte'
        },
        {
            name: 'dt_suporte_suporte',
            mapping: 'dt_suporte.suporte',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'dt_escala_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.desenhoTecnico.DtEscala'
        },
        {
            name: 'dt_escala_escala',
            mapping: 'dt_escala.escala',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'dt_tecnica_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.desenhoTecnico.DtTecnica'
        },
        {
            name: 'dt_tecnica_tecnica',
            mapping: 'dt_tecnica.tecnica',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'notas'
        },
        {
            name: 'dt_conservacao_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.desenhoTecnico.DtConservacao'
        },
        {
            name: 'dt_conservacao_estado',
            mapping: 'dt_conservacao.estado',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'arquivo_nome'
        },
        {
            name: 'arquivo_original'
        }
    ]
});


