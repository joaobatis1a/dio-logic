let vitorias = 40;
let derrotas = 2;
let nivel = " ";

let saldo = final();

function final (vic = vitorias , der = derrotas) {
    
    return vic - der;
}

if ( saldo < 10) {
    nivel = "Ferro";
}

else if  ( saldo > 10 && saldo <= 20) {
    nivel = "Bronze";
}

else if  ( saldo > 20 && saldo <= 50) {
    nivel = "Prata";
}

else if  ( saldo > 50 && saldo <= 80) {
    nivel = "Ouro";
}

else if  ( saldo > 80 && saldo <= 90) {
    nivel = "Diamante";
}

else if  ( saldo > 90 && saldo <= 100) {
    nivel = "Lendário";
}

else {
    nivel = "Imortal";
}

console.log("Seu saldo é: " + saldo + " e seu nível é: " + nivel);
