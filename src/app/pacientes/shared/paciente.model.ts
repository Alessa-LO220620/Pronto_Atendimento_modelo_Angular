export class Paciente{
    constructor(
        public id?:number,
        public nome?:string,
        public ativo?:boolean,
        public prioridade?:string,
        public concluido?:boolean
    ) {

    }
}