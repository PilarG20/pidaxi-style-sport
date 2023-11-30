export class Acceso {
    public codUsuario: number;
    public correoAcceso: string;
    public claveAcceso: string;
    public confirmarClave: string;

    constructor(cod: number, corr: string, cla:string,con:string){
        this.codUsuario = cod;
        this.correoAcceso = corr;
        this.claveAcceso = cla;
        this.confirmarClave = con;
    }
}