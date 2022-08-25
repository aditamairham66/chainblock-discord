import styles from '../styles/chatMessage.module.css'
import plusFilled from '../assets/icons/plus-filled.svg'
import sticker from '../assets/icons/sticker.svg'
import smiley from '../assets/icons/smiley.svg'
import gift from '../assets/icons/gift.svg'
import gif from '../assets/icons/gif.svg'
import Image from 'next/image'
import { DiscordContext } from '../context/context'
import { useContext } from 'react'

function ChatMessage() {
  const {
    messageText,
    setMessageText,
    placeholder,
    gun,
    roomName,
    currentAccount,
    currentUser,
    } = useContext(DiscordContext)

  const sendMsg = (e) => {
    e.preventDefault()
    if (messageText.trim() === '') return

    const messagesRef = gun.get(roomName)

    const newMessage = {
        sender: currentUser.name,
        avatar: currentUser.avatar
          ? currentUser.avatar
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU',
        content: messageText.trim(),
        createdAt: Date().substring(4, 11),
        messageId: Date.now(),
      }
  
      messagesRef.set(newMessage)
      setMessageText('')
  }
  
  return (
    <form className={styles.chatInputContainer} 
        onSubmit={e => sendMsg(e)}>
        <div className={styles.chatInputWrapper}>
            <div className={styles.svgContainer}>
                <Image
                    height={25}
                    width={25}
                    src={plusFilled}
                    className={styles.svg} />
            </div>
            <input type='text'
                className={styles.chatInput} 
                value={messageText}
                onChange={e => setMessageText(e.target.value)} 
                disabled={currentAccount.name}
                placeholder={placeholder} />

            <div className={styles.svgContainer}>
                <Image height={25} width={25} src={gift} className={styles.svg} />
            </div>
            <div className={styles.svgContainer}>
                <Image height={25} width={25} src={gif} className={styles.svg} />
            </div>
            <div className={styles.svgContainer}>
                <Image height={25} width={25} src={sticker} className={styles.svg} />
            </div>
            <div className={styles.svgContainer}>
                <Image height={25} width={25} src={smiley} className={styles.svg} />
            </div>
        </div>
    </form>
  )
}

export default ChatMessage