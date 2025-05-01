import { Square } from 'lucide-react'
import React from 'react'

interface Props{
    course: string,
    difficulty: number;
}

function CourseTableRow({ course, difficulty }: Props) {
    const colourMap: {[key: number]: string} = {
        0: "#a3e635", //lime-400
        1: "#facc15", //yellow-400
        2: "#f87171" //red-500
    }

    const difficultyNameMap: {[key: number]: string} = {
        0: "Easy",
        1: "Mid",
        2: "Hard"
    }

    return (
        <div className='flex justify-between items-center w-9/10 italic'>
            <p className='text-neutral-800 font-bold'>{course}</p>
            <div className='flex gap-2 items-center'>
                <p className='text-neutral-800 font-bold'>{difficultyNameMap[difficulty]}</p>
                <Square opacity={0.7} color="black" fill={colourMap[difficulty]} size={18}/>
            </div>
        </div>
    )
}

export default CourseTableRow