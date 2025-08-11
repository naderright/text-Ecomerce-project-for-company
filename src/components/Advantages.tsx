import React from 'react'
import { Trophy, BookCheck } from 'lucide-react'
import FreeShoping from '../../public/shipping.png'
import vector from '../../public/Vector (1).png'
import vector1 from '../../public/Vector.png'
import Image from 'next/image'
const advantagesData = [
    {
        id: 1,
        title: "High Quality",
        description: "crafted from top materials",
        iconElement: <Trophy size={40} />,
        iconImage: null,
    },
    {
        id: 2,
        title: "24/7 Support",
        description: "Dedicated support",
        iconElement: null,
        iconImage: vector,
    },
    {
        id: 3,
        title: "Free Shipping",
        description: "Order over 150 $",
        iconElement: null,
        iconImage: FreeShoping,
    },
    {
        id: 3,
        title: " Shipping",
        description: "Order over 150 $",
        iconElement: null,
        iconImage: FreeShoping,
    },

]


const Advantages: React.FC = () => {
    return (
        <div className="  md:h-[12rem] advantages-container items-center justify-center bg-pink grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full ">
            {advantagesData.map((advantage) => (
                <div key={advantage.title} className='flex justify-center gap-2'>
                    <div className='text-3xl mb-2 '>
                        {advantage.iconImage ? (
                            <Image
                                src={advantage.iconImage}
                                alt={advantage.title}
                                width={40}
                                height={40}
                                className='w-[2rem] md:w-[3rem]'
                            />
                        ) : (
                            advantage.iconElement
                        )}
                    </div>
                    <div className="content flex flex-col items-start ">
                        <h3 className='text-[1.2rem] font-semibold '>{advantage.title}</h3>
                        <p className='text-gray-600 '>{advantage.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Advantages
