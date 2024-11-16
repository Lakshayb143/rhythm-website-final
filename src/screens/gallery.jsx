import { useEffect, useState } from "react";
import Navbar from "./navbar.jsx";
import axios from "axios";
import "../style/gallery.css";
import EmblaCarousel from "./EmblaCarousel.jsx";

const Gallery = () => {
   const [images, setImages] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

  const OPTIONS = { dragFree: true, loop: true }
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const API = "http://13.233.201.180:8081/getImages";

  useEffect(() => {
     const FetchImages = async () => {
       try {
        const response = await axios.get(API);
        setImages(response.data);
        setLoading(false);
        console.log(images);
       } catch (error) {
         setLoading(false);
         setError("Cannot fetch images due to error", error);
      }
    };
     FetchImages();
  }, []);

  return (
    <div className="h-screen w-screen bg-background-color overflow-x-hidden">
      <Navbar />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Gallery;