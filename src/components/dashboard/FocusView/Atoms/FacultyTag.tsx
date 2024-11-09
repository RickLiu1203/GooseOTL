import React from 'react'

interface Props{
    faculty: string;
}

function FacultyTag({faculty}: Props) {
    const colorMap: { [key: string]: string } = {
        "Engineering": "bg-purple-50 text-purple-900",
        "Arts": "bg-orange-50 text-orange-900",
        "Science": "bg-blue-50 text-blue-900",
        "Mathematics": "bg-pink-50 text-pink-900",
        "Health": "bg-cyan-50 text-cyan-900",
        "Environment": "bg-lime-50 text-lime-900"
    };

    const bgColor: string = colorMap[faculty] || "bg-white"

    return (
        <div className={`flex justify-center items-center px-3 py-1 rounded-full text-sm shadow-md ${bgColor}`}>
            <p>{faculty}</p>
        </div>
    )
}

export default FacultyTag