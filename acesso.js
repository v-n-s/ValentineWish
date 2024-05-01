const btn = document.querySelector("#btn")

const usuario = document.querySelector(".usuario").value;

const senha = document.querySelector(".senha").value;


function send(){

const usuario = document.querySelector(".usuario").value;

const senha = document.querySelector(".senha(ddmmaa)").value;

const preencha = document.querySelector("#preencha")

const sucesso = document.querySelector("#sucesso")


if(usuario.length <1 || senha.length <1){
    
    preencha.style.display = ('inline')

    setTimeout(() => {

        preencha.style.display = ('none')
    
        }, 1000);

    return false;
}

if(usuario == "karolinne" && senha == "170523"){

    sucesso.style.display = ('inline')

    setTimeout(() => {

    location.href = "https://v-n-s.github.io/ValentineWish/ind.html";

    }, 500);
    
} else{

    negado.style.display = ('inline')

    setTimeout(() => {

        location.href = "https://v-n-s.github.io/ValentineWish/index.html";
    
        }, 500);

};


};
