Ext.define('ArqAdmin.model.documental.Documento', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Documento',

    fields: [
        {
            name: 'fundo_id',
            reference: 'classificacao.Fundo'
        },
        {
            name: 'fundo_nome',
            mapping: 'fundo.fundo_nome'
        },
        {
            name: 'subfundo_id',
            reference: 'classificacao.Subfundo'
        },
        {
            name: 'subfundo_nome',
            mapping: 'subfundo.subfundo_nome'
        },
        {
            name: 'grupo_id',
            reference: 'classificacao.Grupo'
        },
        {
            name: 'grupo_nome',
            mapping: 'grupo.grupo_nome'
        },
        {
            name: 'subgrupo_id',
            reference: 'classificacao.Subgrupo'
        },
        {
            name: 'subgrupo_nome',
            mapping: 'subgrupo.subgrupo_nome'
        },
        {
            name: 'serie_id',
            reference: 'classificacao.Serie'
        },
        {
            name: 'serie_nome',
            mapping: 'serie.serie_nome'
        },
        {
            name: 'subserie_id',
            reference: 'classificacao.Subserie'
        },
        {
            name: 'subserie_nome',
            mapping: 'subserie.subserie_nome'
        },
        {
            name: 'dossie_id',
            reference: 'classificacao.Dossie'
        },
        {
            name: 'dossie_nome',
            mapping: 'dossie.dossie_nome'
        },
        {
            name: 'especiedocumental_id',
            reference: 'classificacao.Especiedocumental'
        },
        {
            name: 'especiedocumental_nome',
            mapping: 'especie_documental.especiedocumental_nome'
        },
        {
            name: 'notacao_preexistente'
        },
        {
            name: 'notacao'
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
            name: 'quantidade_doc'
        },
        {
            name: 'conservacao_id',
            reference: 'documental.Conservacao'
        },
        {
            name: 'conservacao_estado',
            mapping: 'conservacao.conservacao_estado'
        },
        {
            name: 'interessado'
        },
        {
            name: 'assunto'
        },
        {
            name: 'notas'
        },
        {
            name: 'lc_sala_id',
            reference: 'localizacao.LcSala'
        },
        {
            name: 'lc_sala_sala',
            mapping: 'lc_sala.sala'
        },
        {
            name: 'lc_movel_id',
            reference: 'localizacao.LcMovel'
        },
        {
            name: 'lc_movel_movel',
            mapping: 'lc_movel.movel'
        },
        {
            name: 'lc_movel_num'
        },
        {
            name: 'lc_compartimento_id',
            reference: 'localizacao.LcCompartimento'
        },
        {
            name: 'lc_compartimento_compartimento',
            mapping: 'lc_compartimento.compartimento'
        },
        {
            name: 'lc_compartimento_num'
        },
        {
            name: 'lc_acondicionamento_id',
            reference: 'localizacao.LcAcondicionamento'
        },
        {
            name: 'lc_acondicionamento_acondicionamento',
            mapping: 'lc_acondicionamento.acondicionamento'
        },
        {
            name: 'lc_acondicionamento_num'
        },
        {
            name: 'lc_pagina'
        },
        {
            name: 'dt_uso_id',
            reference: 'documental.DtUso'
        },
        {
            name: 'dt_uso_uso',
            mapping: 'dt_uso.uso'
        },
        {
            name: 'dt_endereco'
        },
        {
            name: 'dt_end_complemento'
        },
        {
            name: 'dt_endereco_atual'
        },
        {
            name: 'dt_endatual_complemento'
        },
        {
            name: 'dt_proprietario'
        },
        {
            name: 'dt_autor'
        },
        {
            name: 'dt_construtor'
        },
        {
            name: 'dt_notas'
        }
    ]
});