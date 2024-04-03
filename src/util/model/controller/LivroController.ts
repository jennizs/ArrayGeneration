import { Livro } from "../repository/Livro";
import { livroRepository } from "../repository/livroRepository";

export class livroController implements livroRepository {
    private listaTodos: Array<Livro> = [];
    private numero: number = 0;

    cadastrar(livro: Livro): void {
        livro.numero = this.gerarNumero();
        this.listaTodos.push(livro);
        console.log("Livro registrado!");
    }

    ListarTodos(): void {
        for (let livro of this.listaTodos) {
            livro.visualizar();
        }
    }

    Deletar(numero: number): void {
        let livro = this.buscarNoArray(numero);
        if (livro) {
            this.listaTodos.splice(this.listaTodos.indexOf(livro), 1);
            console.log("Livro apagado com sucesso!");
        } else {
            console.log("Livro não encontrado.");
        }
    }

    private buscarNoArray(numero: number): Livro | null {
        return this.listaTodos.find(livro => livro.numero === numero) || null;
    }

    public gerarNumero(): number {
        return ++this.numero;
    }
}