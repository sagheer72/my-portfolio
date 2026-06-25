import React from 'react'
import {motion} from 'framer-motion'

function project() {
  return (
    <div>
    <motion.div 
     initial={{opacity:0, y:50}}
                    whileinview={{opacity:1, y:0}}
                    transition={{duration: 1, ease:'easeOut'}}
                    viewport={{once: false, amount:0.2}}
                    id='projects'
    className="py-20 bg-dark-200">
      <div className="container mx-auto px-6">
        <h2 className='text-3xl font-bold text-center mb-4'>
          my 
          <span className='text-purple-600'>projects</span> 
          <p className=' text-gray-400  text-center max-w-2xl mx-auto mb-16'> A selection of my recent work</p>
          <div className="grid grid=cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* project */}
            {
              project.map((project, index)=>(
                <projectcard key={index} {...project}/>
              ))
            }
          </div>
        </h2>
      </div>
    </motion.div>
    </div>
  )
}

export default project