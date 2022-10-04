import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards} from '../../store/features/boardSlice';
import { createBoard } from '../../services/boards';
import { Row, Col } from 'react-bootstrap';
import { Spinner} from '../../common/Spinner';
import { CreateBoardModal} from '../../common/CreateBoardModal';
import { Navbar } from './components/Navbar';
import './Sidebar.scss';


export function Sidebar() {

  const boards = useSelector(state => state.boards.boards);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleCreateBoard(boardName) {
    createBoard(boardName);
    setIsSend(true);
  }

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchBoards());
    setIsLoading(false);
  }, [isSend])

 

  return (
    <div className='sidebar'>
        <h1 className='logo'>kanban</h1>

        <Row style={{ marginBlock: '20px' }}>
        <Col>
        <h3 className='sidebar__title'>All boards ({boards?.length})</h3>
        </Col>
      </Row>
      {isLoading ? <Spinner /> : <Navbar list={boards} />}

      <button className='create_board' onClick={handleShow}>+ Create new board</button>
      <CreateBoardModal show={show} onShow={handleClose} onCreate={handleCreateBoard} />


    </div>
  )
}
