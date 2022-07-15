let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "UZBEQUISTAO",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "CREGUENHEM",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria: "TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria: "TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria: "TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria: "TRANSPORTE"
    },
    palavra020 = {
        nome: "FUNICULAR",
        categoria: "TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria: "OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria: "OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria: "OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria: "OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria: "OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria: "OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria: "OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria: "OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria: "OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria: "OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria: "ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria: "ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria: "ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria: "ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria: "ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria: "ALIMENTOS"
    },
    palavra037 = {
        nome: "DESJEJUM",
        categoria: "ALIMENTOS"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria: "ALIMENTOS"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria: "ANIMAIS"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria: "ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria: "ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria: "ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria: "ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria: "ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria: "ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria: "ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria: "ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria: "ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    }
];


criarPalavraSecreta();

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();

function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    } else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function() {
    location.reload();
});


$("#trocarTeclado").on("click", function() {

    // https://animate.style/

    $("#teclado-qwerty").removeClass("animate__animated animate__infinite2 animate__rotateIn2 animate__flip2 animate__flipInY animate__slower2")
    $("#teclado").removeClass("animate__animated animate__infinite2 animate__hinge")
    $("#teclado").removeClass("animate__animated animate__infinite2 animate__lightSpeedInLeft")
    if ($("#teclado").is(":visible")) {
        $("#teclado").hide();
        $("#teclado-qwerty").addClass("animate__animated animate__infinite2 animate__rotateIn2 animate__flip2 animate__flipInY animate__slower2")
        $("#teclado-qwerty").show();
    } else {
        $("#teclado-qwerty").hide();
        $("#teclado").show();

        $("#teclado").addClass("animate__animated animate__infinite2 animate__hinge")
        $("#categoria").hide();
        setTimeout(() => {
            $("#teclado").hide();
            $("#teclado").removeClass("animate__animated animate__infinite2 animate__hinge")
            setTimeout(() => {
                $("#teclado").addClass("animate__animated animate__infinite2 animate__lightSpeedInLeft")
                $("#teclado").show();
                $("#categoria").show();

            }, 100);
        }, 1000);

    }

})




const efeitos = [
    palavra001 = {
        classeIn: "animate__backInDown",
        classeOut: "animate__backOutDown",
    },
    palavra002 = {
        classeIn: "animate__bounceIn",
        classeOut: "animate__bounceOut",
    },
    palavra003 = {
        classeIn: "animate__fadeInRightBig",
        classeOut: "animate__fadeOutRightBig",
    },
    palavra004 = {
        classeIn: "animate__rotateIn",
        classeOut: "animate__rotateOut",
    },
    palavra005 = {
        classeIn: "animate__zoomInLeft",
        classeOut: "animate__zoomOutLeft",
    },
    palavra006 = {
        classeIn: "animate__fadeInTopLeft",
        classeOut: "animate__fadeOutTopLeft",
    },
    palavra007 = {
        classeIn: "animate__bounceInRight",
        classeOut: "animate__bounceOutRight",
    },
    palavra008 = {
        classeIn: "animate__swing",
        classeOut: "animate__fadeOut",
    },
    palavra009 = {
        classeIn: "animate__rollIn",
        classeOut: "animate__rollOut",
    },
    palavra010 = {
        classeIn: "animate__flipInY",
        classeOut: "animate__rollOut",
    }
]

var classIn = "";
var classOut = "";

// setInterval(() => {
//     $(".fernando").attr("class", "fernando animate__animated")
//     indexEfeito = parseInt(Math.random() * efeitos.length)
//     classIn = efeitos[indexEfeito].classeIn;
//     classOut = efeitos[indexEfeito].classeOut;
//     $(".fernando").addClass(classIn)
//     setTimeout(() => {
//         $(".fernando").removeClass(classIn)
//         setTimeout(() => {
//             $(".fernando").addClass(classOut)
//             setTimeout(() => {
//                 $(".fernando").removeClass(classOut)
//             }, 2000);
//         }, 100);
//     }, 2000);
//     // console.log(indexEfeito)
// }, 5000);


// setInterval(() => {
//     $(".fernando2").attr("class", "fernando2 animate__animated")
//     indexEfeito = parseInt(Math.random() * efeitos.length)
//     classIn = efeitos[indexEfeito].classeIn;
//     classOut = efeitos[indexEfeito].classeOut;
//     $(".fernando2").addClass(classIn)
//     setTimeout(() => {
//         $(".fernando2").removeClass(classIn)
//         setTimeout(() => {
//             $(".fernando2").addClass(classOut)
//             setTimeout(() => {
//                 $(".fernando2").removeClass(classOut)
//             }, 2000);
//         }, 100);
//     }, 2000);
//     // console.log(indexEfeito)
// }, 6000);