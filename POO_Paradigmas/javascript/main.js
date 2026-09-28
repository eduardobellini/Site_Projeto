const Animal = require("./Animal");
const Cachorro = require("./Cachorro");
const Gato = require("./Gato");

const animais = [new Cachorro("Rex", 3), new Gato("Mimi", 2)];

for (const a of animais) {
  a.apresentar();
}

const rex = animais[0];
rex.idade = -5;
rex.idade = 4;
console.log(`Nova idade do ${rex.nome}: ${rex.idade}`);

try {
  new Animal("X", 1);
} catch (e) {
  console.log("Erro: " + e.message);
}
