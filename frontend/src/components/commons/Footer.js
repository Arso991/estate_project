import React from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTiktok, BiLogoYoutube } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/logo.svg";

export default function Footer() {
  return <footer>
    <div className='border-t border-b py-12' >
      <div className='container mx-auto flex items-center justify-between' >
        <div className='w-2/3' >
          <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4' >Start Your Real Estate Journey Today</h2>
          <p className='text-sm'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
        </div>
        <button className='px-4 py-2 text-nowrap rounded-lg bg-secondary text-white border border-transparent hover:bg-white hover:text-secondary hover:border-secondary transition' >Explore Properties</button>
      </div>
    </div>

    <div className='bg-black py-8' >
      <div className='container mx-auto text-white flex justify-between' >
        <div className='w-full max-w-[350px]' >
          <img src={Logo} alt="Logo" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 text-nowrap' >
          <div className='text-sm flex flex-col gap-4' >
            <h2 className='text-gray-500' >Home</h2>
            <ul className='flex flex-col gap-2' >
              <li>
                <Link to={""} className='hover:underline transition' >Hero Section</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Features</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Properties</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Testimonials</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >FAQ's</Link>
              </li>
            </ul>
          </div>
          <div className='text-sm flex flex-col gap-4' >
            <h2 className='text-gray-500' >About Us</h2>
            <ul className='flex flex-col gap-2' >
              <li>
                <Link to={""} className='hover:underline transition' >Our Story</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Our Works</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >How It Works</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Our Teams</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Our Clients</Link>
              </li>
            </ul>
          </div>
          <div className='text-sm flex flex-col gap-4' >
            <h2 className='text-gray-500' >Properties</h2>
            <ul className='flex flex-col gap-2' >
              <li>
                <Link to={""} className='hover:underline transition' >Portfolio</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Categories</Link>
              </li>
            </ul>
          </div>
          <div className='text-sm flex flex-col gap-4' >
            <h2 className='text-gray-500' >Services</h2>
            <ul className='flex flex-col gap-2' >
              <li>
                <Link to={""} className='hover:underline transition' >Valuation Mastery</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Strategic Marketing</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Negociation Wizardry</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Closing Success</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Property Management</Link>
              </li>
            </ul>
          </div>
          <div className='text-sm flex flex-col gap-4' >
            <h2 className='text-gray-500' >Contact Us</h2>
            <ul className='flex flex-col gap-2' >
              <li>
                <Link to={""} className='hover:underline transition' >Contact Form</Link>
              </li>
              <li>
                <Link to={""} className='hover:underline transition' >Our Offices</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
    <div className='bg-dark1 py-8' >
      <div className='container mx-auto text-white flex items-center justify-between'>
        <div className='w-full max-w-[350px] text-sm text-nowrap flex gap-4 items-center' >
          <h2>Copyright &copy; 2024. All rights reserved</h2>
          <Link to={""} className='hover:underline transition' >Terms & Conditions</Link>
        </div>
        <div className='flex items-center gap-2'>
          <Link to={""} className='p-1 border flex items-center justify-center border-secondary h-8 w-8 rounded-full hover:bg-secondary/95 transition' >
            <BiLogoFacebook />
          </Link>

          <Link to={""} className='p-1 border flex items-center justify-center border-secondary h-8 w-8 rounded-full hover:bg-secondary/95 transition' >
            <BiLogoTiktok />
          </Link>

          <Link to={""} className='p-1 border flex items-center justify-center border-secondary h-8 w-8 rounded-full hover:bg-secondary/95 transition' >
            <BiLogoInstagram />
          </Link>

          <Link to={""} className='p-1 border flex items-center justify-center border-secondary h-8 w-8 rounded-full hover:bg-secondary/95 transition' >
            <BiLogoYoutube />
          </Link>

        </div>
      </div>

    </div>
  </footer>;
};
