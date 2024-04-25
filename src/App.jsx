import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from  'react-router-dom';
const Navbar=React.lazy(()=>import('./components/Navbar'));
import Home from './components/Home';
import VideoInfo from './components/VideoInfo';
import ChannelInfo from './components/ChannelInfo';
import SearchedVideos from './components/SearchedVideos';
import ErrorPage from './components/ErrorPage';
import LoginPage from './components/LoginPage';
import Subscription from './components/Subscription';
import SavedVideos from './components/SavedVideos';


function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Navbar/>
        </Suspense>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/video/:id/:channelId' element={<VideoInfo/>}/>
          <Route path='/channel/:id' element={<ChannelInfo/>}/>
          {/* <Route path='/search/:searchQuery' element={<SearchFeed/>}/> */}
          <Route path='/SearchedVideos' element={<SearchedVideos/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/savedVideo' element={<SavedVideos/>}/>
          <Route path='/subscription' element={<Subscription/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
