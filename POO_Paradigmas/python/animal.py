from abc import ABC, abstractmethod


class Animal(ABC):

    def __init__(self, nome, idade):
        self.__nome = nome
        self.__idade = 0
        self.idade = idade

    @property
    def nome(self):
        return self.__nome

    @property
    def idade(self):
        return self.__idade

    @idade.setter
    def idade(self, valor):
        if valor < 0:
            print("Idade inválida! Mantendo valor anterior.")
            return
        self.__idade = valor

    @abstractmethod
    def emitir_som(self):
        pass

    def apresentar(self):
        print(f"{self.nome} ({self.idade} anos) faz: {self.emitir_som()}")
