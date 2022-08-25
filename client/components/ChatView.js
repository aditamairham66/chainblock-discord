import { useContext } from 'react';
import { DiscordContext } from '../context/context';
import styles from '../styles/chatView.module.css';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import MsgCard from './MsgCard';

function ChatView() {
  const { state } = useContext(DiscordContext)

  const formattedMessagesArray = () => {
    const uniqueArray = state.messages.filter((value, index) => {
      const _value = JSON.stringify(value)

      return (
        index ===
        state.messages.findIndex(obj => {
          return JSON.stringify(obj) === _value
        })
      )
    })

    return uniqueArray
  }

  return (
    <div className={styles.chatView}>
      <ChatHeader/>
      <div className={styles.messagesContainer}>

        {formattedMessagesArray().map((row, i) => (
            <MsgCard
              key={i}
              avatar={row.avatar}
              sender={row.sender}
              timestamp={row.createdAt}
              content={row.content}
            />
          ))}

      </div>
      <ChatMessage/>
    </div>
  )
}

export default ChatView