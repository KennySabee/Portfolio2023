
import criptoProject from '@/public/assets/projects/criptoProject.png'
import folieProject from '@/public/assets/projects/folieProject.png'
import gastosProject from '@/public/assets/projects/gastosProject.png'
import remixGuitarProject from '@/public/assets/projects/remixGuitarProject.png'

import ProjectItems from './ProjectItems'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">Projects</p>
            <h2 className="py-4">What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItems 
                img={folieProject}
                title='Landing Page'
                useWith='Html & Css'
                url='/landingpage'

                />
                <ProjectItems 
                img={criptoProject}
                title='Crypto App'
                useWith='React'
                url='/crypto'
                priority

                />
                <ProjectItems 
                img={gastosProject}
                title='Budget Control'
                useWith='React'
                url='/gastos'

                />
                <ProjectItems 
                img={remixGuitarProject}
                title='Ecommerce App'
                useWith='RemixRun'
                url='/guitarla'

                />
               
            </div>

        </div>
    </div>
  )
}

export default Projects