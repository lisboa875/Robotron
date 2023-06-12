/*function ola(nome){
    console.log("pedro")
    console.log("ola tudo bem")
}
ola()

const robotron = document.querySelector("#robotron")
robotron.addEventListener("click", ()=>{
    console.log("cliquei no robo")
})*/
//document.querySelector("#robotron").addEventListener("click",alert("ola"))

/*const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")
const subtrair = document.querySelector("#subtrair")

somar.addEventListener("click", (evento)=>{
    braco.value = parseInt(braco.value)+1
})
subtrair.addEventListener("click", (evento)=>{
    braco.value = parseInt(braco.value)-1
}) */
    
//const somar = document.querySelector("#somar")
//const subtrair = document.querySelector("#subtrair")
/*const braco = document.querySelector("#braco")
const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.textcontent)
    })
})


//somar.addEventListener("click", ()=>{manipulaDados("somar")})
//subtrair.addEventListener("click", ()=>{manipulaDados("subtrair")}) */

/*const somar = document.querySelector("#somar")
const subtrair = document.querySelector("#subtrair")
const braco = document.querySelector("#braco")
somar.addEventListener("click",()=>{manipulaDados("somar")
braco.value = parseInt(braco.value)+1
})

subtrair.onclick = function(){manipulaDados("subtrair")
    braco.value = parseInt(braco.value)-1
    console.log(evento)
}

function manipulaDados(operacao){
    if(operacao === "subtrair"){
        braco.value =parseInt (braco.value)-1
    }else{
        braco.value =parseInt (braco.value)+1

    }
}*/ 




const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}



controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        
     manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
     
     console.log(evento.target.parentNode)
     atualizaEstatistica(evento.target.dataset.peca)
    })
})




function manipulaDados(operacao, controle ) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-") {
       peca.value = parseInt(peca.value) - 1
    } else { 
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca){
    console.log(pecas[peca])
    estatistica.forEach((elemento=>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
     
     
     }))
}
