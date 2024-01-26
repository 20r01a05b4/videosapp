import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import "./listingpage.css"

function ListingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the backend
        const response = await axios.get('http://localhost:5000/list');
        setData(response.data["data"]);
        console.log("the data is ");
        console.log(response.data["data"]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="heading"><p>list of videos</p></div>
      <div className='videocontainer'>
          
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item._id} className='video_inner_container'>
                <Link to={`/video/${item._id}`} state={ item }  style={{"textDecoration":"none"}}>
                  <img src={item.image_url} alt={item.title} width={"320px"}  height={"200px"}  className='image'/>
                  <p className="title_text">{item.title}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          
          )}
      </div>
    </div>
  );
}

export default ListingPage;
