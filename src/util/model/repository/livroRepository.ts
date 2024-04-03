import { Livro } from "./Livro";

export interface livroRepository {
    cadastrar(livro: Livro): void;
    ListarTodos(): void;
    Deletar(numero: number): void;
}