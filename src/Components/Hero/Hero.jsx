import React from "react";
import './Hero.css';
import  dark_arrow from '../../assets/dark-arrow.png';



const Hero=()=>{
return(
<div className="hero Container">
<div className="hero-text">
  
<h1> We Ensure better Education for a better world</h1>
<p> It emphasizes knowledge acquisition, the capacity to apply that knowledge to daily life, and simultaneously enhancing the lives of others, education helps a country's economy thrive. 5. Ensure a Prosperous and Joyful Life Education has always been a means of gaining the respect of society.</p>
<button className="btn">Explore More<img src={dark_arrow} alt=""/></button>
</div>
</div>
)
};

export default Hero;