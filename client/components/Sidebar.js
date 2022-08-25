import styles from '../styles/Sidebar.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import avatar1 from '../assets/avatar-1.webp'
// import avatar2 from '../assets/avatar-2.png'
// import avatar3 from '../assets/avatar-3.webp'
// import avatar4 from '../assets/avatar-4.webp'
import RoomAvatar from './RoomAvatar'

// const dummyChannel = [
//   {
//     roomId: 1,
//     roomName: 'general',
//     avatar: avatar1
//   },
//   {
//     roomId: 2,
//     roomName: 'position',
//     avatar: avatar2
//   },
//   {
//     roomId: 3,
//     roomName: 'money',
//     avatar: avatar3
//   },
//   {
//     roomId: 4,
//     roomName: 'social',
//     avatar: avatar4
//   }
// ]

function Sidebar() {
  const router = useRouter()
  const [channels, setChannels] = useState([])

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/getchannels`,
        )
  
        const data = await response.json()
        setChannels(data)

        router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`)
      }
      fetchData()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      {channels.map((row, i) => (
        <RoomAvatar key={row.roomId} 
          id={row.roomId} 
          name={row.roomName} 
          avatar={row.avatar}/>
      ))}
    </div>
  )
}

export default Sidebar