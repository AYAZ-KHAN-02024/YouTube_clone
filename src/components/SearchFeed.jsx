import { UseApi } from '../context/Context';
import { Link, useLocation } from 'react-router-dom';
import {  useState } from "react";


//search input box
function SearchFeed() {
  const { setSearch } = UseApi();
  
  //this is for search input text
  const [dummy, setDummy] = useState('');
  const location = useLocation();

  function enterClick(e) {
    if (e.key === 'Enter') {
      setSearch(dummy)
    }
  }


  return (
    <div className=' flex flex-row h-8  ml-10  fixed sm:static sm:ml-14'>

      {
        location.pathname === '/SearchedVideos' ?
          <input type="text" placeholder='search...' dir='ltr' name='search' className=' p-1 border-none placeholder:text-black text-black bg-slate-200 rounded-s-lg h-full max-w-40 active:border-none'
            value={dummy} onChange={(e) => setDummy(e.target.value)} onKeyDown={(e) => enterClick(e)} autoFocus/>
          :
          <Link to='/SearchedVideos'>
            <input type="text" placeholder='search...' dir='ltr' className=' p-1 border-none placeholder:text-black text-black bg-slate-200 rounded-s-lg h-full max-w-40 active:border-none'
            />
          </Link>
          
        }


      <Link to={'/SearchedVideos'}>
        <i dir='rtl' className="fa-solid fa-magnifying-glass cursor-pointer active:scale-105 text-xl self-center bg-black text-blue-300 h-full rounded-s-lg p-1 font-extrabold " onClick={() => {
          setSearch(dummy)
        }} />
      </Link>

    </div>
  )
}

export default SearchFeed

