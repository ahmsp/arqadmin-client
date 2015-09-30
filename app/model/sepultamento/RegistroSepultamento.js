Ext.define('ArqAdmin.model.sepultamento.RegistroSepultamento', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'RegistroSepultamento',

    fields: [
        {
            name: 'fundo_id',
            reference: 'Fundo'
        },
        {
            name: 'subfundo_id',
            reference: 'Subfundo'
        },
        {
            name: 'grupo_id',
            reference: 'Grupo'
        },
        {
            name: 'subgrupo_id',
            reference: 'Subgrupo'
        },
        {
            name: 'serie_id',
            reference: 'Serie'
        },
        {
            name: 'subserie_id',
            reference: 'Subserie'
        },
        {
            name: 'dossie_id',
            reference: 'Dossie'
        },
        {
            name: 'especiedocumental_id',
            reference: 'Especiedocumental'
        },
        {
            name: 'ano'
        },
        {
            name: 'notas'
        },
        {
            name: 'text'
        },
        {
            name: 'lc_sala_id',
            reference: 'LcSala'
        },
        {
            name: 'lc_movel_id',
            reference: 'LcMovel'
        },
        {
            name: 'lc_movel_num'
        },
        {
            name: 'lc_compartimento_id',
            reference: 'LcCompartimento'
        },
        {
            name: 'lc_compartimento_num'
        },
        {
            name: 'lc_acondicionamento_id',
            reference: 'LcAcondicionamento'
        },
        {
            name: 'lc_acondicionamento_num'
        },
        {
            name: 'lc_pagina'
        },
        {
            name: 'sfm_cartorio_id',
            reference: 'SfmCartorio'
        },
        {
            name: 'sfm_cemiterio_id',
            reference: 'SfmCemiterio'
        },
        {
            name: 'sfm_nome'
        },
        {
            name: 'sfm_nacionalidade_id',
            reference: 'SfmNacionalidade'
        },
        {
            name: 'sfm_naturalidade_id',
            reference: 'SfmNaturalidade'
        },
        {
            name: 'sfm_idade'
        },
        {
            name: 'sfm_estadocivil_id',
            reference: 'SfmEstadocivil'
        },
        {
            name: 'sfm_conjuge'
        },
        {
            name: 'sfm_pai'
        },
        {
            name: 'sfm_mae'
        },
        {
            name: 'sfm_data_morte'
        },
        {
            name: 'sfm_causamortis_id',
            reference: 'SfmCausamortis'
        },
        {
            name: 'sfm_sepult_localizacao'
        }

    ]
    
});