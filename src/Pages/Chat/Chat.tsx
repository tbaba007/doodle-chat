import { useCallback, useEffect, useState, useRef } from "react"
import moment from "moment"
import { ToastContainer, toast } from "react-toastify"
import Button from "../../Components/ui/Button"
import { getAllChatMessages, sendMessage } from "../../api/Services/Chat"
import chatStyles from "./Chat.module.scss"
import { ChatProps } from "./types"
import ChatList from "./ChatList"
import NewChat from "./NewChat"

const Chat = () => {
  const messageContainerRef = useRef<HTMLInputElement>(null)
  const [allChatList, setAllChatList] = useState<ChatProps[]>([])
  const [chatHistory, setChatHistory] = useState<ChatProps[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [chatId, setChatId] = useState<string | undefined>()
  const getAllMessages = useCallback(async () => {
    const response = await getAllChatMessages()
    setAllChatList(response)
  }, [])

  useEffect(() => {
    getAllMessages();
    if(messageContainerRef.current){
      messageContainerRef.current?.scrollIntoView(false);
    }
  }, [getAllMessages, chatId,chatHistory.length,allChatList.length])
 
  

  const onSend = async (event: React.FormEvent) => {
    event.preventDefault()
    const messageData: ChatProps = {
      author: "Tom",
      message: newMessage,
      timestamp: moment(new Date()).format("DD MMM YYYY HH:mm")
    }
    setChatHistory(prevArr => [...prevArr, messageData])
    const sendNewMessage:ChatProps=await sendMessage(messageData);
    if(!sendNewMessage._id){
      return toast.info('An error occured while sending the chat ')
    }
    setChatId(sendNewMessage._id)
    setNewMessage("")
  }

  return (
    <section ref={messageContainerRef} className={chatStyles.ChatContainer}>
      <div  className={chatStyles.ChatContainer__chatListContainer}>
        <section>
          {allChatList &&
            allChatList.map(chat => {
              return <ChatList key={chat._id} {...chat} />
            })}
        </section>

        <section className={chatStyles.ChatContainer__newChatContainer}>
          {chatHistory &&
            chatHistory.map(chat => {
              return <NewChat key={chat._id} {...chat} />
            })}
        </section>
      </div>

      <form onSubmit={onSend}>
        <section className={chatStyles.ChatContainer__footer}>
          <input
            type="text"
            placeholder="Message"
            value={newMessage}
            multiple
            required
            className={chatStyles.ChatContainer__chatInput}
            onChange={e => setNewMessage(e.target.value)}
          />
          <Button text="Send" />
        </section>
      </form>
      <ToastContainer />
    </section>
  )
}

export default Chat
