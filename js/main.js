function clicou(){
    alert('Fui clicado!')
    console.log(document.getElementById("agradecimento"))
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
}

function redireciona(){
    window.open("https://www.youtube.com/")
    // window.location.href="https://www.youtube.com/" - abre na mesma janela
}

function mousemove(element){
    //document.getElementById("mousemove").innerHTML = "Você passou o mouse por aqui"
    element.innerHTML = "Você passou o mouse por aqui"
}

function voltar(element){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    element.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}







// // alert('Hello world!')
// // var frase = "Meu nome é Julia";
// // console.log(frase)
// // console.log(frase.replace("Julia", "Juliana"))


// var lista = ["pera", "maçã", "banana"]
// console.log(lista[2])
// lista.push("banana");
// console.log(lista)
// lista.pop();
// console.log(lista)
// console.log(lista.length)
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.toString()[0]);
// console.log(lista.join(" - "))
