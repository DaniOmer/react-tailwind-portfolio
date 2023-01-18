import React from 'react'

import dedev from '../assets/dev-ed-wave.png'
import Php from '../assets/skills/php.png'
import JavaScript from '../assets/skills/javascript.png'
import ReactImg from '../assets/skills/react.png'
import Node from '../assets/skills/node.png'
import Mongo from '../assets/skills/mongo.png'
import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import Tailwind from '../assets/skills/tailwind.png'
import Sass from '../assets/skills/sass.png'
import GitHub from '../assets/skills/github1.png'
import Shopify from '../assets/skills/shopify.png'
import Aws from '../assets/skills/aws.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full text-black-300 dark:text-gray-300'>

        <div className='relative mx-auto bg-gradient-to-b  from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
                <img src={dedev} layout= "fill" objectFit="cover" alt="My Bimoji"/>
        </div>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-2xl font-bold inline'>Skills</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>    
            <div className='hover:scale-110 duration-500'>
                    <img src={Php} className='w-20 mx-auto' alt="PHP icon"/>
                    <p className='my-4'>PHP</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img src={JavaScript} className='w-20 mx-auto' alt="JavaScript icon"/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg icon"/>
                    <p className='my-4'>REACT</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon"/>
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon"/>
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon"/>
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto object-contain' src={Sass} alt="Sass icon"/>
                    <p className='my-4'>SASS</p>
                </div>
                <div className='hover:scale-110 duration-500 dark:text-gray-300'>
                    <img className='w-20 mx-auto object-contain ' src={GitHub} alt="GitHub icon"/>
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto object-contain' src={Shopify} alt="Shopify icon"/>
                    <p className='my-4'>Shopify</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto object-contain' src={Aws} alt="Aws icon"/>
                    <p className='my-4'>AWS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills