
import criptoProject from '@/public/assets/projects/criptoProject.png'
import gastosProject from '@/public/assets/projects/gastosProject.png'
import itacaPetShop from '@/public/assets/projects/itacaPetShop.png'
import clubChinoYv from '@/public/assets/projects/clubChinoYv.png'
import gpt4Summarize from '@/public/assets/projects/gpt4Summarize.png'

import ProjectItems from './ProjectItems'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">Projects</p>
            <h2 className="py-4">What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItems 
                img={clubChinoYv}
                title='Static Web Site'
                useWith='NextJs & Tailwind CSS'
                url='/clubchinoyv'

                />
                <ProjectItems 
                img={gpt4Summarize}
                title='GPT AI Website '
                useWith='React'
                url='/gptwebsite'
                priority

                />
                <ProjectItems 
                img={gastosProject}
                title='Budget Control'
                useWith='React'
                url='/gastos'

                />
                
                <ProjectItems 
                img={itacaPetShop}
                title='PetShop'
                useWith='NextJs & Tailwind UI'
                url='/prueba'

                />
               
            </div>

        </div>
    </div>
  )
}

export default Projects