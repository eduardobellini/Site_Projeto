class Animal {
  #nome;
  #idade = 0;

  constructor(nome, idade) {
    if (new.target === Animal) {
      throw new Error("Animal é abstrato e não pode ser instanciado");
    }
    this.#nome = nome;
    this.idade = idade;
  }

  get nome() {
    return this.#nome;
  }

  get idade() {
    return this.#idade;
  }

  set idade(valor) {
    if (valor < 0) {
      console.log("Idade inválida! Mantendo valor anterior.");
      return;
    }
    this.#idade = valor;
  }

  emitirSom() {
    throw new Error("emitirSom() deve ser implementado pela subclasse");
  }

  apresentar() {
    console.log(`${this.nome} (${this.idade} anos) faz: ${this.emitirSom()}`);
  }
}

module.exports = Animal;
