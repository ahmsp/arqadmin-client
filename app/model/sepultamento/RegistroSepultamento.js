Ext.define('ArqAdmin.model.sepultamento.RegistroSepultamento', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'RegistroSepultamento',

    fields: [
        {
            name: 'fundo_id',
            type: 'int',
            allowNull: true,
            defaultValue: 3,
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
            defaultValue: 20,
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
            defaultValue: 85,
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
            defaultValue: 28,
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
            defaultValue: 248,
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
            defaultValue: 5,
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
            name: 'ano',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'notas',
            sortType: 'asUCString',
            allowNull: true
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
            name: 'lc_movel_num',
            allowNull: true
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
            name: 'lc_compartimento_num',
            allowNull: true
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
            name: 'lc_acondicionamento_num',
            allowNull: true
        },
        {
            name: 'lc_pagina',
            allowNull: true
        },
        {
            name: 'sfm_cartorio_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.sepultamento.SfmCartorio'
        },
        {
            name: 'sfm_cartorio_cartorio',
            mapping: 'sfm_cartorio.cartorio',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'sfm_cemiterio_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.sepultamento.SfmCemiterio'
        },
        {
            name: 'sfm_cemiterio_cemiterio',
            mapping: 'sfm_cemiterio.cemiterio',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'sfm_nome',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'sfm_nacionalidade_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.sepultamento.SfmNacionalidade'
        },
        {
            name: 'sfm_nacionalidade_nacionalidade',
            mapping: 'sfm_nacionalidade.nacionalidade',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'sfm_naturalidade_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.sepultamento.SfmNaturalidade'
        },
        {
            name: 'sfm_naturalidade_naturalidade',
            mapping: 'sfm_naturalidade.naturalidade',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'sfm_idade',
            allowNull: true
        },
        {
            name: 'sfm_estadocivil_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.sepultamento.SfmEstadocivil'
        },
        {
            name: 'sfm_estadocivil_estadocivil',
            mapping: 'sfm_estadocivil.estadocivil',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'sfm_conjuge',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'sfm_pai',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'sfm_mae',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'sfm_data_morte',
            allowNull: true
        },
        {
            name: 'sfm_causamortis_id',
            type: 'int',
            allowNull: true,
            reference: 'staticData.sepultamento.SfmCausamortis'
        },
        {
            name: 'sfm_causamortis_causamortis',
            mapping: 'sfm_causamortis.causamortis',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'sfm_sepult_localizacao',
            sortType: 'asUCString',
            allowNull: true
        },
        {
            name: 'imagem',
            sortType: 'asUCString',
            allowNull: true
        }
    ]
});