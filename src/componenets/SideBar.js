import React from 'react';
import styled from 'styled-components';
import { FiberManualRecord, Create } from '@mui/icons-material'
import { InsertComment, Inbox, Add, ExpandMore, Drafts, BookmarkBorder, PeopleAlt, Apps, FileCopy, ExpandLess } from '@mui/icons-material'
import SideBarOptions from './SideBarOptions';
import { db } from '../firebase1'
import { useCollection } from 'react-firebase-hooks/firestore';
function SideBar() {
    const [channels, loading, error] = useCollection(db.collection('rooms'));
    // console.log(channels)
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Slack</h2>
                    <h3>
                        <FiberManualRecord />
                        Avanish Singh
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>
            < SideBarOptions Icon={InsertComment} title="Threads" />
            < SideBarOptions Icon={Inbox} title="Mentions & reactions" />
            < SideBarOptions Icon={Drafts} title="Save items" />
            < SideBarOptions Icon={BookmarkBorder} title="Chennel browser" />
            < SideBarOptions Icon={PeopleAlt} title="People & user groups" />
            < SideBarOptions Icon={Apps} title="Apps" />
            < SideBarOptions Icon={FileCopy} title="File browser" />
            < SideBarOptions Icon={ExpandLess} title="Show less" />
            <hr />
            < SideBarOptions Icon={ExpandMore} title="Channels" />
            <hr />
            < SideBarOptions addChannelOption Icon={Add} title="Add channel" />


            {
                channels?.docs.map((doc) => (
                    < SideBarOptions
                        key={doc.id}
                        id={doc.id}
                        title={doc.data().name}
                    />
                )

                    // console.log("data",doc.data().name)
                    // // console.log(channels)
                )
            }





        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
color: white;
background-color: #3f0f40;
/* width: 30%; */
flex: .3;
margin-top: 60px;
>hr{
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
}
`
const SidebarInfo = styled.div`
flex: 1;
> h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}
> h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}

>h3 >.MuiSvgIcon-root {
    font-size: 14px;
    color: green;
}
`
const SidebarHeader = styled.div`
display: flex;
padding: 13px;

>.MuiSvgIcon-root{
    padding: 8px;
    font-size: 18px;
    color: #49274b;
    background-color: white;
    border-radius: 999px;

}
`

export default SideBar