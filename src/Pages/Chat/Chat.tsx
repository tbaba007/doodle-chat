import {useCallback, useEffect, useState} from 'react'

import Button from "../../Components/ui/Button";
import chatStyles from "./Chat.module.scss";
import { ChatProps } from './types';
import { getAllChatMessages } from '../../api/Services/Chat';

const Chat = () => {
  const [chatHistory,setChatHistory]=useState<ChatProps[]>([])
  const [newMessage,setNewMessage]=useState('');

  const getAllMessages=useCallback(async()=>{
      const response=await getAllChatMessages();
      setChatHistory(response);
  },[])

  useEffect(()=>{
    getAllMessages();
  },[newMessage,getAllMessages])

  return (
    <section className={chatStyles.ChatContainer}>
      <form>
      <section className={chatStyles.ChatContainer__footer}>
        <input
          type="text"
          placeholder="Message"
          required
          className={chatStyles.ChatContainer__chatInput}
        />
        <Button text="Send"/>
      </section>
      </form>
  
    </section>
  )
}

export default Chat
