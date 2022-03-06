$('.owl-carousel').owlCarousel({ //o cifao serve para a configuracao de elementos em tela
    loop:true, //efeito de loop infinito
    margin:10, //margem entre os quadrados
    nav:false, //barra de navegacao false deixa apenas as bolinhas
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5//quando o dispositivo tiver com mais dessa quantidade de px, mostra 5 elementos por tela
        }
    }
})