import React from 'react'
import {motion} from 'framer-motion'
import   {assets}  from '../assets/assets'
import { aboutInfo } from '../assets/assets'
function About() {
  return (
    <motion.div  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        id='About'
        className='py-20 bg-dark-200'>
            <div className="container mx-0 px-6">
                {/* heading */}
                <h2 className=' text-3xl font-bold text-center mb-4'>ABOUT <span className='text-purple-600'>Me</span></h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'> Get to know more about my backround and passion</p>

                {/* image plus my journey */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* image */}
                    <div className="md:w-1/2 rounded-2xl overflow-hidden">
                    
                    <motion.img 
                    initial={{opacity:0, y:50}}
                    whileinview={{opacity:1, y:0}}
                    transition={{duration: 0.9, ease:'easeOut'}}
                    viewport={{once: false, amount:0.2}}
                    className='w-full h-full object-cover'
                    src ={assets.sagheer} alt=" profile" />
                    </div>
                    {/* text content */}
                    <motion.div className='md:w-1/2'
                    initial={{opacity:0, y:50}}
                    whileinview={{opacity:1, y:0}}
                    transition={{duration: 0.9, ease:'easeOut'}}
                    viewport={{once: false, amount:0.2}}>
                        <div className="rounded-2xl p-8">
                            <h3 className=' text-2xl font-semibold'>My journey</h3>
                            <p className='text-gray-300 mb-12'>Creative React Frontend Developer with a passion for building interactive and dynamic web experiences. Focused on writing clean, maintainable code and bringing innovative designs to life.</p>
                            {/* cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {
                                    aboutInfo.map((data, index)=>(
                                        <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer">
                                            <div className="text-purple-600 text-4x1 mb-4"> <data.icon/>
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className=' text-gray-400'>{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

    </motion.div>
  )
}

export default About