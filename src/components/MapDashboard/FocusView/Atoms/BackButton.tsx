import { ChevronLeft } from 'lucide-react';
import React from 'react';

interface Props {
    backClick: () => void;
    yPos: number;
}

function BackButton({ backClick, yPos }: Props) {
  return (
    <button
    onClick={backClick}
    className='fixed top-6 left-6 border-[1px] border-neutral-100 bg-white text-neutral-800 text-lg font-bold rounded-lg p-3 shadow-lg z-30'
    >
        <ChevronLeft size={20} className={`${yPos >= 250 && "transform rotate-90"} duration-150`}/>
    </button>
  );
}

export default BackButton;
