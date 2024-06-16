import React, { useEffect } from 'react'
import io from 'socket.io-client';
const Socket = () => {
    const [posts, setPosts] = useState([])
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const socket = io('http://localhost:5000');
    useEffect(()=>{

    })

  return (
    <div>
      
    </div>
  )
}

export default Socket
