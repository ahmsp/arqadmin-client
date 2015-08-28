Ext.define('ArqAdmin.model.documental.Documento', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'fundo_id'
        },
        {
            mapping: 'fundo.fundo_nome',
            name: 'fundo_nome'
        },
        {
            name: 'subfundo_id'
        },
        {
            mapping: 'subfundo.subfundo_nome',
            name: 'subfundo_nome'
        },
        {
            name: 'grupo_id'
        },
        {
            mapping: 'grupo.grupo_nome',
            name: 'grupo_nome'
        },
        {
            name: 'subgrupo_id'
        },
        {
            mapping: 'subgrupo.subgrupo_nome',
            name: 'subgrupo_nome'
        },
        {
            name: 'serie_id'
        },
        {
            mapping: 'serie.serie_nome',
            name: 'serie_nome'
        },
        {
            name: 'subserie_id'
        },
        {
            mapping: 'subserie.subserie_nome',
            name: 'subserie_nome'
        },
        {
            name: 'dossie_id'
        },
        {
            mapping: 'dossie.dossie_nome',
            name: 'dossie_nome'
        },
        {
            name: 'especiedocumental_id'
        },
        {
            mapping: 'especie_documental.especiedocumental_nome',
            name: 'especiedocumental_nome'
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
            name: 'conservacao_id'
        },
        {
            mapping: 'conservacao.conservacao_estado',
            name: 'conservacao_estado'
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
            name: 'lc_sala_id'
        },
        {
            mapping: 'lc_sala.sala',
            name: 'lc_sala_sala'
        },
        {
            name: 'lc_movel_id'
        },
        {
            mapping: 'lc_movel.movel',
            name: 'lc_movel_movel'
        },
        {
            name: 'lc_movel_num'
        },
        {
            name: 'lc_compartimento_id'
        },
        {
            mapping: 'lc_compartimento.compartimento',
            name: 'lc_compartimento_compartimento'
        },
        {
            name: 'lc_compartimento_num'
        },
        {
            name: 'lc_acondicionamento_id'
        },
        {
            mapping: 'lc_acondicionamento.acondicionamento',
            name: 'lc_acondicionamento_acondicionamento'
        },
        {
            name: 'lc_acondicionamento_num'
        },
        {
            name: 'lc_pagina'
        },
        {
            name: 'dt_uso_id'
        },
        {
            mapping: 'dt_uso.uso',
            name: 'dt_uso_uso'
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