// Substitua pelo SEU ID que aparece na URL do seu projeto Supabase
const PROJECT_ID = "jqvlzhdfhssoplcegpdl";
const BUCKET_NAME = "autono_box";

// Esta é a base padrão do Supabase Storage
const BASE_URL = `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/`;

export const IMAGES = {
    PAGE1: {
        CAR_SOBRE: `${BASE_URL}images/car-sobre.jpg`,
        CAR_SERVICO1: `${BASE_URL}images/car-servico-1.jpg`,
        CAR_SERVICO2: `${BASE_URL}images/car-servico-2.jpg`,
        VELOCIMETRO: `${BASE_URL}images/velocimetro-servico.jpg`,
        BRACO_INFO: `${BASE_URL}images/braco-infoII.jpg`,
    },
    FUNDOS: {
        // PAGE PRINCIPAL
        FUNDO_SOBREII: `${BASE_URL}images/fundo-sobreii.jpg`,
        // PAGE TECNOLOGIA
        FUNDO_INTRO: `${BASE_URL}images/fundo-intro.jpg`,
        FUNDO_INTRO_MOBILE: `${BASE_URL}images/fundo-introII.png`,
        // PAGE SOBRE
        FUNDO_DESTAQUES: `${BASE_URL}images/fundo-destaques.jpg`,
        FUNDO_DESTAQUES_MOBILE: `${BASE_URL}images/fundo-destaquesII.png`,
    },
    LOGOS: {
        // PAGE PRINCIPAL
        TRANS_PORT_X: `${BASE_URL}images/TransportX-parceiros.png`,
        IDISOFTWARE: `${BASE_URL}images/IDISoftware-parceiros.png`,
        ICARS: `${BASE_URL}images/ICars-parceiros.png`,
        TRI_NEX: `${BASE_URL}images/Tri-Nex-parceiro.png`,
        // PAGE SORE
        RCR: `${BASE_URL}images/RCR-.png`,
        TB_REVIEW: `${BASE_URL}images/TB_Review-01.png`,
        FINANCE: `${BASE_URL}images/Finance.png`,
        PABLO_ALTO_TRIBUNAL: `${BASE_URL}images/Palo_Alto_Tribunal.png`,
        LONDON_POST: `${BASE_URL}images/London_post.png`,
    },

    // Se tiver pastas dentro do bucket:
    PAGE2: {
        CAR_PRODUTO: `${BASE_URL}images/car-produtoI.jpg`,
        PAINEL_PRODUTOII: `${BASE_URL}images/paineil-produtoII.jpg`,
    },

    PAGE3: {
        MULHER_ABORDAGEM: `${BASE_URL}images/mulher-abordagem.jpg`,
    },
    PAGE4: {
        LOCALY: `${BASE_URL}images/localy.jpg`,
        LOCALY_MOBILE: `${BASE_URL}images/localyII.jpg`,
        PISTA_CARREIRA: `${BASE_URL}images/carreira.jpg`,
    },
};
