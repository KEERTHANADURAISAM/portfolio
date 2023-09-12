import React from 'react'
import "./MyProject.css";
import p from './imgs/letter-p.png'
import r from './imgs/letter-r.png'
import o from './imgs/letter-o.png'
import j from './imgs/letter-j.png'
import e from './imgs/letter-e.png'
import c from './imgs/letter-c.png'
import t from './imgs/letter-t-.png'
import s from './imgs/letter-s.png'
import pro1 from './ProjectStickers/plane.png'
import pro2 from './ProjectStickers/telegram.png'
import pro3 from './ProjectStickers/configuration.png'
import pro4 from './ProjectStickers/flower-shop.png'
import pro5 from './ProjectStickers/eye-test.png'
import pro6 from './ProjectStickers/gym.png'
import pro7 from './ProjectStickers/wishlist.png'
import pro8 from './ProjectStickers/street-market.png'
import { Link } from 'react-router-dom';
const MyProjects = () => {
  return (
<main className='project-main-container'>
    <div className='project-grid-container'>
        <section>
            <header className='project-header'>
                <img src={p} className='project-img'/>
                <img src={r} className='project-img'/>
                <img src={o} className='project-img'/>
                <img src={j} className='project-img'/>
                <img src={e} className='project-img'/>
                <img src={c} className='project-img'/>
                <img src={t} className='project-img'/>
                <img src={s} className='project-img'/>

            </header>
            <div className='projects-main-div'>

<div className='project-card'>

<img src={pro1} alt='' className='project-main-imgs'/>
<div>
<a href='https://portfolio1sanjay.netlify.app/'>wepage</a>
</div>
</div>
<div className='project-card'>

<img src={pro2} alt='' className='project-main-imgs'/>
</div>
 <div className='project-card'>

<img src={pro3} alt='' className='project-main-imgs'/>
</div>
<div className='project-card'>
<img src={pro8} alt='' className='project-main-imgs'/>
</div>

<div className='project-card'>

<img src={pro5} alt='' className='project-main-imgs'/>
</div>
<div className='project-card'>

<img src={pro4} alt='' className='project-main-imgs'/>
</div>
 <div className='project-card'>
<img src={pro6} alt='' className='project-main-imgs'/>
</div>
<div className='project-card'>
<img src={pro7} alt='' className='project-main-imgs'/>
</div>


            </div>
        </section>
    </div>

</main>
  )
}

export default MyProjects