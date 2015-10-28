Ext.define('ArqAdmin.model.documental.Documento', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Documento',

    fields: [
        {
            name: 'fundo_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.classificacao.Fundo'
        },
        {
            name: 'fundo_nome',
            mapping: 'fundo.fundo_nome',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'subfundo_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.classificacao.Subfundo'
        },
        {
            name: 'subfundo_nome',
            mapping: 'subfundo.subfundo_nome',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'grupo_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.classificacao.Grupo'
        },
        {
            name: 'grupo_nome',
            mapping: 'grupo.grupo_nome',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'subgrupo_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.classificacao.Subgrupo'
        },
        {
            name: 'subgrupo_nome',
            mapping: 'subgrupo.subgrupo_nome',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'serie_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.classificacao.Serie'
        },
        {
            name: 'serie_nome',
            mapping: 'serie.serie_nome',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'subserie_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.classificacao.Subserie'
        },
        {
            name: 'subserie_nome',
            mapping: 'subserie.subserie_nome',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'dossie_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.classificacao.Dossie'
        },
        {
            name: 'dossie_nome',
            mapping: 'dossie.dossie_nome',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'especiedocumental_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.classificacao.Especiedocumental'
        },
        {
            name: 'especiedocumental_nome',
            mapping: 'especie_documental.especiedocumental_nome',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'notacao_preexistente',
            sortType: 'asUCString'
        },
        {
            name: 'notacao',
            sortType: 'asUCString'
        },
        {
            name: 'ano'
        },
        {
            name: 'data_doc'
        },
        {
            name: 'processo_num'
        },
        {
            name: 'quantidade_doc',
            type: 'int',
            allowNull: true
        },
        {
            name: 'conservacao_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.documental.Conservacao'
        },
        {
            name: 'conservacao_estado',
            mapping: 'conservacao.conservacao_estado',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'interessado',
            sortType: 'asUCString'
        },
        {
            name: 'assunto',
            sortType: 'asUCString'
        },
        {
            name: 'notas',
            sortType: 'asUCString'
        },
        {
            name: 'lc_sala_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.localizacao.LcSala'
        },
        {
            name: 'lc_sala_sala',
            mapping: 'lc_sala.sala',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'lc_movel_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.localizacao.LcMovel'
        },
        {
            name: 'lc_movel_movel',
            mapping: 'lc_movel.movel',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'lc_movel_num'
        },
        {
            name: 'lc_compartimento_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.localizacao.LcCompartimento'
        },
        {
            name: 'lc_compartimento_compartimento',
            mapping: 'lc_compartimento.compartimento',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'lc_compartimento_num'
        },
        {
            name: 'lc_acondicionamento_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.localizacao.LcAcondicionamento'
        },
        {
            name: 'lc_acondicionamento_acondicionamento',
            mapping: 'lc_acondicionamento.acondicionamento',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'lc_acondicionamento_num'
        },
        {
            name: 'lc_pagina'
        },
        {
            name: 'dt_uso_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.documental.DtUso'
        },
        {
            name: 'dt_uso_uso',
            mapping: 'dt_uso.uso',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'dt_endereco',
            sortType: 'asUCString'
        },
        {
            name: 'dt_end_complemento',
            sortType: 'asUCString'
        },
        {
            name: 'dt_endereco_atual',
            sortType: 'asUCString'
        },
        {
            name: 'dt_endatual_complemento',
            sortType: 'asUCString'
        },
        {
            name: 'dt_proprietario',
            sortType: 'asUCString'
        },
        {
            name: 'dt_autor',
            sortType: 'asUCString'
        },
        {
            name: 'dt_construtor',
            sortType: 'asUCString'
        },
        {
            name: 'dt_notas',
            sortType: 'asUCString'
        }
    ]
});