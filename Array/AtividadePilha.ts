import  {readlineSync} from "readline-sync";
import { Stack } from "./Stack";
export function main() {
    let livros: livroController = new livroController();
    let opcao: number;

    while (true) {
        console.log("*********************************************************************");
        console.log("                    1 - Adicionar Livro na pilha                     ");
        console.log("                    2 - Listar todos os livros                       ");
        console.log("                    3 - Retirar livro da pilha                       ");
        console.log("                    0 - Sair                                         ");
        console.log("*********************************************************************");
        console.log("                                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if (opcao == 0) {
            console.log("Você saiu da P1lh4 ATV 2!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nQual o Livro que deseja adicionar?\n");
                let titulo: string = readlineSync.question("");
                let livro: Livro = new Livro(livros.gerarNumero(), titulo);
                livros.cadastrar(livro);
                break;
            case 2:
                console.log("\nListar todos os livros\n");
                livros.ListarTodos();
                break;
            case 3:
                console.log("\nRetirar livro da pilha\n");
                const numero: number = readlineSync.questionInt("");
                livros.Deletar(numero);
                break;
            default:
                console.log("\nOpção inválida\n");
                break;
        }
    }
}

export function sobre(): void {
    console.log("*********************************************************************");
    console.log("        Projeto Desenvolvido para Generation Brasil 2024             ");
    console.log("*********************************************************************");
}

main();

