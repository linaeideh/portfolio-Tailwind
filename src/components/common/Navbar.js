import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import {
  FaUserAlt,
  FaEnvelope,
  FaFolderOpen,
} from "react-icons/fa";
import Portfoilo from "../../assets/images/Portfoilo.png";

const Navbar = () => {
  return (
    <div className='bg-white text-black shadow-md '>
      <nav className='p-4'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='text-xl font-bold'>
              <img src={Portfoilo} alt='Portfolio' className='h-20' />
            </div>

            <ul className='flex space-x-6 text-center'>
              <li className='my-link-style  hover:font-bold hover:text-black'>
                <Link to='/' className='flex flex-col items-center'>
                  <IoHomeOutline size={24} />
                  <span className='text-sm hidden sm:inline-block'>Home</span>
                </Link>
              </li>
              <li className='my-link-style  hover:font-bold hover:text-black'>
                <Link to='/about' className='flex flex-col items-center'>
                  <FaUserAlt size={20} />
                  <span className='text-sm hidden sm:inline-block mt-1'>
                    About Me
                  </span>
                </Link>
              </li>
              
             
              <li className='my-link-style  hover:font-bold hover:text-black'>
                <Link to='/projects' className='flex flex-col items-center'>
                  <FaFolderOpen size={20} />
                  <span className='text-sm hidden sm:inline-block '>
                    My Projects
                  </span>
                </Link>
              </li> <li className='my-link-style  hover:font-bold hover:text-black'>
                <Link to='/contact' className='flex flex-col items-center'>
                  <FaEnvelope size={24} />
                  <span className='text-sm hidden sm:inline-block '>
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
