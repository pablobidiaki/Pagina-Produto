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
const abaCar = document.getElementById('abaCarrinho')

const botaoComprar = document.getElementById('addCarrinho')
const carrinhoComProduto = document.getElementById('abaCarrinhoCheio')

const lixeira = document.getElementById('delete')
const valorFinal = document.getElementById('valorFinal')
let totalCompra = 0

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
        
        main.addEventListener('click', () =>{
            carrinhoComProduto.classList.add('none')
        })
    }else{
        botaoCarrinho.addEventListener('click', () =>{
            abaCar.classList.remove('none')
        })
        
        main.addEventListener('click', () =>{
            abaCar.classList.add('none')
        })
    }
})

lixeira.addEventListener('click', () =>{
    carrinhoComProduto.classList.add('none')
    abaCar.classList.remove('none')
})

