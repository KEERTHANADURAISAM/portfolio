import React from 'react'
import './MyProject.css'
import opticals from './project-imgs/eye-test (1).png'

const MyProjects = ({pageRefs}) => {
  return (
    <main className='project-main-containerproject-main-container' ref={el=>pageRefs.current={...pageRefs.current,project:el}}>
      <section>
        <header className='project-header'>
<h1 className='project-heading'>Projects</h1>
        </header>
        <div className='project-card-div'>
          <img src={opticals} alt='' className='project-img'/>
          <div className='project-source'>
            <button className='project-btn'>Front-End Source code</button>
            <button className='project-btn'>Live Site</button>
            <button className='project-btn'>Back-End Source code</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MyProjects