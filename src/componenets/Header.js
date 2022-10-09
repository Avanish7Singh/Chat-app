import React from 'react';
import styled from "styled-components";
import { Avatar } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import { HelpOutline } from '@mui/icons-material'

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder='Search' />
      </HeaderSearch>

      <HelpOut>
        <HelpOutline />
      </HelpOut>


    </HeaderContainer>
  )
}

const HeaderSearch = styled.div`
width: 40%;
border-radius: 6px;
align-items: center;
display: flex;
background-color: #421f44;
/* color: transparent; */
color: gray;
opacity: 1;
padding: 0 50px;
border: 1px gray solid;
input{
  background-color: transparent;
  border: none;
  outline: none;
  text-align: center;
  min-width: 30vw;
   color: white;
}
`

const HeaderContainer = styled.div`
display: flex;
position: fixed;
align-items: center;
padding: 10px 0;
justify-content: space-between;
width: 100%;
background-color: #3f0f40;
color: white;
`
const HeaderLeft = styled.div`
 /* flex:0.3; */
 width: 30%;
 margin-left: 20px;
 display: flex;
 align-items: center;
 >.MuiSvgIcon-root {
  margin-left: auto;
  margin-right: 20px;
 }
`
const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover{
  opacity: .8;
}
`

const HelpOut = styled.div`
/* flex: 0.3; */
width: 30%;
display: flex;
align-items: center;
>.MuiSvgIcon-root{
  margin-left:auto;
  margin-right: 20px;
} 
`
export default Header;

