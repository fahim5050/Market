import React from 'react'
import logoLight from "../assets/logoLight.png"
import paymentLogo from "../assets/paymentLogo.png"
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaGithub } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsPersonFill, BsPaypal } from 'react-icons/bs'
import { FaHome } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont '>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col gap-5'>
            <img className='w-32 ' src={logoLight} alt='logo'></img>
            <p className='text-white text-sm -tracking-wide'>@bazar.com</p>
            <img className='w-32 ' src={paymentLogo} alt='logo'></img>
            <div className='flex gap-3 text-lg text-gray-500'>
              <FaFacebook className='hover:text-white duration-300 cursor-pointer'/>
              <FaGithub className='hover:text-white duration-300 cursor-pointer'/>
              <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
              <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
              <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
            </div>
        </div>
        {/* logo icon div */}
          <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
          <div className='text-base flex flex-col gap-2'>
          <p>Dean's trade center peshawar</p>
          <p>Mobile: 031234567</p>
          <p>Phone: 091234567</p>
          <p>Email: bazar@gmail.com</p>
          </div>
          </div>
          {/* end of the location div */}
          <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
          <div className='text-base flex flex-col gap-2'>
            <p className='flex gap-2 items-center hover:text-white duration-300 cursor-pointer'><span><BsPersonFill/></span>my account</p>
            <p className='flex gap-2 items-center hover:text-white duration-300 cursor-pointer'><span><BsPaypal/></span>check out</p>
            <p className='flex gap-2 items-center hover:text-white duration-300 cursor-pointer'><span><FaHome/></span>order tracking</p>
            <p className='flex gap-2 items-center hover:text-white duration-300 cursor-pointer'><span><MdLocationOn /></span>help and support</p>

          </div>
          </div>
          {/* end of the profile div */}

            <div className='text-base flex flex-col justify-center'>
                <input className='bg-transparent border px-4 text-sm' type='text' placeholder='e-mail'></input>
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>subscribe</button>
            </div>
            {/* end of the search div */}
      </div>
    </div>
  )
}

export default Footer