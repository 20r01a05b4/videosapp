import React, { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';
import "./video.css"
import Navbar from '../../navbar/navbar';

function VideoPage() {

  const { state } = useLocation();
  const [videoinfo, setVideoInfo] = useState('');

  useEffect(() => {
    setVideoInfo(state);
    console.log('State in VideoPage:', state);
  }, [state]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="outercontanier">
   
        <video controls width="60%" height="400"  className="video_tag">
          <source src={state["video_url"]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="details">
          <div className='title' style={{"backgroundColor":"rgb(28,28,28"}}>
            <label>Title:</label>
            <p>{state["title"]}</p>
          </div>
          <div className='desc'  style={{"backgroundColor":"rgb(28,28,28"}}>
            <label>Description:</label>
            <p>{state["description"]}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
