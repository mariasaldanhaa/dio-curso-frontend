let forca = 25;
let inteligencia = 20;

let classificacao = "";

if (forca < 20 && inteligencia < 15) {
    classificacao = "Aprendiz";
} else if (forca >= 20 && inteligencia < 15) {
    classificacao = "Guerreiro";
} else if (forca < 20 && inteligencia >= 15) {
    classificacao = "Mago";
} else {
    classificacao = "Arquimago";
}

console.log(classificacao);