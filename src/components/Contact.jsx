import React from 'react'
import {motion} from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
function Contact() {
  return (
    <motion.div 
     initial={{opacity:0, y:50}}
                    whileinview={{opacity:1, y:0}}
                    transition={{duration: 1, ease:'easeOut'}}
                    viewport={{once: false, amount:0.2}} id='contact'
classname='py-20 bg-dark-200'>
    {/* contact form */}
    <div className="container mx-auto px-6">
        <h2 className=' text-3xl font-bold text-center mb-4'>
            GET IN <span className='text-purple-600'>TOUCH</span>
        </h2>
        <p className=' text-gray-400 text-center max-w-2xl mx-auto mb-16'>have a project in mind or want to collaborate? lets talk!</p>
        <div className="grid grid-cols-1 lg:grid-cols- gap-12 max-w-5xl mx-auto">
            <div >
                <form className='space-y-6'>
                    <div>
                        <label className='block text-gray-300 mb-2' htmlFor="name">youre name</label>
                        <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                        type="text" />
                    </div>

                     <div>
                        <label className='block text-gray-300 mb-2' htmlFor="email">youre email</label>
                        <textarea className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                        type="text" />
                    </div>

                     <div>
                        <label className='block text-gray-300 mb-2' htmlFor="message">youre message</label>
                        <input className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                        type="text" />
                    </div>
                    <button type='submit' className='w-full px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'></button>
                </form>
            </div>
        </div>
    </div>
{/* contact information */}
<div className="space-y-8">
    <div className="flex items-start">
        <div className="text-purple-600 text-2xl mr-4">
            <FaMapMarkerAlt/>
        </div>
        <div>
            <h3 className='text-lg font-semibold mb-2'>location</h3>
            <p className='text-gray-400'>mirpure mathelo</p>
        </div>
    </div>

    <div className="flex items-start">
        <div className="text-purple-600 text-2xl mr-4">
            <FaEnvelope/>
        </div>
        <div>
            <h3 className='text-lg font-semibold mb-2'>email</h3>
            <p className='text-gray-400'>sagheerahmed123465@gmail.com</p>
        </div>
    </div>

    <div className="flex items-start">
        <div className="text-purple-600 text-2xl mr-4">
            <FaPhone/>
        </div>
        <div>
            <h3 className='text-lg font-semibold mb-2'>phone</h3>
            <p className='text-gray-400'>03082080455</p>
        </div>
    </div>

    <div className='pt-4'>
     <h3 className='text-lg font-semibold mb-4'>follow me</h3>
     <div className="flex space-x-4">
        <a href='#' className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-600 hover:bg-purple-700 hover:text-white transition duration-300'>
            <FaGithub/>
        </a>

         <a href='#' className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300'>
            <FaLinkedin/>
        </a>

         <a href='#' className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
            <FaTwitter/>
        </a>

         <a href='#' className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white transition duration-300'>
            <FaDribbble/>
        </a>
     </div>
    </div>
</div>
    </motion.div>
  )
}

export default Contact;