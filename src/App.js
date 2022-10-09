import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './componenets/Header';
import styled from 'styled-components';
import SideBar from './componenets/SideBar';
import Chat from './componenets/Chat';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <AppBody>
          <SideBar />
          <Routes>
            <Route path="/" exact element={ <Chat />}/>
             
          </Routes>
        </AppBody>
      </Router>

    </div>
  );
}

const AppBody = styled.div`
display: flex;
height: 100vh;
`

export default App;
