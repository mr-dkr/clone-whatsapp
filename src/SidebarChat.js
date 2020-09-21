import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {
    const [seed,setSeed] = useState('');
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
       
    }, [])

    const createChat = ()=>{
      const roomName =   prompt("Please enter chat name")
      if(roomName){
      }

    }
    return  !addNewChat?(
        <div className="sidebarChat">
            <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message....</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h1>Add New Chat</h1>
        </div>
    );
}

export default SidebarChat