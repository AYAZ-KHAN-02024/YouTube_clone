import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import VideoCard from './VideoCard';
import { FetchApi } from '../utils/Api';
import ReactPlayer from 'react-player'
import SubscribeBtn from './SubscribeBtn';
import VideoComment from './VideoComment';
import SaveIcon from './SaveIcon';

function VideoInfo() {
  const { id, channelId } = useParams();
  const [video, setVideo] = useState(null);
  const [relVideo, setRelVideo] = useState([]);
  const [info, setInfo] = useState(null);
  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);
  const [commentBtn, setCommentBtn] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);

    FetchApi(`videos?part=snippet,statistics&id=${id}`)
      .then((obj) => {
        //get first object from the array
        setVideo(obj.data.items[0]);
      })
      .catch((error) => console.log(error - 'something wrong in api'))


    FetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((obj) => {
        setRelVideo(obj.data.items ? obj.data.items : obj.data.error);
      })
      .catch((error) => console.log(error - 'something wrong in api'))


    FetchApi(`channels?part=snippet&id=${channelId}`)
      .then((res) => {
        setInfo(res.data.items[0]);
      })
      .catch((error) => console.log(error - 'something wrong in api'))


  }, [id])


  return (
    <div className='p-[1px] mt-14 w-screen' >

      {/* video info  */}
      {video?.snippet &&
        <div className=" lg:w-[calc(100vw-340px)] w-screen flex flex-col items-center justify-center relative  lg:h-auto rounded-md mb-1 lg:border-r-[1px] lg:border-black">

          {/* video  player */}
          <div className='h-[33vh]  mt-0 md:h-[68vh] xl:h-[87vh] w-full  '>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              controls={true} width='100%' height='100%' />
          </div>
          <hr className=' w-full' />

          {/* viewCount and publish date */}
          <p className='p-2  text-slate-900  bg-blue-300 text-xs sm:text-sm  md:text-sm lg:text-base font-bold w-full'>{video.snippet.title}</p>
          <p className='w-full bg-blue-300 text-sm text-slate-800 pr-5 pl-5 p-1 flex flex-row justify-between items-center'>
            {parseInt(video.statistics.viewCount).toLocaleString('en-IN')} views
            <span>Published at - {video.snippet.publishedAt.substring(0, 10)}</span>
          </p>


          {/* channel info  like,subscriber,channel name etc..*/}
          <div className='p-1 bg-blue-400 flex flex-row items-center  flex-wrap sm:justify-between sm:flex-nowrap  w-full'>

            <div className='p-2 rounded-md bg-blue-300 flex flex-row items-center justify-between w-full m-1'>

              <Link to={`/channel/${channelId}`}>
                <div className=' flex flex-row items-center bg-indigo-400 p-2 rounded-lg cursor-pointer'>
                  <img src={info?.snippet?.thumbnails?.medium?.url} className='w-8 sm:w-10   rounded-full' alt="N/A" />
                  <p className=' m-1 text-slate-900 text-xs lg:text-sm'>
                    {video.snippet.channelTitle}</p>
                </div>
              </Link>

              <div className=' flex flex-col items-center m-1'>
                <p className='  text-slate-900 text-xs lg:text-sm bg-indigo-400 p-2 rounded-2xl'>Subscriber</p>
                <p className=' text-slate-900 text-xs lg:text-sm'>{parseInt(info?.statistics?.subscriberCount).toLocaleString('en-IN')}</p>
              </div>
            </div>

            <div className='p-3  flex flex-row items-center justify-between w-full'>
              <div className=' flex flex-col items-center rounded-lg'>
                <i className={`text-xl sm:text-2xl  md:text-2xl lg:text-2xl xl:text-3xl 
                ${like ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"} `}
                  onClick={() => {
                    setLike(!like);
                    setDislike(false);
                  }} title='I have not access of dataBase,so you can only click,like count will not change'
                ></i>
                <p className=' text-slate-900 text-xs  lg:text-sm'>
                  {video.statistics.likeCount}
                </p>
              </div>

              <div className=' flex flex-col items-center  rounded-lg'>
                <i className={`text-xl sm:text-2xl  md:text-2xl lg:text-2xl xl:text-3xl 
                ${dislike ? "fa-solid fa-thumbs-down" : "fa-regular fa-thumbs-down"}`}
                  onClick={() => {
                    setDislike(!dislike);
                    setLike(false)
                  }}></i>
                <p className=' text-slate-900 text-xs lg:text-sm'>N/A</p>
              </div>

              <div className=' flex flex-col items-center  rounded-lg'>
                <i className="text-xl sm:text-2xl  md:text-2xl lg:text-2xl xl:text-3xl fa-solid fa-download"></i>
                <p className=' text-slate-900 text-xs lg:text-sm'>Download</p>

              </div>


              <div className=' flex flex-col items-center justify-center rounded-lg'>

                {/* save icon for saving video  */}
                {video && <SaveIcon videoData={video} Cs1={"cursor-cell text-xl sm:text-2xl  md:text-2xl lg:text-2xl xl:text-3xl"} Cs2={"text-slate-300 text-xs lg:text-sm"} />}
              </div>


              <div className=' flex flex-col items-center  rounded-lg' title='you can subscribe and save in subscription but subscriber not increase because i have not access of dataBase'>

                {/* subscribe button with dynamic response */}
                {info && <SubscribeBtn currentInfo={info} />}
              </div>

            </div>

          </div>


          {/* this is for comments */}
          <div className='p-5 bg-blue-300 flex flex-col   w-full  '>

            <button className=' text-xs sm:text-sm  md:text-sm lg:text-base bg-violet-500 p-3 rounded-md shadow-md shadow-slate-600'
              onClick={() => { setCommentBtn(!commentBtn) }}>
              {commentBtn ? 'Hide Comments' : "show comments......."}
            </button>

            {(info && commentBtn) && <VideoComment id={id} />}

            {(info && commentBtn) &&
              <button className=' text-xs sm:text-sm  md:text-sm lg:text-base bg-violet-500 p-3 rounded-md shadow-md shadow-slate-600 '
                onClick={() => {
                  setCommentBtn(!commentBtn);
                  window.scrollTo(0, 0);
                }}>
                {commentBtn ? 'Hide Comment' : "show comment......."}
              </button>
            }

          </div>

        </div>

      }


      {/* suggested video  */}
      <div className='relative lg:right-[4px]  flex flex-row items-center justify-center flex-wrap right-0 lg:block  lg:fixed lg:h-[93vh] lg:top-16 lg:overflow-y-scroll'>
        {relVideo && <VideoCard allVideos={relVideo} />}
      </div>


    </div>
  )
}

export default VideoInfo
