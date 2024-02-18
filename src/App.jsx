import { useState } from 'react'
import Clock from './Clock'
import './App.css'
import ChatRoom from './Chat'
import AppChallenge1 from './Challenge1'
import Challenge2 from './Challenge2'
import Challenge3 from './Challenge3'
import Challenge4 from './Challenge4'
// import Challenge5 from './Challenge5'
import { createEncryptedConnection, createUnencryptedConnection } from './chat';
function App() {
  const [count, setCount] = useState(0)
  const [roomId, setRoomId] = useState('general')
  const [show, setShow] = useState(false)
  const [isEncrypted, setIsEncrypted] = useState(false)

  return (
    <>
    <Clock />
  
    <label htmlFor='roomSelect'>Choose the chat room:{' '}
      <select 
        id='roomSelect'
        value={roomId}
        onChange={e => setRoomId(e.target.value)}
        >
          <option value='general'>General</option>
          <option value='travel'>Travel</option>
          <option value='music'>Music</option>
        </select>
    </label>
    <button
      onClick={() => setShow(!show)}>{show ? 'Close Chat' : 'Open Chat'}
    </button>
    <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={e => setIsEncrypted(e.target.checked)}
        />
        Enable encryption
      </label>
      <hr />
    {show && <hr />}
    {show && <ChatRoom roomId={roomId} />}

    {/* <AppChallenge1 /> */}
    {/* <Challenge2 /> */}
    {/* <Challenge3 /> */}
    <Challenge4  roomId={roomId}
        createConnection={isEncrypted ?
          createEncryptedConnection :
          createUnencryptedConnection
        }
      />

    </>
  )
}

export default App
