'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import React, { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      
      <div className="flex flex-col lg:hidden items-center relative">
        {toggleMenu
          ? <Image src="close.svg" alt="close" width={28} height={28} className='bg-green-90 rounded-2xl' onClick={() => setToggleMenu(false)}/>
          : <Image src="menu.svg" alt="menu" width={28} height={28} className="inline-block cursor-pointer lg:hidden"onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="navbar-menu scale-up-center bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 text-gray-20 flexCenter cursor-pointer mb-1.5 transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
            
            <div className="flex flex-col items-center justify-center mt-2">
              <Link href='/LogIn' className="text-gray-10 hover:text-green-50">Log in</Link>
              <Link className="text-green-50 regular-14 mt-2 hover:underline" href='/SignUp'>Not Registered? Sign up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar