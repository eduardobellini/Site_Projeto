from animal import Animal
from cachorro import Cachorro
from gato import Gato

animais = [Cachorro("Rex", 3), Gato("Mimi", 2)]

for a in animais:
    a.apresentar()

rex = animais[0]
rex.idade = -5
rex.idade = 4
print(f"Nova idade do {rex.nome}: {rex.idade}")

try:
    Animal("X", 1)
except TypeError:
    print("Erro: não dá para instanciar a classe abstrata Animal")
