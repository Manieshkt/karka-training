import React from 'react';

export const CreateConnection=(serverUrl,room)=>{
    return{
            connect(){
                console.log('✅ Connecting... to ' + room + 'room at ' + serverUrl)
            },
            disconnect(){
                console.log('❌ Disconnected. from '+ room + 'room at ' + serverUrl )
            }
        }
    
}