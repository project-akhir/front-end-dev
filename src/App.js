import './App.css';
import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import useStyles from './styles'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Auth from './Component/Auth/Auth';

function App() {
  const classes = useStyles()

  return (
    <BrowserRouter >
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/auth" exact element={<Auth/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;