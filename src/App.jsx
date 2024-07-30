import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Scroll from "./components/Scroll";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Preloader from "./components/Preloader";

const App = () => {
  const particlesInit = useCallback(async engine => {      
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterNews = async (category) => {
    let link = "";
    if (category && category !== "everything") {
      link = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=9a31c2dbe2834e0fb6adbd0eef97c804`;
    } else {
      link =
        "https://newsapi.org/v2/everything?q=keyword&apiKey=9a31c2dbe2834e0fb6adbd0eef97c804";
    }
    const { data } = await axios.get(link);
    setNews(data.articles);
    console.log(data.articles)
  };

  useEffect(() => {
    filterNews();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <Navbar filterNews={filterNews}/>
          <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{ 
            "fullScreen": false, 
            "background": { "image": "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)" }, 
            "particles": { 
              "number": { "value": 10, "density": { "enable": true, "value_area": 600 } }, 
              "color": { "value": "#ffffff" }, 
              "shape": { "type": "square", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } }, 
              "opacity": { "value": 0.25, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, 
              "size": { "value": 29, "random": true, "anim": { "enable": false, "speed": 2, "size_min": 0.1, "sync": false } }, 
              "line_linked": { "enable": false, "distance": 300, "color": "#ffffff", "opacity": 0, "width": 0 }, 
              "move": { "enable": true, "speed": 0.5, "direction": "top", "straight": true, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } 
            }, 
            "interactivity": { 
              "detect_on": "canvas", 
              "events": { 
                "onhover": { "enable": false, "mode": "repulse" }, 
                "onclick": { "enable": false, "mode": "push" }, 
                "resize": true 
              }, 
              "modes": { 
                "grab": { "distance": 800, "line_linked": { "opacity": 1 } }, 
                "bubble": { "distance": 790, "size": 79, "duration": 2, "opacity": 0.8, "speed": 3 }, 
                "repulse": { "distance": 400, "duration": 0.4 }, 
                "push": { "particles_nb": 4 }, 
                "remove": { "particles_nb": 2 } 
              } 
            }, 
            "retina_detect": true 
          }}/>
          <Home news={news}/>
          <Scroll smooth color="#b35715"/>
          <Footer/>
        </>
      )}
    </>
  );
};

export default App;
