import './App.css';
import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import useStyles from './styles'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Auth from './Component/Auth/Auth';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/auth" exact element={<Auth/>}/>
        </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;