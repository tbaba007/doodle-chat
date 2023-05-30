import Card from "../../Components/Card"
import { convertTimeStampToDate } from "../../utils/common"
import chatStyles from "./Chat.module.scss"
import { ChatProps } from "./types"

const ChatList = (chatData: ChatProps) => {
  function Data(): JSX.Element {
    return (
      <section className={chatStyles.ChatContainer__chatList}>
        <label className={chatStyles.ChatContainer__author}>{chatData.author}</label>
        <label className={chatStyles.ChatContainer__message}>{chatData.message}</label>
        <label>{convertTimeStampToDate(chatData.timestamp!!)}</label>
      </section>
    )
  }
  return (
    <section>
      <Card>
        <Data />
      </Card>
    </section>
  )
}

export default ChatList
