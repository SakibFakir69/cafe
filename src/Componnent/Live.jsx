import React from 'react'

function Live({live}) {
  return (
    <div className='text-center border-2 p-4 shadow-lg rounded-md mt-4 '>

        <p className='text-balance font-bold tracking-wider '>{live}</p>



    </div>
  )
}

export default Live