import React from 'react'
import useColorMode from '../hooks/useColorMode'
import CV from '../assets/cv.pdf'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'

const Header =  () =>{

    const [colorMode, setColorMode] = useColorMode()

    return(
        <div className='fixed top-0 mt-0 z-50 w-full'>
            {/***** Navigation *****/}
            
            <nav className='pt-10 pb-5 px-2 sm:px-8 mb-10 flex justify-between items-center bg-green-50 shadow-md dark:bg-slate-900'>
                <h1 className='text-xl font-burtons dark:text-gray-300'>developedbyOD</h1>
                <ul className='flex items-center'>
                    <li>
                        {colorMode === 'dark' ? (
                            <button
                            className="bg-black-700 hover:bg-black rounded-md p-2"
                            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
                            >
                            {' '}
                            <img src={Sun} alt="logo" height="20px" width="20px" />
                            </button>
                        ) : (
                            <button
                            className="bg-gray-100 rounded-md p-2 hover:bg-gray-300"
                            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
                            >
                            <img src={Moon} alt="logo" height="20px" width="20px" />
                            </button>
                        )}
                    </li>

                    <li>
                        <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 hover:bg-white hover:text-black py-2 border-none rounded-md ml-4 sm:ml-8"
                        href={CV}
                        download
                        >
                        Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header