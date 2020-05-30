export class App {
    private message: string;

    showMessage(): string {
        this.message = `Hello World!!! - ${new Date().toLocaleString()}`;
        return this.message;
    }
}