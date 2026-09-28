const Animal = require("./Animal");

class Cachorro extends Animal {
  emitirSom() {
    return "Au au!";
  }
}

module.exports = Cachorro;
