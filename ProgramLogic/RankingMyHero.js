let heroname = "Batman"
let heroxp = 1.000
let herolevel = ""

if (heroxp < 1000){
    console.log(" Você salva Gotham a pouco tempo, vou te deixar na classe FERRO ")
    herolevel = "FERRO";
}
else if (heroxp > 1001 && heroxp <= 2000){
    console.log(" Você ainda é um morcego novo, lhe considero da classe BRONZE ")
    herolevel = "BRONZE";
}
else if (heroxp > 1001 && heroxp <= 2000){
    console.log(" Então este é seu primeiro Robin, sua classe passará a ser PRATA ")
    herolevel = "PRATA";
}
else if (heroxp > 1001 && heroxp <= 2000){
    console.log("  um garoto roubando o pneu do batmóvel ? kkkkk sua classe agora passa a ser OURO ")
    herolevel = "OURO";
}
else if (heroxp > 1001 && heroxp <= 2000){
    console.log(" Seu garoto morreu ?... que pena, ele era como PLATINA ")
    herolevel = "PLATINA";
}
else if (heroxp > 1001 && heroxp <= 2000){
    console.log(" Entrou para a Liga da Justiça ?! você subiu para ASCENDENTE ")
    herolevel = "ASCENDENTE";
}
else if (heroxp > 1001 && heroxp <= 2000){
    console.log(" Dick, ele se foi.. mas se tornou um símbolo IMORTAL ")
    herolevel = "IMORTAL";
}
else {
    console.log(" Que linda homenagem, você esta RADIANTE")
    herolevel = "RADIANTE";
}

console.log(`O héroi ${heroname} está no level ${herolevel}`);
