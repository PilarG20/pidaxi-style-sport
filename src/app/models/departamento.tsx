export class Departamento {
    public id:number;
    public name:string;
    public description:string;
    public population:number;
    
    constructor(id:number, nam:string, desc:string, pop:number){
        this.id = id;
        this.name = nam;
        this.description = desc;
        this.population = pop;
    }
}