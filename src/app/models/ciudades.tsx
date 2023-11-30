export class Ciudad {
    public id: number;
    public name: string;
    public description: string;
    public postalCode: string;

    constructor(id:number, nam:string, desc:string, post:string){
        this.id = id;
        this.name = nam;
        this.description = desc;
        this.postalCode = post;        
    }
}