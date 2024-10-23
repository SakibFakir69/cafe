import { prototype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types';
import React from 'react'
import Live from './Live';

function Bookmark({bookmarked,time}) {
    if(!bookmarked)
    {
        return null
    }
    
  return (
    <div className='w-1/4 bg-slate-100 mt-6'>
        {/* here we make left side tools show title add, remove and show time */}
        <h1>Bookmarked add : {bookmarked.length}</h1>
        <h2>Time neeed : {time}</h2>
        
        <div> 
            {
                bookmarked.map((book,key)=>(
                    <Live live={book.title}/>

                ))
            }
        

        
        </div>


    </div>
  )
}

Bookmark.prototype ={
    bookmarked : PropTypes.array.isRequired,
}

export default Bookmark