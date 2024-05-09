import React, { useEffect} from 'react';
import { UseApi } from '../context/Context'
import VideoCard from './VideoCard';

function SearchedVideos() {
    const { srhVideos, search } = UseApi();
    useEffect(()=>{window.scrollTo(0,0)},[]);

    return (
        <>
            <h1 className='self-center mt-14 m-1 text-indigo-500'>{search ? "Searched For - "+search :"waiting for search...."}</h1>
            <div className=' p-[2px] mt-1 flex flex-row items-center justify-center h-auto  flex-wrap' >

         {/* here we call videoCard and attach video data according to search input */}
               {srhVideos && <VideoCard allVideos={srhVideos} />} 

            </div>

           
        </>
    )
}

export default SearchedVideos
