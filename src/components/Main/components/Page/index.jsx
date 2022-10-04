import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../Header'
import { Board } from '../Board'

export function Page() {

   const {id} = useParams();

   return (
    <div>
        <Header id = {id} />
        <Board id = {id}/>
        
    </div>
  )
}
