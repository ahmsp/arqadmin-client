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
            sortType: 'asUCString',
            allowNull: true

        },
        {
            name: 'autoria',
            sortType: 'asUCString',
            allowNull: true

        },
        {
            name: 'imagem_identificacao',
            sortType: 'asUCString',
            allowNull: true

        },
        {
            name: 'bairro',
            sortType: 'asUCString',
            allowNull: true

        },
        {
            name: 'assunto_geral',
            sortType: 'asUCString',
            allowNull: true

        },
        {
            name: 'titulo',
            sortType: 'asUCString',
            allowNull: true

        },
        {
            name: 'identificacao',
            sortType: 'asUCString',
            allowNull: true

        },
        {
            name: 'assunto_1',
            sortType: 'asUCString',
            allowNull: true

        },
        {
            name: 'assunto_2',
            sortType: 'asUCString',
            allowNull: true

        },
        {
            name: 'assunto_3',
            sortType: 'asUCString',
            allowNull: true

        },
        {
            name: 'registro',
            sortType: 'asUCString',
            allowNull: true

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
            sortType: 'asUCString',
            allowNull: true
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
            sortType: 'asUCString',
            allowNull: true
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
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'texto_inscricao',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'localizacao',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'conservacao',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'procedencia',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'origem',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'revisao',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'imagem_publica',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'imagem_original',
            sortType: 'asUCString',
            allowNull: true
        }
    ]
});