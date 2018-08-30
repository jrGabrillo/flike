export class Message {
    id?:string;
    constructor(
        public message:string,
        public sender: string,
        public timestamp: number,
        public typeOfMessage: string,
        public survey: any
    ){}
}