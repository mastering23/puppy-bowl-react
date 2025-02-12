import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { Api } from './components/Api';
import './index.css';
import { Details } from './components/Details';
import { SearchBar } from './components/SearchBar';

const App = () =>{


  return (
    <>
    <Routes>
    <Route  path ="/api" element={<Api />} />
    <Route  path ="/details" element={<Details />} />
    <Route  path ="/search" element={<SearchBar />} />
    </Routes>

    </>
  )
}

export default App
