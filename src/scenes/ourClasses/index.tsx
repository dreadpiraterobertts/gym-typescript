import { SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import { ClassType } from '@/shared/types'
import Class from './Class'

const classes:Array<ClassType>= [
    {
        name:"Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet dolore perspiciatis veritatis saepe eos repellendus tenetur, accusantium iusto voluptatum.",
        image:image1
    },
    {
        name:"Core Strength Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet dolore perspiciatis veritatis saepe eos repellendus tenetur, accusantium iusto voluptatum.",
        image:image2
    },
    {
        name:"Yoga Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet dolore perspiciatis veritatis saepe eos repellendus tenetur, accusantium iusto voluptatum.",
        image:image3
    },
    {
        name:"Adventure Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet dolore perspiciatis veritatis saepe eos repellendus tenetur, accusantium iusto voluptatum.",
        image:image4
    }
    ,    {
        name:"Fitness Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet dolore perspiciatis veritatis saepe eos repellendus tenetur, accusantium iusto voluptatum.",
        image:image5
    },
    {
        name:" Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet dolore perspiciatis veritatis saepe eos repellendus tenetur, accusantium iusto voluptatum.",
        image:image6
    }
]
type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className='w-full bg-primary-100 py-40 '>
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
                initial = "hidden" 
                whileInView= "visible" 
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                   hidden:{opacity: 0, x:-50},
                   visible:{opacity:1, x:0}
                }}
                className='mx-auto w-5/6 '
            >
                <div className='md:w-3/5 '>
                    <HText>OUR CLASSES</HText>
                    <p className='py-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis similique quos velit? Excepturi, enim nam? Quos sint natus repellat laudantium ratione impedit officia dicta deserunt, possimus sequi facere nesciunt, consectetur beatae corrupti voluptatum ut velit itaque ducimus modi mollitia atque cupiditate! Necessitatibus atque maiores veritatis asperiores repellat sint nulla?</p>
                </div>
            </motion.div>
            <div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800] whitespace-nowrap'>
                    {classes.map((item:ClassType,index)=>(
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}

                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses