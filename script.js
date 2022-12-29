const mais = document.getElementById('mais')
const menos = document.getElementById('menos')
let quant = document.getElementById('resultado')
quantidade = 0

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