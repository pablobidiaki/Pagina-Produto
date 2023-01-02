const mais = document.getElementById('mais')
const menos = document.getElementById('menos')
let quant = document.getElementById('resultado')
let quantidade = 0

const esq = document.getElementById('esquerda')
const dir = document.getElementById('direita')
const img1 = 'url(imgs/image-product-1.jpg)'
const img2 = 'url(imgs/image-product-2.jpg)'
const img3 = 'url(imgs/image-product-3.jpg)'
const img4 = 'url(imgs/image-product-4.jpg)'
let contagemImg = 1 

const botaoBurguer = document.getElementById('burguer')
const menuBurguer = document.getElementById('menuBurguer')
const main = document.getElementById('main')
const header = document.getElementById('header')
const botaoFechar = document.getElementById('btnFechar')

const botaoCarrinho = document.getElementById('carrinho')
const botaoCarrinho2 = document.getElementById('carrinho2')
const abaCar = document.getElementById('abaCarrinho')

const botaoComprar = document.getElementById('addCarrinho')
const carrinhoComProduto = document.getElementById('abaCarrinhoCheio')

const lixeira = document.getElementById('delete')
const valorFinal = document.getElementById('valorFinal')
let totalCompra = 0

const foto1 = document.getElementById('img1')
const foto2 = document.getElementById('img2')
const foto3 = document.getElementById('img3')
const foto4 = document.getElementById('img4')
const imgCentral = document.getElementById('imgCentral')

const body = document.getElementById('body')
const lightBox = document.getElementById('lightBox')
const fechar = document.getElementById('imgFechar-lightBox')
const img1Light = document.getElementById('img1-lightBox')
const img2Light = document.getElementById('img2-lightBox')
const img3Light = document.getElementById('img3-lightBox')
const img4Light = document.getElementById('img4-lightBox')
const imgPrincipalLightBox = document.getElementById('imgPrincipal-lightBox')

mais.addEventListener('click', () =>{
    quantidade += 1
    quant.innerHTML = quantidade
})

menos.addEventListener('click', () =>{
    if(quantidade <= 0){
        quant.innerHTML = quantidade
    }else{
        quantidade -= 1
        quant.innerHTML = quantidade
    }
})

esq.addEventListener('click', () =>{
    contagemImg -= 1
    if(contagemImg < 1){contagemImg = 4}

    if(contagemImg == 1){
        document.getElementById('imagemPrincipal').style.backgroundImage = img1
    }
    if(contagemImg == 2){
        document.getElementById('imagemPrincipal').style.backgroundImage = img2
    }
    if(contagemImg == 3){
        document.getElementById('imagemPrincipal').style.backgroundImage = img3
    }
    if(contagemImg == 4){
        document.getElementById('imagemPrincipal').style.backgroundImage = img4
    }
})

dir.addEventListener('click', () =>{
    contagemImg += 1
    if(contagemImg > 4){contagemImg = 1}

    if(contagemImg == 1){
        document.getElementById('imagemPrincipal').style.backgroundImage = img1
    }
    if(contagemImg == 2){
        document.getElementById('imagemPrincipal').style.backgroundImage = img2
    }
    if(contagemImg == 3){
        document.getElementById('imagemPrincipal').style.backgroundImage = img3
    }
    if(contagemImg == 4){
        document.getElementById('imagemPrincipal').style.backgroundImage = img4
    }
})

botaoBurguer.addEventListener('click', () =>{
    menuBurguer.classList.remove('none')
    main.classList.add('none')
    header.classList.add('none')
})

botaoFechar.addEventListener('click', () =>{
    menuBurguer.classList.add('none')
    main.classList.remove('none')
    header.classList.remove('none')
})

botaoCarrinho.addEventListener('click', () =>{
    abaCar.classList.remove('none')
    document.documentElement.style.overflow = 'hidden';
})

botaoCarrinho2.addEventListener('click', () =>{
    abaCar.classList.remove('none')
    document.documentElement.style.overflow = 'hidden';
})

main.addEventListener('click', () =>{
    abaCar.classList.add('none')
    document.documentElement.style.overflow = 'auto';
})

