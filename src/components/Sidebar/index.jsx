import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, addNewBoard } from '../../store/features/boardSlice';
import { Row, Col } from 'react-bootstrap';
import { Spinner } from '../../common/Spinner';
import { Navbar } from './components/Navbar';
import './Sidebar.scss';


export function Sidebar() {

  const boards = useSelector(state => state.boards.boards);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchBoards());
    setIsLoading(false);
  }, [dispatch])

  function handleCreateBoard() {
     addNewBoard('NewBoard')
  }

  return (
    <div className='sidebar'>
        <h1 className='logo'>kanban</h1>

        <Row style={{ marginBlock: '20px' }}>
        <Col>
        <h3 className='sidebar__title'>All boards ({boards?.length})</h3>
        </Col>
      </Row>
      {isLoading ? <Spinner /> : <Navbar list={boards} />}

      <button className='create_board' onClick={handleCreateBoard}>+ Create new board</button>


    </div>
  )
}
