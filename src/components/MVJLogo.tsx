
import React from 'react';

const MVJLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="text-3xl font-bold">
        <span className="text-mvj-red">M</span>
        <span className="text-mvj-orange">VJ</span>
      </div>
      <div className="ml-2 text-xs leading-tight">
        <div className="text-mvj-darkBlue font-semibold">COLLEGE OF ENGINEERING</div>
        <div className="text-gray-600 italic text-[10px]">Canteen Eats Easy</div>
      </div>
    </div>
  );
};

export default MVJLogo;
