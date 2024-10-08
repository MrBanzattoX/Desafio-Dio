//Código criado por Marcus Vinicius M. Banzatto
//Em 05 de outubro de 2024
//Ganho de XP após batalha
// Variáveis para armazenar o nome do herói e a quantidade de experiência (XP)
let nome = "Hércules"; // Exemplo de nome
let xp = 7200;     // Exemplo de experiência (XP)

// Variável para armazenar o nível do herói
let nivel = "";

// Estrutura de decisão para determinar o nível com base no XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

// Exibir a mensagem final
console.log(`O Herói ${nome} está no nível de ${nivel}`);
