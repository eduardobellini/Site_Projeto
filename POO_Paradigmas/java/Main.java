public class Main {
    public static void main(String[] args) {
        Animal[] animais = {
            new Cachorro("Rex", 3),
            new Gato("Mimi", 2)
        };

        for (Animal a : animais) {
            a.apresentar();
        }

        Animal rex = animais[0];
        rex.setIdade(-5);
        rex.setIdade(4);
        System.out.println("Nova idade do " + rex.getNome() + ": " + rex.getIdade());
    }
}
