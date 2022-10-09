import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material'
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase1';
import Message from './Message';

function Chat() {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId));

    const [roomMessages, loading] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp", 'asc')
    )

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomId, loading])
    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>#{roomDetails?.data().name}</strong>
                        </h4>
                        <StarBorderOutlined />
                    </HeaderLeft>
                    <headerRight>
                        <p>
                            <InfoOutlined /> Detail

                        </p>
                    </headerRight>
                </Header>
                <ChatMassages>
                    {
                        roomMessages?.docs.map((doc) => {
                            const { message, timestamp, user, image } = doc.data()
                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={image}
                                />
                            )
                        })
                    }
                    <ChatBottom ref={chatRef} />
                </ChatMassages>
                <ChatInput
                    chatRef={chatRef}
                    channelName={roomDetails?.data().name}
                    channelId={roomId}
                />
            </>
        </ChatContainer>
    )
}

export default Chat;

const ChatMassages = styled.div``;
const ChatBottom = styled.div`
padding-bottom: 200px;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
border: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
display: flex;
align-items: center;
>h4{
text-transform: lowercase;
margin-right: 10px;
}
>.MuiSvgIcon-root{
    font-size: 20px;
}
`;

const headerRight = styled.div`
>p{
    display: flex;
    align-items: center;
}
>p>.MuiSvgIcon-root{
    margin-right: 20px !important;
}
`;


const ChatContainer = styled.div`
flex:.1;
flex-grow: 1;
overflow-y: scroll;
margin-top: 65px;
`