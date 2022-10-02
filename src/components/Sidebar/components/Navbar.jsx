import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss'



export function Navbar({list}) {
   return (
    <nav>
      <ul className='list_boards'>
        {list?.map(board => <Link className='title_board' key={board.id} to={`/boards/${board.id}`}>{board.attributes.name}</Link>)}
      </ul>
    </nav>
  )
} 