import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




export const fetchBoards = createAsyncThunk(
    'boards/fetchBoards',
    async function(_, { rejectWithValue }) {
  

        try {
            const response = await fetch('http://localhost:1337/api/boards');

            if (!response.ok) {
                throw new Error("Server error");
            }

            const data = await response.json();
            return data.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


  export const addNewBoard = createAsyncThunk(
    'boards/addNewBoard',
    async function (text, { rejectWithValue, dispatch }) {
        
      try {
        const board = { 
            "data":{
          'name': text
        }
    }
  
        const response = await fetch('http://localhost:1337/api/boards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(board)
        });
  
        if (!response.ok) {
          throw new Error("Can't add task. Server error");
        }
  
        const data = await response.json();
           
        dispatch(addBoard(data))
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  )


const boardSlice = createSlice({
    name: 'boards',
    initialState: {
        boards: [],
        status: null,
        error: null
    },
    reducers: {     
        addBoard(state, action) {
            state.boards.push(action.payload)
        }
      },
         
   
    extraReducers: {
        [fetchBoards.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchBoards.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.boards = action.payload;
        },
        [fetchBoards.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})


export const { addBoard } = boardSlice.actions;
export default boardSlice.reducer;