import React, { useState } from 'react'
import styled from 'styled-components';
import {Button} from '@mui/material'
import { db } from '../firebase1';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import user from '../image/user.jpg'

function ChatInput({channelId, channelName, chatRef}) {
//    console.log(user,"***********")
    const [input , setInput] = useState('');
    const sendMessage = (e) =>{
        e.preventDefault();
        console.log(channelId)
       if(!channelId){
        return false;
       }
      
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:"Avanish",
            image:"https://miro.medium.com/max/775/0*rZecOAy_WVr16810"
        })

        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
       setInput('');
    }
  return (
    <ChatInputContainer>
        <form >
            <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder={`message #${channelName}`} />
            <Button hidden type='submit' onClick={sendMessage}>
                send
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
> form{
    position: relative;
    display: flex;
    justify-content: center;
}
> form >input{
    position: fixed;
    bottom: 30px;
    width: 60%;
    /* height: 2rem; */
    border: 1px solid gray;
    border-radius: 3px;
    padding: 15px;
    font-size: large;
}
> form > Button{
    display: none !important;
}
`;