import { useState } from "react";
import Header from "./Componnent/Header";
import FetchApi from "./Componnent/FetchApi";
import Bookmark from "./Componnent/Bookmark";

function App() {

  const [ bookmarked , setbookmarked ] = useState([]);

  const handelBookmarked = (book)=>{
    
    const copy = [...bookmarked,book];
    setbookmarked(copy);

  }
  
   const [ timex , settime ] = useState(0);

  const handelTime = (id,time)=>{
    const updateTime = time+timex;
    settime(updateTime);

    const remanningPost = bookmarked.filter((item,key)=> item.id!==id);
    
    setbookmarked(remanningPost);
    console.log(remanningPost)

  }



  
  return (
    <div>
      <Header/>

      <div className="md:flex gap-6">
        <FetchApi handelBookmarked={handelBookmarked} handelTime={handelTime}/>

        <Bookmark bookmarked ={bookmarked} time={timex}/>
      </div>

      

      
      
    </div>
  );
}

export default App;
