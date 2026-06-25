import { motion } from 'framer-motion';
import {assets} from'../assets/assets'
function Hero() {
  return (
    <div
      id='home'
      className='w-full min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between" >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className='text-4xl md:text-6xl font-bold mb-4'> hi I'm <span className='text-purple-700'>Sagheer Ahmed</span></h1>
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>frontend developer</h2>
          <p className='text-lg text-gray-300 mb-8'>I create stunning web experience with modern technologies and innovative design</p>
          <div className="flex space-x-4">
            <a href='#projects' className='px-6 py-3 bg-purple-700 rounded-lg font-medium hover:bg-purple-900 transition duration-300'>view work</a>
            <a href="#contact" className='px-6 py-3 border border-purple-600 rounded-lg font-medium hover:bg-purple-600/20 transition decoration-purple-300'>Contact Me</a>
          </div>
        </div>
        {/* right side */}
        <div className="md:w-1/2 flex justify-center">

          <div className="relative w-64 h-64 md:w-80 md:h-80 ">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 animate-plus-slow opacity-70">
              <motion.img 
              animate={{y:[0, -20, 0]}}
              transition={{duration:4, repeat:Infinity, repeatType: "loop", ease: "easeInOut"
              }}
              className='relative roumded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animated-float' src={assets.sagheer} alt='sagheer ahmed'/>
            </div>
          </div>
            </div>
      </motion.div>
    </div>
  );
}

export default Hero;