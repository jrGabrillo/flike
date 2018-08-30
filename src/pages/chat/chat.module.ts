import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { EmojiProvider } from "../../providers/emoji/emoji";
import { ChatServiceProvider } from "../../providers/chat-service/chat-service";
import { ComponentsModule } from "../../components/components.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ChatPage,
    ],
    imports: [
        IonicPageModule.forChild(ChatPage),
        ComponentsModule,
        CommonModule
    ],
    exports: [
        ChatPage
    ],
    providers:[
        ChatServiceProvider,
        EmojiProvider
    ]
})
export class ChatPageModule {}
