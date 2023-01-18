import React from 'react'

import Portfolio from '../assets/project/modern-portofolio.jpg'
import HotTakes from '../assets/project/hot_takes.jpg'
import Kanap from '../assets/project/kanap.jpg'
import ChouetteAgence from '../assets/project/chouette_agence.jpg'
import Ohmyfood from '../assets/project/ohmyfood.jpg'
import Reservia from '../assets/project/reservia.jpg'



const Work = () => {
    return (
        <div name="work" className= 'mt-10 w-full text-black-300 dark:text-gray-300'>
            <div className="max-w-[1000px] mx-auto p-4">
                <div>
                    <p className='text-2xl font-bold inline'>Recent Works</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10 ">

                    {/* Modern portfolio */}
                    <div className="relative group">
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover shadow-2xl h-750"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={Portfolio}
                                alt="Portfolio"
                            />
                        </div>
                        <div className="opacity-0 absolute top-0 left-0 bottom-0 right-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-green-50 dark:bg-sky-600">
                            <p className='text-2xl font-bold tracking-wider'>Modern portfolio</p>
                            <p>#REACT #TAILWIND CSS</p>
                            <a className='text-center px-4 py-2 mt-8 rounded-md text-white hover:text-black text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500' 
                                href="https://github.com/DaniOmer/react-tailwind-portfolio"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Code
                            </a>
                        </div>
                    </div>


                    {/* Piccante */}
                    <div className="relative group">
                        <div>
                            <img
                                className="rounded-lg object-cover shadow-2xl"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={HotTakes}
                                alt="HotTakes"
                            />
                        </div>
                        <div className="opacity-0 absolute top-0 left-0 bottom-0 right-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-green-50 dark:bg-sky-600">
                            <p className='text-2xl font-bold tracking-wider'>Piicante</p>
                            <p>#NodeJS #Express #MongoDB</p>
                            <a className='text-center px-4 py-2 mt-8 rounded-md text-white hover:text-black text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500' 
                                href="https://github.com/DaniOmer/API-NodeJS-Express-MongoDB"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Code
                            </a>
                        </div>
                    </div>

                    {/* Kanap */}
                    <div className="relative group">
                        <div>
                            <img
                                className="rounded-lg object-cover shadow-2xl"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={Kanap}
                                alt="Kanap"
                            />
                        </div>
                        <div className="opacity-0 absolute top-0 left-0 bottom-0 right-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-green-50 dark:bg-sky-600">
                                <p className='text-2xl font-bold tracking-wider'>Kanap</p>
                                <p>#Vanilla Javascript</p>
                                <a className='text-center px-4 py-2 mt-8 rounded-md text-white hover:text-black text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500' 
                                    href="https://github.com/DaniOmer/ecommerce-js"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                </a>
                        </div>
                    </div>
                    
                    {/* Chouette agence */}
                    <div className="relative group">
                        <div>
                            <img
                                className="rounded-lg object-cover shadow-2xl"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={ChouetteAgence}
                                alt="ChouetteAgence"
                            />
                        </div>
                        <div className="opacity-0 absolute top-0 left-0 bottom-0 right-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-green-50 dark:bg-sky-600">
                                <p className='text-2xl font-bold tracking-wider'>Chouette agence</p>
                                <p>#SEO #HTML #CSS</p>
                                <a className='text-center px-4 py-2 mt-8 rounded-md text-white hover:text-black text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500' 
                                    href="https://github.com/DaniOmer/seo-project"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                </a>
                        </div>
                    </div>

                    {/* Ohmyfood */}
                    <div className="relative group">
                        <div>
                            <img
                                className="rounded-lg object-cover shadow-2xl"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={Ohmyfood}
                                alt="Ohmyfood"
                            />
                        </div>
                        <div className="opacity-0 absolute top-0 left-0 bottom-0 right-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-green-50 dark:bg-sky-600">
                                <p className='text-2xl font-bold tracking-wider'>Ohmyfood</p>
                                <p>#HTML #SASS</p>
                                <a className='text-center px-4 py-2 mt-8 rounded-md text-white hover:text-black text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500' 
                                    href="https://github.com/DaniOmer/ohmyfood"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                </a>
                        </div>
                    </div>

                    {/* Reservia */}
                    <div className="relative group">
                        <div>
                            <img
                                className="rounded-lg object-cover shadow-2xl"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={Reservia}
                                alt="Reservia"
                            />
                        </div>
                        <div className="opacity-0 absolute top-0 left-0 bottom-0 right-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-green-50 dark:bg-sky-600">
                                <p className='text-2xl font-bold tracking-wider'>Booki</p>
                                <p>#HTML #CSS</p>
                                <a className='text-center px-4 py-2 mt-8 rounded-md text-white hover:text-black text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500' 
                                    href="https://github.com/DaniOmer/Booki"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work