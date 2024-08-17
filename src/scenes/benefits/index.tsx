import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
type Props = {
    setSelectedPage : (value:SelectedPage)=> void
}

const benefits : Array<BenefitType> = [
    {
        icon:<HomeModernIcon className="h-6 2-6 "/>,
        title: "State of the art facilities",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam?"
    },
    {
        icon:<UserGroupIcon className="h-6 2-6 "/>,
        title: "100 of diverse classes",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam?"
    },
    {
        icon:<AcademicCapIcon className="h-6 2-6 "/>,
        title: "Expert and pro Trainers",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam?"
    }
]

const container = {
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
            <motion.div 
                initial = "hidden" 
                whileInView= "visible" 
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                   hidden:{opacity: 0, x:-50},
                   visible:{opacity:1, x:0}
                }}
                className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST GYM </HText>
                <p className="my-5 text-sm">
                    We Provide world class fitness equipment, trainers and classes to 
                    get you to your ultimate fitness goals with ease. We can provide true
                    care into each and every member.
                </p>
            </motion.div>
        {/* Benefits */}
        <motion.div 
            className="items-center justify-between gap-8 mt-5 md:flex"
            initial = "hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            variants={container}
            >
            {benefits.map((benefit)=>(
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>

        {/* Graphics and description */}
        <div className="mt-16  items-center justify-between gap-20 md:mt-28 md:flex  ">
            {/* Graphic */}
            <img className='mx-auto' src={BenefitsPageGraphic} alt="" />
            {/* Description */}
            <div>
                {/* Title */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                            initial = "hidden" 
                            whileInView= "visible" 
                            viewport={{once:true, amount:0.5}}
                            transition={{duration:0.5}}
                            variants={{
                               hidden:{opacity: 0, x:50},
                               visible:{opacity:1, x:0}
                            }}
                        >
                            <HText>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500"> GET     </span>
                            </HText>
                        </motion.div>
                    </div>
                </div>
                {/* Description */}
                <motion.div
                    initial = "hidden" 
                    whileInView= "visible" 
                    viewport={{once:true, amount:0.5}}
                    transition={{delay:0.2,duration:0.5}}
                    variants={{
                       hidden:{opacity: 0, x:50},
                       visible:{opacity:1, x:0}
                    }}
                >
                    <p className="my-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem veritatis, iusto adipisci nemo non. Iusto perspiciatis delectus exercitationem! Cumque quod ut nam corrupti exercitationem. Dicta mollitia, explicabo doloribus pariatur impedit est exercitationem aut repellendus quam perferendis?  
                    </p>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem veritatis, iusto adipisci nemo non. Iusto perspiciatis delectus exercitationem! Cumque quod ut nam corrupti exercitationem. Dicta mollitia, explicabo doloribus pariatur impedit est exercitationem aut repellendus quam perferendis?  
                    </p>
                </motion.div>
                {/* Button */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>

    </section>
  )
}

export default Benefits