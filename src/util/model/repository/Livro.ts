export class Livro {
    private _numero: number;
    private _titulo: string;

    constructor(numero: number, titulo: string) {
        this._numero = numero;
        this._titulo = titulo;
    }

    public get numero(): number {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public visualizar(): void {
        console.log("ID: " + this.numero);
        console.log("Título: " + this.titulo);
        console.log("\n\n*");
    }
}