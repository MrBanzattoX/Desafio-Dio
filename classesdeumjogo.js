// Definição da classe Heroi - Lógica de Programação - GFT
//Por Marcus Vinicius M. Banzatto - 05/out/2024
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome; // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo; // Tipo do herói (ex: guerreiro, mago, monge, ninja)
    }

    // Método atacar
    atacar() {
        let ataque;

        // Definir o ataque com base no tipo do herói
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia de fogo';
                break;
            case 'guerreiro':
                ataque = 'usou espada de duas mãos';
                break;
            case 'monge':
                ataque = 'usou artes marciais secretas';
                break;
            case 'ninja':
                ataque = 'usou shuriken gigante';
                break;
            default:
                ataque = 'fez um ataque indefinido'; // Caso o tipo seja desconhecido
        }

        // Exibir a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando objetos com diferentes tipos de heróis
const mago = new Heroi('Faust', 300, 'mago');
const guerreiro = new Heroi('Ragna', 35, 'guerreiro');
const monge = new Heroi('Wan Fu Shen ', 28, 'monge');
const ninja = new Heroi('Hatori Hanzo', 20, 'ninja');

// Exemplo de ataques
mago.atacar();       // Saída: O mago atacou usando magia
guerreiro.atacar();  // Saída: O guerreiro atacou usando espada
monge.atacar();      // Saída: O monge atacou usando artes marciais
ninja.atacar();      // Saída: O ninja atacou usando shuriken
