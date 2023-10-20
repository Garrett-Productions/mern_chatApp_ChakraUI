import React, { useEffect } from 'react'
import axios from 'axios'

const ChatPage = () => {
  const [chats, setChats] = useState([])

  const fetchChats = async() => {
    const data = await axios.get('/api/chat');
    console.log(data)
    setChats(data)
  };
  useEffect(()=> {
    fetchChats();
  }, [])
  return (
    <div>
      {chats.map()}
    </div>
  )
}

export default ChatPage