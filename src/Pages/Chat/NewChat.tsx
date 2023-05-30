
import chatStyles from './Chat.module.scss'
import { ChatProps } from './types';
const NewChat=(data:ChatProps)=>{
    return (
        <section className={chatStyles.ChatContainer__newChat}>
           <label>{data.message}</label> 
           <label>{data.timestamp}</label>
        </section>
    )
}

export default NewChat;