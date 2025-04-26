import React from 'react'
import { FaCircle } from "react-icons/fa";

interface Props{
    likeliness: string;
    spots: number;
}

function SpotsIndicator({likeliness, spots}: Props) {

    const spotColour: {[key: string]: string} = {
        "Lowest": "text-red-400",
        "Low": "text-yellow-400",
        "Moderate": "text-green-400"
    }

    return (
        <div className='flex gap-2 items-center'>
            <p className='text-lg'>{spots} Spots</p>
            <div className={spotColour[likeliness]}>
                <FaCircle size={20}/>
            </div>
        </div>
    )
}

export default SpotsIndicator