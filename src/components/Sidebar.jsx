import { UseApi } from '../context/Context';
import React from 'react';

//inside this array available all font awesome icon and required text for sidebar 
const innerText = [
  { id: 1, text: 'Nature', icon: 'fa-solid fa-house' },
  { id: 2, text: 'Tech', icon: 'fa-solid fa-laptop' },
  { id: 3, text: 'Coding', icon: 'fa-solid fa-code' },
  { id: 4, text: 'Podcast', icon: 'fa-solid fa-microphone' },
  { id: 5, text: 'Song', icon: 'fa-solid fa-headphones' },
  { id: 6, text: 'Kids', icon: 'fa-solid fa-child' },
  { id: 7, text: 'Drama', icon: 'fa-solid fa-theater-masks' },
  { id: 8, text: 'Education', icon: 'fa-solid fa-graduation-cap' },
  { id: 9, text: 'Motivation', icon: 'fa-solid fa-lightbulb' },
  { id: 10, text: 'Business', icon: 'fa-solid fa-briefcase' },
  { id: 11, text: 'Cooking', icon: 'fa-solid fa-utensils' },
  { id: 12, text: 'Music', icon: 'fa-solid fa-music' },
  { id: 13, text: 'Fashion', icon: 'fa-solid fa-tshirt' },
  { id: 14, text: 'Comedy', icon: 'fa-solid fa-laugh' },
  { id: 15, text: 'Travel', icon: 'fa-solid fa-plane' },
  { id: 16, text: 'Beauty', icon: 'fa-solid fa-heart' },
  { id: 17, text: 'Gaming', icon: 'fa-solid fa-gamepad' },
  { id: 18, text: 'Sports', icon: 'fa-solid fa-football-ball' },
  { id: 19, text: 'Gym', icon: 'fa-solid fa-dumbbell' },
  { id: 20, text: 'News', icon: 'fa-solid fa-newspaper' },
];
function Sidebar() {
    const {category,setCategory}=UseApi();

  return (
    <div  className='sm:top-14 p-1 sm:p-2 w-screen border-none sm:border-r-2 bg-blue-300 z-20  sm:border-r-blue-950 fixed bottom-0 flex flex-row sm:flex-col items-center h-12 
    sm:h-[calc(100vh-48px)] sm:w-40 sm:overflow-y-scroll sm:overflow-x-hidden overflow-x-scroll '>

      {
        innerText && innerText.map((val)=>{

        return(
        
        <button key={val.id}  className={`mr-1 sm:mt-1 text-blue-950 hover:text-white hover:bg-blue-900 rounded-md p-2 text-xs sm:text-base  border-none  w-36 flex items-center justify-center ${category===val.text ?"bg-blue-900 text-white": 
        'bg-[#b5d9fb]'} shadow-sm shadow-[#6d67e0]`}
          onClick={(e)=>{
            setCategory(e.target.innerText);
            window.scrollTo(0,0);
          }}>
            <i className={`${val.icon} mr-2 text-sm sm:text-xl`}/>{val.text}
        </button>
          )
        })
      }
      
    {/* this is basic footer  */}
    <div className=' text-sm text-slate-900 text-center hidden sm:block'>
        &copy;Md Ayaz khan,{new Date().getFullYear()}
    </div>

    </div>
  )
}

export default Sidebar
