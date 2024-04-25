import React, { useEffect } from 'react'
import { UseApi } from '../context/Context';
import VideoCard from './VideoCard';

function SavedVideos() {
 useEffect(()=>{
  window.scrollTo(0,0)
 },[])

 const{saveVideos}=UseApi();
 if(saveVideos.length===0 ){
  return(
    <div className='load '>
    <i className="fa-solid fa-spinner loading m-2"></i>
    empty...
  </div>
  )
}

  return (
    <div className=' p-[2px] mt-14 mb-12 sm:mb-0 flex flex-row items-center justify-center h-auto  flex-wrap' >
     { saveVideos && <VideoCard allVideos={saveVideos}/> }
     
    </div>
  )
}

export default SavedVideos
