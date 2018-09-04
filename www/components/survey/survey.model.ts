export class Survey {

    constructor(
        public id:string,
        public typeQuestion:string,
        public question: string,
        public answers: any,
        public options: any,
    ){}
}