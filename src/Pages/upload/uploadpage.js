import React, { useState } from 'react';
import axios from 'axios';
import './uploadpage.css';
import { useNavigate} from 'react-router-dom';
import Navbar from '../../navbar/navbar';

function UploadPage({ history }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const navi=useNavigate();


  const handleTitle=(e)=>{
        const cv=e.target.value;
        const max=50;
        if(cv.length<=max){
          setTitle(e.target.value);
        }
        else{
          alert("Title should not be more than 50 characters");
        }
       
  }

  const handleDesc=(e)=>{
    const cv=e.target.value;
    const max=200;
    if(cv.length<=max){
      setDescription(e.target.value);
    }
    else{
      alert(" Description should not be more than 50 characters");
    }
   
   
}



  const handleUpload = async () => {
    try {
      if (!thumbnail || !video) {
        console.error('Please select both thumbnail and video files.');
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append('thumbnail', thumbnail);
      formData.append('video', video);

      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        alert("video uploaded successfully");
        navi("list")
        
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error uploading data:', error);
      });

    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <div style={{"backgroundColor":"black"}}>
      <Navbar></Navbar>
      <div className='heading_container'>
        <p>Upload a Video</p>
      </div>

      <div className="upload-container"> 
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitle}  />

        <label>Description:</label>
        <textarea value={description} onChange={handleDesc} />

        <label>Upload Thumbnail:</label>
        <input type="file" onChange={(e) => setThumbnail(e.target.files[0])} accept='image/*' />

        <label>Upload Video:</label>
        <input type="file" onChange={(e) => setVideo(e.target.files[0])} accept="video/*" />
       

        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}

export default UploadPage;
