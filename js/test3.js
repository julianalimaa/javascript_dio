var idade;

function validadeIdade(idade){
    if(idade >= 18){
        return true;
    } else {
        return false;
    }
}

idade = prompt("Qual sua idade?")
alert(validadeIdade(idade));