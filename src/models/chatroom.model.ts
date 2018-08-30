export class ChatRoom {
    public lastMessage?: any;

    constructor(public id:string,
                public name?: string,
                public chatroomImgUrl?:string,
                public indicator?:string,
                public userAccess?: Array<any>,
                public userMessageTimestamps?:Array<any>
    ){}
}