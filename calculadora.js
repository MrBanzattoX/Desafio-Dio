//Código por Marcus Vinicius M. Banzatto
//Em 05 de outubro de 2024
// Calculadora de partidas Rankeadas
// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Variável para armazenar o nível
    let nivel = "";

    // Determina o nível com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna o saldo de vitórias e o nível
    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
const vitorias = 75;  // Exemplo: número de vitórias
const derrotas = 30;  // Exemplo: número de derrotas

// Chamada da função
const resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem final
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
