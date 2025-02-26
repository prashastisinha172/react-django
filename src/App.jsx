import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'





const App=()=>{
  return(
    <div>
<Navbar/>
<Hero/>
<div className='Container'> 
  <Title subTitle="Our PROGRAM" Title="What we Offer"/>
<Programs/>
<About/>
<Title subTitle="Gallery" Title="Campus Photos"/>
<Campus/>
<Title subTitle="Testimonials" Title="What student says"/>
<Testimonials/>

</div>

    </div>
  );
};
export default App;