botaoComprar.addEventListener('click', () =>{
    totalCompra = quantidade * 125
    valorFinal.innerHTML = ("R$125,00 x " + quantidade + " = " + totalCompra + ",00")
})

botaoComprar.addEventListener('click', () =>{
    if(quantidade > 0){
        botaoCarrinho.addEventListener('click', () =>{
            carrinhoComProduto.classList.remove('none')
        })

        botaoCarrinho2.addEventListener('click', () =>{
            carrinhoComProduto.classList.remove('none')
        })
        
        main.addEventListener('click', () =>{
            carrinhoComProduto.classList.add('none')
        })
    }else{
        botaoCarrinho.addEventListener('click', () =>{
            abaCar.classList.remove('none')
            carrinhoComProduto.classList.add('none')
        })
        
        main.addEventListener('click', () =>{
            abaCar.classList.add('none')
            carrinhoComProduto.classList.add('none')
        })
    }
})

lixeira.addEventListener('click', () =>{
    carrinhoComProduto.classList.add('none')
    abaCar.classList.remove('none')
})

foto1.addEventListener('click', () =>{
    foto1.classList.add('imgSelecionada')
    foto2.classList.remove('imgSelecionada')
    foto3.classList.remove('imgSelecionada')
    foto4.classList.remove('imgSelecionada')
    imgCentral.src = "imgs/image-product-1.jpg"
})
foto2.addEventListener('click', () =>{
    foto2.classList.add('imgSelecionada')
    foto1.classList.remove('imgSelecionada')
    foto3.classList.remove('imgSelecionada')
    foto4.classList.remove('imgSelecionada')
    imgCentral.src = "imgs/image-product-2.jpg"
})
foto3.addEventListener('click', () =>{
    foto3.classList.add('imgSelecionada')
    foto2.classList.remove('imgSelecionada')
    foto1.classList.remove('imgSelecionada')
    foto4.classList.remove('imgSelecionada')
    imgCentral.src = "imgs/image-product-3.jpg"
})
foto4.addEventListener('click', () =>{
    foto4.classList.add('imgSelecionada')
    foto2.classList.remove('imgSelecionada')
    foto3.classList.remove('imgSelecionada')
    foto1.classList.remove('imgSelecionada')
    imgCentral.src = "imgs/image-product-4.jpg"
})

imgCentral.addEventListener('click', () =>{
    lightBox.classList.remove('none')
    lightBox.classList.add('visible')
    main.classList.add('none')
    header.classList.add('none')
})

fechar.addEventListener('click', () =>{
    main.classList.remove('none')
    header.classList.remove('none')
    lightBox.classList.add('none')
    lightBox.classList.remove('visible')
})

img1Light.addEventListener('click', () =>{
    img1Light.classList.add('imgSelecionada')
    img2Light.classList.remove('imgSelecionada')
    img3Light.classList.remove('imgSelecionada')
    img4Light.classList.remove('imgSelecionada')
    imgPrincipalLightBox.src = "imgs/image-product-1.jpg"
})
img2Light.addEventListener('click', () =>{
    img2Light.classList.add('imgSelecionada')
    img1Light.classList.remove('imgSelecionada')
    img3Light.classList.remove('imgSelecionada')
    img4Light.classList.remove('imgSelecionada')
    imgPrincipalLightBox.src = "imgs/image-product-2.jpg"
})
img3Light.addEventListener('click', () =>{
    img3Light.classList.add('imgSelecionada')
    img2Light.classList.remove('imgSelecionada')
    img1Light.classList.remove('imgSelecionada')
    img4Light.classList.remove('imgSelecionada')
    imgPrincipalLightBox.src = "imgs/image-product-3.jpg"
})
img4Light.addEventListener('click', () =>{
    img4Light.classList.add('imgSelecionada')
    img2Light.classList.remove('imgSelecionada')
    img3Light.classList.remove('imgSelecionada')
    img1Light.classList.remove('imgSelecionada')
    imgPrincipalLightBox.src = "imgs/image-product-4.jpg"
})