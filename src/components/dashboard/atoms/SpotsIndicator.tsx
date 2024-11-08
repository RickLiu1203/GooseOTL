import React from 'react'
import { FaCircle } from "react-icons/fa";

interface Props{
    tier: string;
    spots: number;
}

function SpotsIndicator({tier, spots}: Props) {

    return (
        <div className='flex gap-2'>
            <p>{spots} Spots</p>
            {tier === "Moderate" &&
                <FaCircle/>
            }
        </div>
    )
}

export default SpotsIndicator