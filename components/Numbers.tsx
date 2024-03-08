import React from 'react';

const Numbers = ({ title, numbers }: any) => {
  return (
    <div className='bg-[#091f2f] mb-2 py-2 pl-2 pr-32'>
      <h1>{title}</h1>
      <h1
        className={
          Math.sign(numbers) === -1
            ? 'text-red-500'
            : title === 'Profit'
            ? 'text-green-500'
            : 'text-orange-400'
        }
      >
        {Math.abs(numbers).toLocaleString()}
      </h1>
    </div>
  );
};

export default Numbers;
