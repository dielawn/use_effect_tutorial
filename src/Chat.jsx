import React, { useState, useEffect } from "react";
import { createConnection } from './chat'


export default function ChatRoom({roomId}) {

    const [serverUrl, setServerUrl] = useState('https://localhost:1234')

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId)
        connection.connect()
        return () => connection.disconnect()
    }, [roomId, serverUrl])
    return <h1>Welcome to the {roomId} room!</h1>
}