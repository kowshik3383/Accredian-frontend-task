

import arrow from '../assets/arrow.svg'
const Button = () => {
  return (
    <button className="flex flex-row text-white items-center px-4 py-2 gap-1 w-[116px] h-[40px] bg-[#1A73E8] rounded-lg">
      Courses
	<img src={arrow} alt="/" />
    </button>
	
  );
};

export default Button;
