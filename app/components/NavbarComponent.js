"use client";

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose, IoMdMenu } from 'react-icons/io'; 
import { Navigation, SocialLinks } from '@app/constants';
import { Link } from "react-scroll";
import Image from 'next/image';



const NavbarComponent = ({ headerId, headerStyles, Logo, btnStyles, headerListColour, openMenuBtnColor, }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex max-w-xs flex-col overflow-y-auto bg-white pb-12 px-4 w-80">
                <div className="flex px-4 pb-2 pt-5 justify-end">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center rounded-md outline-none p-2 text-black justify-center"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <IoMdClose className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/*Navigation Links */}
                <div className="space-y-6 px-4 py-6">
                  <ul className="list-none space-y-2 py-6">
                    {Navigation.map((item, i) => (
                      <li>
                        <Link
                          activeClass='active'
                          spy={true}
                          to={item.path}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          key={i}
                          className={`block cursor-pointer py-3 text-base font-semibold leading-7 text-text hover:text-secondary border-b border-[#e8e5e5]`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className='absolute w-[18rem] bottom-0'>
                  <div className='flex gap-x-4 justify-center items-center mb-[10vh]'>
                    {SocialLinks.map((item, id) => (
                      <div key={id} className='text-text hover:text-secondary cursor-pointer'>
                        <Link to={item.path}>{item.icon}</Link>
                      </div>
                    ))}
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>


      <header id={`${headerId}`} className={`${headerStyles}`}>
        <nav className="md:py-1 boxWidth paddingX">

          <div className="flex h-16 py-9 items-center">
            {/* Logo */}
            <div className='ml-0 flex'>
            <Link to="/">
              <span className="sr-only">Logo</span>
              <Image src={Logo} alt='Page logo' className='w-28 xs:w-36 md:w-40' />
            </Link>
            </div>


            <ul className="hidden list-none lg:flex lg:flex-1 lg:gap-x-14 lg:justify-center">
              {Navigation.map((item, i) => (
                <li>
                  <Link
                    activeClass='active'
                    spy={true}
                    to={item.path}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i}
                    className={`text-sm lg:text-base xl:text-lg font-medium leading-6 ${headerListColour} hover:text-secondary`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-auto flex flex-shrink-0 items-center">
              <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link to="/" className={`transition duration-500 ease-out text-sm lg:text-lg font-medium ${btnStyles} rounded-full border-[1px] px-4 py-2.5 mr-4 xs:px-5 sm:px-8 sm:py-3.5 md:text-base lg:-mr-5`}>
                  Get Started
                </Link>
              </div>

              <div className="flex lg:ml-6">
                <button
                  type="button"
                  className="rounded-md p-2 lg:hidden -m-2.5  outline-none text-gray-900"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <IoMdMenu className={`h-6 w-6 ${openMenuBtnColor}`} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>


  );
};



export default NavbarComponent;