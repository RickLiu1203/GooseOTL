import React from 'react'
import { FaGithub } from "react-icons/fa";

function Github() {
  const GITHUB = "https://github.com/RickLiu1203/GooseOTL"

  const handleClick = () => {
    window.open(GITHUB, "_blank", "noopener,noreferrer");
  };
  
  return (
    <button 
      onClick={handleClick}
      className='flex rounded-full bg-white justify-center items-center w-9 h-9 shadow-md'>
      <FaGithub size={24}/>
    </button>
  )
}

export default Github