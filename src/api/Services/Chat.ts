import { ChatProps } from "../../Pages/Chat/types";
import { FetchData } from "../fetch"

export const getAllChatMessages=()=>{
    return FetchData({});
}

export const sendMessage=async(messageData:Partial<ChatProps>)=>{
    return await FetchData({
        method:'POST',
        data:messageData
    })
}