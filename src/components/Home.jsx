import React, { useEffect,Suspense, useMemo } from 'react';
import { UseApi } from '../context/Context';
import LoadingBar from './LoadingBar';
const Sidebar=React.lazy(()=>import('./Sidebar'));

function Home() {
  const { videos,category } = UseApi();
  useEffect(()=>{window.scrollTo(0,0)},[]);

  const MemoizedCard=useMemo(()=>{
    return React.lazy(()=>import('./VideoCard'))
  },[category])

  return (
    <>
   <Suspense >
    <Sidebar/>
   </Suspense>
    <div className=' p-[2px] mt-14 mb-12 sm:mb-0 sm:ml-[140px]  flex flex-row items-center justify-center h-auto  flex-wrap' >
     

      {/* here I called videoCard and attach video data according to sideBar selection */}
      <Suspense fallback={<LoadingBar/>}>
       <MemoizedCard allVideos={videos}  />
      </Suspense>

    </div>


    </>

  )
}

export default Home
