'use strict'

export const api: string = "";

//dictionarys
export const userPrefs: string = "user";
//items
export const userItem: string = "user";
export const surveys:string = "surveys";

export const coach: string = "Coach";
export const coachee: string = "Coachee";


export const typeChat:string = "Chat";
export const typeSurvey:string = "Survey";

export const groupAll: string = "All";
export const group_2: string = "group_2";
export const group_3: string = "group_3";

export const openText    = {key: "openText", value: "Open text"};
export const checkBox    = {key: "checkBox", value: "Multi select"};
export const radioButton = {key: "radioButton", value: "Single select"};
export const selectImage = {key: "selectImage", value: "Select image\""};
export const rank        = {key: "rank", value: "Rank question"};
export const howMuch     = {key: "howMuch", value: "How much question"};

export const typeQuestion:any = [{key: openText.key, value: openText.value},
    {key: checkBox.key, value: checkBox.value},
    {key: radioButton.key, value: radioButton.value},
    {key: selectImage.key, value: selectImage.value},
    {key: rank.key, value: rank.value},
    {key: howMuch.key, value: howMuch.value}
];

export function stringGen()
{
    let text = " ";

    let charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < 15; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

export function mailFormat(value:string): boolean {

    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return !(value && value != "" && (value.length <= 5 || !EMAIL_REGEXP.test(value)));

}

export function getObjectString(object:any){
    let result: string = "";
    for (let key in object) {
        if (object[key] != 0) result += key+": "+object[key]+"; "
    }
    return result;
}

export function getObjectKeyString(object:any){
    let result: string = "";
    for (let key in object) {
        if (object[key] != 0) result += key+"; "
    }
    return result;
}