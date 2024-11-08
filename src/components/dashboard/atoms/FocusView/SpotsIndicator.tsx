import React from 'react'
import { FaCircle } from "react-icons/fa";

interface Props{
    tier: string;
    spots: number;
}

function SpotsIndicator({tier, spots}: Props) {

    return (
        <div className='flex gap-2 items-center'>
            <p className='text-xl'>{spots} Spots</p>
            {tier === "Moderate" &&
            <div className='text-lime-500'>
                <FaCircle size={20}/>
            </div>
            }
        </div>
    )
}

export default SpotsIndicator