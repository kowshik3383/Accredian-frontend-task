
import icon from '../assets/icon.svg';
import Button from '../ui/Button';
import Home from './Home';
import Navbar2 from './Navbar2';
const Navbar = () => {
  return (
	<>
	<div id="nav" className=" flex justify-center space-x-4   bg-custom-blue h-12" >

	<p className="mt-3">Navigate your ideal career path with tailored expert advice</p>
	<a className="mt-3 text-purple-400" href="#">Contact Expert</a>



	</div>
	


<div className="ml-52 mt-6 flex   space-x-4">
  <img src={icon} alt="Icon" />
  <Button />
  
  <div className="flex items-center space-x-8">
    <span className="font-inter font-medium ml-64 text-[#1A202C] capitalize">
      Refer & Earn
    </span>
    <span className="font-inter font-medium text-[#1A202C] capitalize">
      Resources
    </span>
    <span className="font-inter font-medium text-[#1A202C] capitalize">
      About us
    </span>
  </div>

  <div className="flex space-x-4">
    <button className="px-4 py-2 bg-[rgba(148,163,184,0.2)] rounded-lg">
      <span className="font-inter font-medium text-[15.25px] leading-[24px] text-[#1A202C]">
        Login
      </span>
    </button>
    <button className="px-4 py-2 bg-[#1A73E8] rounded-lg">
      <span className="font-inter font-medium text-[14.75px] leading-[24px] text-[#FFFFFF]">
        Try for free
      </span>
    </button>
  </div>
</div>
<Navbar2/>
<Home/>



	


	</>
  )
}

export default Navbar



/* Rectangle 10 */

