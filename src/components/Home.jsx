import React from 'react'
import Typical from 'react-typical'

import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub
  } from 'react-icons/ai'


  const Home = () =>{
    return(
        <div name='home' className='pt-40'>
            {/******** Description *******/}
            <div className='text-center py-10 px-2 sm:px-0 sm:w-4/5 mx-auto mt-300 dark:text-gray-300'>
                <h2 className='text-5xl py-2 text-teal-500 font-medium'>Omer DOTCHAMOU</h2>
                <h3 className='text-2xl py-2'>
                    <Typical
                    loop={Infinity}
                    steps={['Full stack developer', 2000, 
                            'Front-End application and Back-End application', 2000,
                            'Learn more about me bellow !', 1000
                        ]}
                    />
                </h3>
                <p className='text-md py-5 sm:px-20 leading-8 text-gray-800 dark:text-gray-300'>
                Junior fullstack developer with good knowledge, both front-end and back-end programming
                languages, I am looking for an apprenticeship to achive my third year
                of bachelor "Web Engineering" at ESGI Paris.<br/>
                <span className="tagline">My motto ? Work Hard to Achieve Excellence.</span>
                </p>
            </div>

            {/********* Social Media ********/}
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                <a className='hover:scale-110 duration-500' href="https://twitter.com/fade95" alt='Join me on twitter' target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterCircle />
                </a>
                <a className='hover:scale-110 duration-500' href="https://www.linkedin.com/in/omerdotchamou/" alt='Join me on Link' target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin />
                </a>
                <a className='hover:scale-110 duration-500' href="https://github.com/DaniOmer" alt='Follow my work on GitHub' target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                </a>
            </div>

        </div>
        
    )
}

export default Home