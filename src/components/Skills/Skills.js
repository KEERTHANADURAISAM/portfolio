import React from 'react';
import './Skills.css';
import html from './file.png'
import css from './css (2).png'
import boot from './letter-b (1).png'
import js from './javascript.png'
import react from './react.png'
import post from './parking-area.png'
import mongodb from './database (1).png'
import node from './letter-n.png'
import express from './leaf.png'
import git from './branch.png'
import skill from'./14284d_2cb43613a8c74caf8e18755236501525~mv2.gif'
import github from './letter-g (1).png'
import netlifY from './letter-n.png'
const Skills = ({pageRefs}) => {
  return (
    <div className='skill-container' ref={el=>pageRefs.current={...pageRefs.current,skills:el}}>
    <div className='skill-grid'> 
     <div>    
     <h1 className='skill-header'>Tech Stacks</h1>
     <img src={skill} className='skill-home-img'/>
     </div>
     <div className='tech-icon-card'>
      <div className='tech-icon-div'>
        <img src={html} className='tech-icon'/>
        <span className='tech-span'>HTML</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={css} className='tech-icon'/>
        <span className='tech-span'>CSS</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={boot} className='tech-icon'/>
        <span className='tech-span'>BOOTSTRAB</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={js} className='tech-icon'/>
        <span className='tech-span'>JAVASCRIPT</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={react} className='tech-icon'/>
        <span className='tech-span'>REACT</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={mongodb} className='tech-icon'/>
        <span className='tech-span'>MONGO DB</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={node} className='tech-icon'/>
        <span className='tech-span'>NODE</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={express} className='tech-icon'/>
        <span className='tech-span'>EXPRESS</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={github} className='tech-icon'/>
        <span className='tech-span'>GITHUB</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={git} className='tech-icon'/>
        <span className='tech-span'>GIT</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={netlifY} className='tech-icon'/>
        <span className='tech-span'>NETLIFY</span>
        </div> 
        <div className='tech-icon-div'>
        <img src={post} className='tech-icon'/>
        <span className='tech-span'>POSTMAN</span>
        </div> 
     </div>
         
    
    </div>
   
      </div>
   
  )
}

export default Skills



