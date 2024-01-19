import {createContext, useState,useContext, useEffect} from 'react';
import './App.css';
import { Home } from './Home';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { Video } from './Components/Video';
import { CreateConnection } from './Components/Connecting';
import { ChatRoom } from './Components/ChatRoom';
import { Notification } from './Components/Notification';
import { Theme } from './Components/Theme';

export const UserContext=createContext()
export const ChannelContext=createContext()
export const ChangeTheme=createContext()


function App() {
  const [state,setState]=useState('hi')
  const[isplaying,setisPlaying]=useState(false)
  const[room ,setRoom]=useState('General')
  const[theme,setTheme]=useState(false)
  const[color,setColor]=useState('light')

  // useEffect(()=>{
  //   const Connection=CreateConnection()
  //   Connection.connect();
  //   // console.log(Connection)
  //   return()=>Connection.disconnect()
  // },[])
  return (
    <div className="App">
        <p>{state}</p>
        <UserContext.Provider value={state}>
          <ChannelContext.Provider value={'I am John'}>
            <ChangeTheme.Provider value={{color,setColor}} >
            <p>{state} John</p>
            <Theme/>
            <b><Home/></b>
            </ChangeTheme.Provider>
          </ChannelContext.Provider>
        </UserContext.Provider>
        <Button/>
        <Input/>
        <div style={{marginTop:'30px'}} >
        <button onClick={()=>setisPlaying(!isplaying)}>{isplaying?'Pause':'Play'}</button>
        <Video  isplaying={isplaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"/>
        <h1>Welcome</h1>
        </div>
        <ChatRoom room={room} setRoom={setRoom} />
        <Notification theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
