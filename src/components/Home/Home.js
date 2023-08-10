import React from 'react'
import './Home.css';
import git from './monochrome_large.png'
import women from'./women.png'
import linkedin from './355994.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const navigate =useNavigate();
  // const gitFunction=()=>{
    // navigate('https://github.com/KEERTHANADURAISAM')
  // }
  return (
    <div className='home-grid-container' id='home'>
    <div className='home-container'>
            <div className='home-content'>
              <h1 className='header-h1'>Hi</h1>
              <h3 className='header-h3' > <span className='header-h3-span'> I'm </span>KEERTHANA</h3>
              <h2 className='header-h2'>Full Stack Developer</h2>

            </div>
<div className='home-imgs'>
  <img src={git} className='git-img' />
  <img src={linkedin} className='link-img'/> 
  <button className='home-btn-resume'>Resume</button>
</div>
</div>
<div className='home-user-img'>
  <img src={women} className='img-home'></img>
</div>
</div>

  
  )
}

export default Home