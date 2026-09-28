const Animal = require("./Animal");

class Gato extends Animal {
  emitirSom() {
    return "Miau!";
  }
}

module.exports = Gato;
