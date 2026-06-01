class hero{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar(){
        console.log(`O personagem ${this.nome} com idade ${this.idade} da raça ${this.tipo} 
            utilizou o ${this.ataque} contra você `)
    }


}

let guerreiroUm = new hero("Goku", 45, "Saiyajin", "Kamehameha")

guerreiroUm.atacar()