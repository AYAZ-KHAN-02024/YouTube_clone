import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchApi } from '../utils/Api';
import VideoCard from './VideoCard';
import SubscribeBtn from './SubscribeBtn';

function ChannelInfo() {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null); // Add state for errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelResponse = await FetchApi(`channels?part=snippet&id=${id}`);
        setInfo(channelResponse.data.items[0]);

        const videosResponse = await FetchApi(`search?channelId=${id}&part=snippet&order=date`);
        setVideos(videosResponse.data.items);
      } catch (error) {
        setError(error); // Set error state if there's an issue
      } finally {
        window.scrollTo(0, 0);
      }
    };

    fetchData();
  }, [id]);

  // Handle loading state or errors if needed
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  // Check if info is fetched before rendering content
  if (!info) {
    return <div>Loading channel info..</div>;
  }

  return (
    <div className='mt-14'>
      <div
        style={{
          background: 'radial-gradient(circle, rgba(161,230,254,1) 0%, rgba(4,28,184,1) 100%)',
        }}
        className='w-screen h-20 sm:h-32 flex justify-center items-center flex-col'
      >
        <img
          src={info?.snippet?.thumbnails?.medium?.url}
          className='rounded-full mt-32  w-24 sm:mt-44 sm:w-44 '
          alt='logo not available'
          onError={(e) => {
            e.target.src = 'fallback-image.png'; // Set a fallback image on error
          }}
        />

        <p className='bg-blue-800 shadow-sm shadow-slate-400 p-2 rounded-md text-base text-indigo-200 flex flex-row items-center cursor-grab'>
          {info?.snippet?.title} <i className="fa-solid fa-circle-check m-1" />
        </p>

        <p className='text-center text-sm text-slate-900'>
          Subscriber:-{parseInt(info?.statistics?.subscriberCount).toLocaleString('en-IN')}
        </p>

        {(info && info.id) && <SubscribeBtn currentInfo={info} />}
      </div>

      <hr />

      <div className='p-[2px] m-2 flex flex-row items-center justify-center h-auto  flex-wrap mt-32 sm:mt-40'>
        {videos && <VideoCard allVideos={videos} />}
      </div>
    </div>
  );
}

export default ChannelInfo;
