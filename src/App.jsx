/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Counter from './Counter'
import Todo from './Todo'

function App() {


  return (
    <div className='bg-violet-100 h-screen'>
      <div>
        <div className='flex flex-col items-center justify-center w-1/2 mx-auto gap-4'>
          <Counter/>
          <Todo/>
      </div>

      </div>
    </div>
  )
}

export default App
