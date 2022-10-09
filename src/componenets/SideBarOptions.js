import React from 'react';
import styled from 'styled-components';
// import { db } from '../firebase';
import {db} from '../firebase1';
import {useDispatch} from 'react-redux'
import { enterRoom } from '../features/appSlice';

function SideBarOptions({Icon ,title, addChannelOption,id }) {
    const dispatch = useDispatch()
    const addChannel = () =>{
       const channelName = prompt("enter channel name");
       if(channelName){
        db.collection('rooms').add({
            name: channelName,
        })
       }
    }
    const selectChannel = () =>{
        if(id){
           dispatch(enterRoom({
            roomId:id,
           }))
        }
    }

    // console.log({title})

  return (
    <SOContainer
    onClick={addChannelOption? addChannel : selectChannel} 
    >      
        {Icon && <Icon fontSize="small" style ={{ padding:"10px", marginTop:"-9px"}} /> }
        {
            Icon ?
            ( 
            <h3>{title}</h3> 
            ): (
               <SOTitle>
                {/* console.log({title}) */}
               <span>#</span>{title}
               </SOTitle>
            )
        }
    </SOContainer>
  )
}

export default SideBarOptions;
const SOContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;
:hover{
    /* opacity: .9; */
    background-color: #340e36;
}
>h3{
    font-weight: 500;
    margin-top: -9px;
}
>h3>span{
    padding: 10px;
}
`
const SOTitle = styled.h3`
padding: 10px ;
font-weight: 300;
`