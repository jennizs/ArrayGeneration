import { Queue } from "./ClasseQueue";
const leia = require('readline-sync');

const fila = new Queue<string>();

let opcao: number;

do {
    console.log("Escolha uma opcao: ");
    console.log("  1- Adicionar cliente na fila");
    console.log("  2- Listar todos os clientes");
    console.log("  3- Retirar Cliente da fila");
    console.log("  0- Sair");

    opcao = leia.questionInt("Digite a opcao desejada: ");

    switch (opcao) {
        case 1:
            const nome = leia.question("Digite o nome: ");
            fila.enqueue(nome);
            console.log("\nFila:\n");
            fila.printQueue();
            console.log("\nCliente Adicionado!");
            break;
    
        case 2:
            if(fila.isEmpty())
            console.log("\nA Fila esta vazia:\n");
          else {
            console.log("\nListar clientes da fila!");
            fila.printQueue
          }
            break;

        case 3:
            if(fila.isEmpty())
            console.log("\nSair da fila:\n");
          else {
            console.log("\nCliente saiu da fila!");
            
            fila.dequeue();
            
            fila.printQueue
          }
            break;

        case 0:
            console.log("O Programa foi Finalizado!");
            break;

        default:
            console.log("Opcao invalida");
            break;
    }
} while(opcao !== 0);

