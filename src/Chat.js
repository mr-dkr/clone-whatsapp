import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import './Chat.css'
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));

    }, [])

    const sendMessage=(e)=>{
        e.preventDefault();
        console.log("You Types >>", input)
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name"> Divakar </span>
                    Hey Guys, How you doing?
                    <span className="chat__timestamp">12.00AM</span>
                </p>

            </div>
            <div className="chat__footer">
                    <InsertEmoticonIcon />

                <form action="">
                    <input value={input}  onChange = {e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                    <MicIcon />

            </div>
        </div>
    )
}

export default Chat
