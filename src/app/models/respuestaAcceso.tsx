export class RespuestaAcceso{
    public tokenApp: string;
    public fotoApp: string;

    constructor(tok: string, fot:string){
        this.tokenApp = tok;
        this.fotoApp = fot;
    }
}