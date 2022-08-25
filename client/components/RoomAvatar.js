import Image from 'next/image'
import { useRouter } from 'next/router'
import roomStyle from '../styles/roomAvatar.module.css'

function RoomAvatar({id, avatar, name}) {
  const router = useRouter()
  const changeUrl = () => {
    router.push(`?channel=${id}&name=${name}`)
  }

  return (
    <div className={roomStyle.wrapper} 
        onClick={changeUrl}>
        <div className={roomStyle.roomAvatar}>
            <Image
                src={avatar}
                className={roomStyle.roomAvatarImage}
                height={48}
                width={48}
                alt={name} />
        </div>
    </div>
  )
}

export default RoomAvatar