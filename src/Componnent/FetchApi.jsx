import React, { useEffect, useState } from 'react'
import Blogs from './Blogs';


function FetchApi({handelBookmarked,handelTime}) {

    const [ blog , setblog ] = useState([]);

    useEffect(()=>{
        fetch('info.json')
        .then(res => res.json())
        .then( data => setblog(data))

    },[])
    console.log(blog)




  return (
    <div className='w-2/3 bg-pink-300'>
        <h1>Blogs</h1>
        {
            blog.length
        }

        {
            blog.map((post,key)=> <Blogs key={key} post={post} handelBookmarked={handelBookmarked} handelTime={handelTime}/>)
            /// transfer data to blogs here
        }



    </div>
  )
}

export default FetchApi
