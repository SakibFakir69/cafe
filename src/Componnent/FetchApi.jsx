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
    <div className='w-2/3 px-4'>
        

        {
            blog.map((post,key)=> <Blogs key={key} post={post} handelBookmarked={handelBookmarked} handelTime={handelTime}/>)
            /// transfer data to blogs here
        }



    </div>
  )
}

export default FetchApi
