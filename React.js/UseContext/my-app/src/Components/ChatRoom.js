import React, { useEffect } from "react";
import { CreateConnection } from "./Connecting";

export const ChatRoom=({room,setRoom})=>{
    const serverUrl = 'https://localhost:1234';
    useEffect(()=>{
        const Connection=CreateConnection(serverUrl,room)
        Connection.connect()
        // console.log(Connection)
        return()=>Connection.disconnect()
    },[room])
    return(
        <>
            <label>Choose The Chat Room : <select value={room} onChange={(e)=>setRoom(e.target.value)}>
            <option value='General'>General</option>
            <option value='Travel'>Travel</option>
            <option value='Music'>Music</option>
            </select> </label>
            <h1>Welcome to {room} room </h1>
        </> 
    )
}