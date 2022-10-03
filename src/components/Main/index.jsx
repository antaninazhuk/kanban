import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Page} from './components/Page';



export function Main() {
  return (
    <>           
        <Routes>                 
            <Route path='/boards/:id' element={<Page />} />          
        </Routes>
    </>
  )
}