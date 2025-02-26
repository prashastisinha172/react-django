import React from "react";
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About=()=>{
    return(
<div className="about">
<div className="about-left">
<img src={about_img} alt="" className="about-img"/>
<img src={play_icon} alt="" className="play-icon"/>

</div>
<div className="about-right">
<h3>ABOUT UNIVERSITY</h3>
<h2>Nurturing Tommorow's Future Today.</h2>
<p>I started off my university life with a positive, can-do attitude, behaving like a social butterfly who got stuck into everything and anything – despite actually wanting to or not. Not long after moving in to my 16-bed shared flat, I realised that I just had to be myself. Everyone else was in the same boat, and every individual around you is feeling just as anxious, if not more so, about the idea of starting the next chapter in life. I wouldn’t change my university experience for anything. The only thing I wished I’d done is  </p>
<p>The first point I’d like to make is that you’re in charge of your degree. Outside of your scheduled lectures and seminars, you’re the one who decides whether to carry on studying or whether to spend the rest of your day relaxing. Every decision made is your own; you fuel your own desires, your own dreams, your own future. Yes, you have the support of academic staff, friends and family, but you make the ultimate decisions. </p>


</div>
</div>
    )
};
export default About;