/* eslint-disable no-unused-vars */

import React from 'react'
import { useSelector } from 'react-redux'

function Todo() {
    const {todo, loading, initialRender,error} = useSelector(state => state.todo)
    
    let content = null

    if (initialRender) {
        content = <p className='text-center text-2xl'>Please click the button to load the todo list</p>
    } else if (loading) {
        content = <p className='text-center text-2xl'>Loading...</p>
    } else if (error) {
        content = <p className='text-center text-2xl text-red-500'>Error: {error}</p>
    } else if (todo){
        content = <p className='text-center text-2xl'>Todo: {todo}</p>
    }
    else {  
        content = <p className='text-center text-2xl'>Whats happening</p>
    }


  return (
    <div className='p-5 border bg-violet-500 w-full rounded-lg mt-10'>
        <div className='bg-white rounded-sm'>
          {
            content
          }
        </div>
    </div>
  )
}

export default Todo