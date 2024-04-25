import { Link } from 'react-router-dom';
import SaveIcon from './SaveIcon';
import LazyLoad from 'react-lazy-load';
import LoadingBar from './LoadingBar';
import React from 'react';

function VideoCard({ allVideos }) {

  if (allVideos.length===0) {
    return(
      <>
        <LoadingBar/>
      </>
    )
  }

  return (
    <>
      {
        allVideos.length > 0 && allVideos.map((val, index) => {
          return (
            <div
              key={val+index} className=' justify-self-center  cursor-text' >
              
              <div className="hover:brightness-95 w-[calc(100vw-18px)] sm:w-80 m-2  p-2 bg-[#d6e1fe] bg-opacity-100 rounded-md h-[360px] md:w-72  shadow-md shadow-[#7888ff]">


                <Link

                  to={val?.id?.kind === 'youtube#channel'
                    ? '/channel/' + val.id.channelId
                    : '/video/' + (val.id.videoId ? val.id.videoId : val.id.playlistId) + "/" + val.snippet.channelId}
                >
                  <LazyLoad offsetVertical={200} >

                    <img src={val?.snippet?.thumbnails?.medium?.url}
                      className={`cursor-pointer text-lg w-full h-52 
                  ${val.id.kind == 'youtube#channel' ? "rounded-full" : "rounded-md"} opacity-85 border-[1px] border-gray-400`} alt='thumbnail not available' title='redirect to full page' />
                  </LazyLoad>

                  <LazyLoad offsetVertical={200} >

                  <p className='  text-[#2e2e9c]'>

                    {val?.snippet?.title.length > 50
                      ? val?.snippet?.title.substring(0, 50) + '...'
                      : val?.snippet?.title}
                  </p>
                  </LazyLoad>

                </Link>

                <LazyLoad offsetVertical={200} >

                <Link to={`/channel/${val?.snippet?.channelId}`} >
                  <p className=' text-base text-slate-700 flex flex-row items-center cursor-grab' title='redirect on channel page'>
                    {val.snippet.channelTitle && (val.snippet.channelTitle.length > 22
                      ? val.snippet.channelTitle.substring(0, 22) + "..."
                      : val.snippet.channelTitle
                    )}
                    <i className="fa-solid fa-circle-check m-1"/></p>
                </Link>
                </LazyLoad>

                <LazyLoad offsetVertical={200} >

                <p className=' text-sm text-slate-700 flex flex-row items-center'>
                  Published at : {val.snippet.publishedAt ? val.snippet.publishedAt.substring(0, 10) : "wait..."}
                </p>
                </LazyLoad>

                <LazyLoad offsetVertical={200} >
                <div className=' relative top-5'>
                  <SaveIcon videoData={val} Cs1={"absolute bottom-[-12px] left-[2px] cursor-cell text-xl sm:text-xl  "}
                    Cs2={"absolute top-2 text-slate-300 text-xs lg:text-sm"} />

                </div>
                </LazyLoad>

              </div>
            </div>
          )
        })

      }
    </>
  )
}

export default VideoCard



