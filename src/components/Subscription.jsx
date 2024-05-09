import React, { useEffect } from 'react'
import { UseApi } from '../context/Context'
import SubscribeBtn from './SubscribeBtn';
import { Link } from 'react-router-dom';

function Subscription() {
  const { subs } = UseApi();
  
  if (subs.length == 0) {
    return (
      <div className='load '>
        <i className="fa-solid fa-spinner loading m-2"></i>
        empty
      </div>
    )
  }

  useEffect(() => { window.scrollTo(0, 0) }, []);

  return (
    <div className='p-[6px] mt-16 flex flex-row items-center justify-center h-auto  flex-wrap'>
      {subs && subs.map((val) => {
        return (
          <div key={val?.id} className='p-1 box-content flex flex-col bg-indigo-300 shadow-md shadow-slate-400 rounded-md  items-center justify-center m-1 w-64 h-64'>

          <Link to={`/channel/${val.id}`} className=' flex flex-col items-center justify-center ' >
            <img src={val?.snippet?.thumbnails.medium.url} className=' rounded-full   w-24  sm:w-36 m-1 self-center' alt='logo not available' />
            {
              <p className='bg-slate-200 p-2 rounded-md text-base text-indigo-500 text-center cursor-grab m-1 self-center'>
                {val?.snippet?.title}
              </p>
            }

            </Link>

            <SubscribeBtn currentInfo={val} />

          </div>
        )
      })
      }
    </div>
  )
}

export default Subscription
