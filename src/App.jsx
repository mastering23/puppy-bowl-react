import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { Api } from './components/Api';
import './index.css';

const App = () =>{


  return (
    <>
    <Routes>
    <Route  path ="/" element={<Api />} /> 

    </Routes>

    </>
  )
}

export default App
