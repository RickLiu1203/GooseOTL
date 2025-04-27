import { ChevronLeft, ChevronUp } from 'lucide-react';
import React from 'react';

interface Props {
    backClick: () => void;
    yPos: number;
}

function BackButton({ backClick, yPos }: Props) {

  return (
    <>
      { yPos <= 250 ?
        <button
        onClick={backClick}
        className='fixed top-6 left-6 border-[1px] border-black bg-white text-black text-lg font-bold rounded-lg p-3 shadow-lg z-30'
        >
            <ChevronLeft size={20}/>
        </button> :
        <button
          onClick={backClick}
          className='fixed top-6 left-6 border-[1px] border-black bg-white text-black text-lg font-bold rounded-lg p-3 shadow-lg z-30'
        >
            <ChevronUp size={20} />
        </button>
      }
    </>
    
  );
}

export default BackButton;
