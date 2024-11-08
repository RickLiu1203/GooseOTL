import React from 'react'

interface Props{
    faculty: string;
}

function FacultyTag({faculty}: Props) {
    const colorMap: { [key: string]: string } = {
        "Engineering": "bg-purple-100 text-purple-900",
        "Arts": "bg-orange-100 text-orange-900",
        "Science": "bg-blue-100 text-blue-900",
        "Mathematics": "bg-pink-100 text-pink-900",
        "Health": "bg-cyan-100 text-cyan-900",
        "Environment": "bg-lime-100 text-lime-900"
    };

    const bgColor: string = colorMap[faculty] || "bg-white"

    return (
        <div className={`flex justify-center items-center px-3 py-1 rounded-full text-sm shadow-md ${bgColor}`}>
            <p>{faculty}</p>
        </div>
    )
}

export default FacultyTag