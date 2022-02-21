var ar = [1, 2, 3, 4]

console.log(ar)

function somaArr(){
    let n = 0;

    for(let i = 0; i < ar.length; i++){
        n = n + ar[i]
    }
    console.log(n)
}

somaArr();