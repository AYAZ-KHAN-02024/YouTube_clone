import React, { useEffect, useState } from 'react'
import { UseApi } from '../context/Context';

function SaveIcon({videoData,Cs1,Cs2}) {
    const{saveVideos,setSaveVideos}=UseApi();
    const[bookmarkIcon,setBookmarkIcon]=useState('fa-regular fa-bookmark');
    const[saveText,setSaveText]=useState('save');

    useEffect(()=>{
       if (videoData && !saveVideos.find(val=> 
        val.snippet.title=== videoData.snippet.title)){
          setBookmarkIcon('fa-regular fa-bookmark')
          setSaveText('save');
       }else{
        setBookmarkIcon('fa-solid fa-bookmark')
        setSaveText('saved');
       }

    },[videoData]);

    function setSave(){
        if(videoData && !saveVideos.find((val)=>
        val.snippet.title === videoData.snippet.title)){
            setSaveVideos([...saveVideos,videoData]);
            setBookmarkIcon('fa-solid fa-bookmark');
            setSaveText('saved');
        }else{
            setSaveVideos(saveVideos.filter((val)=>
            val.snippet.title !== videoData.snippet.title));
            setBookmarkIcon('fa-regular fa-bookmark')
            setSaveText('save');
        }
    }

    return (
        <>
            <i className={`${bookmarkIcon} ${Cs1}`} 
            onClick={() => 
            { videoData && setSave() }}/>
            <p className={`${Cs2} text-slate-800`}>{saveText}</p>
        </>
    )
}

export default SaveIcon
