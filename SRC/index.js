let saldoVitorias = soma(0, 0)
let xpDoHeroi = saldoVitorias

switch (true) {
    case xpDoHeroi >= 0 && xpDoHeroi < 10:
        console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de Ferro")
        break

    case xpDoHeroi >= 10 && xpDoHeroi < 20:
        console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de Bronze")
        break

    case xpDoHeroi >= 20 && xpDoHeroi < 50:
        console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de Prata")
        break

    case xpDoHeroi >= 50 && xpDoHeroi < 80:
        console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de Ouro")
        break

    case xpDoHeroi >= 80 && xpDoHeroi < 90:
        console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de Diamante")
        break

    case xpDoHeroi >= 91 && xpDoHeroi < 100:
        console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de Lendário")
        break

    case xpDoHeroi >= 101:
        console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de Imartal")
        break
        
}
function soma(vitorias, derrotas) {
    let somatorio = vitorias - derrotas
    return somatorio
}


   