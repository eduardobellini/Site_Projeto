public abstract class Animal {

    private String nome;
    private int idade;

    public Animal(String nome, int idade) {
        this.nome = nome;
        setIdade(idade);
    }

    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        if (idade < 0) {
            System.out.println("Idade inválida! Mantendo valor anterior.");
            return;
        }
        this.idade = idade;
    }

    public abstract String emitirSom();

    public void apresentar() {
        System.out.println(nome + " (" + idade + " anos) faz: " + emitirSom());
    }
}
