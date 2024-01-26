import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoPage from "./Pages/video/video";
import ListingPage from "./Pages/list/listingpage";
import UploadPage from "./Pages/upload/uploadpage";

const Rout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/video/:id" element={<VideoPage></VideoPage>} />
        <Route path="/list" element={<ListingPage></ListingPage>} />
        <Route path="/" element={<UploadPage></UploadPage>} />
      </Routes>
    </Router>
  );
};

export default Rout;
