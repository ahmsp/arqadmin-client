Ext.define('ArqAdmin.model.fotografico.Fotografia', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Fotografia',

    fields: [
        {
            name: 'ft_fundo_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.fotografico.FtFundo'
        },
        {
            name: 'fundo',
            mapping: 'ft_fundo.fundo',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'ft_grupo_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.fotografico.FtGrupo'
        },
        {
            name: 'grupo',
            mapping: 'ft_grupo.grupo',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'ft_serie_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.fotografico.FtSerie'
        },
        {
            name: 'serie',
            mapping: 'ft_serie.serie',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'ft_tipologia_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.fotografico.FtTipologia'
        },
        {
            name: 'tipologia',
            mapping: 'ft_tipologia.tipologia',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'data_imagem',
            sortType: 'asUCString'
        },
        {
            name: 'autoria',
            sortType: 'asUCString'
        },
        {
            name: 'imagem_identificacao',
            sortType: 'asUCString'
        },
        {
            name: 'bairro',
            sortType: 'asUCString'
        },
        {
            name: 'assunto_geral',
            sortType: 'asUCString'
        },
        {
            name: 'titulo',
            sortType: 'asUCString'
        },
        {
            name: 'identificacao',
            sortType: 'asUCString'
        },
        {
            name: 'assunto_1',
            sortType: 'asUCString'
        },
        {
            name: 'assunto_2',
            sortType: 'asUCString'
        },
        {
            name: 'assunto_3',
            sortType: 'asUCString'
        },
        {
            name: 'registro',
            sortType: 'asUCString'
        },
        {
            name: 'ft_cromia_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.fotografico.FtCromia'
        },
        {
            name: 'cromia',
            mapping: 'ft_cromia.cromia',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'formato',
            sortType: 'asUCString'
        },
        {
            name: 'ft_categoria_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.fotografico.FtCategoria'
        },
        {
            name: 'categoria',
            mapping: 'ft_categoria.categoria',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'ft_campo_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.fotografico.FtCampo'
        },
        {
            name: 'campo',
            mapping: 'ft_campo.campo',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'tipo',
            sortType: 'asUCString'
        },
        {
            name: 'ft_ambiente_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.fotografico.FtAmbiente'
        },
        {
            name: 'ambiente',
            mapping: 'ft_ambiente.ambiente',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'enquadramento',
            sortType: 'asUCString'
        },
        {
            name: 'inscricao',
            sortType: 'asUCString'
        },
        {
            name: 'texto_inscricao',
            sortType: 'asUCString'
        },
        {
            name: 'localizacao',
            sortType: 'asUCString'
        },
        {
            name: 'conservacao',
            sortType: 'asUCString'
        },
        {
            name: 'procedencia',
            sortType: 'asUCString'
        },
        {
            name: 'origem',
            sortType: 'asUCString'
        },
        {
            name: 'revisao',
            sortType: 'asUCString'
        },
        {
            name: 'imagem_publica',
            sortType: 'asUCString'
        },
        {
            name: 'imagem_original',
            sortType: 'asUCString'
        }
    ]
});