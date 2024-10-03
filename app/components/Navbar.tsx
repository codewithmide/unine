"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./common/Logo";
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./common/Button";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="center md:pt-8 py-4 w-full relative font-medium  pt-6">
      <div className="between w-[90%]">
        <div className="center gap-[6rem]">
          <Logo />
          <div className="lg:gap-[3rem] lg:flex items-center justify-center sm:hidden text-grey">
            <Link href="/">Learn</Link>
            <Link href="/" className="center gap-2">
              <p>App</p>
              <img src="/icons/down.png" alt="" className="mt-1" />
            </Link>
            <Link href="/" className="center gap-2">
              <p>Community</p>
              <img src="/icons/down.png" alt="" className="mt-1" />
            </Link>
            <Link href="/">Unine at Work</Link>
          </div>
        </div>
        <div className="center gap-6 lg:flex sm:hidden">
          <Button
            link={() => {
              alert("Coming soon");
            }}
            classname="text-grey"
            cta="Sign up"
          />
          <Button
            link={() => {
              alert("Coming soon");
            }}
            cta="Get a demo"
            classname="text-black bg-green center text-center px-4 rounded-[15px]"
          />
        </div>
        <div className="lg:hidden text-white" onClick={handleOpenMenu}>
          <CiMenuFries fontSize={30} />
        </div>
      </div>
      {openMenu && (
        <div className="w-screen bg-white text-black absolute top-0 right-0 left-0 center py-6">
          <div className="w-[90%] flex-col flex">
            <div
              className="flex items-end justify-end"
              onClick={handleCloseMenu}
            >
              <TfiClose className="text-[1.5rem]" />
            </div>
            <div className="gap-8 mt-8 flex flex-col text-[1rem]">
              <Link href="/">Learn</Link>
              <Link href="/" className="flex items-start gap-2">
                <p>App</p>
                <img src="/icons/down.png" alt="" className="my-auto" />
              </Link>
              <Link href="/" className="flex items-start gap-2">
                <p>Community</p>
                <img src="/icons/down.png" alt="" className="my-auto" />
              </Link>
              <Link href="/">Unine at Work</Link>
              <Button
                link={() => {
                  alert("Coming soon");
                }}
                classname="text-black"
                cta="Sign up"
              />
              <Button
                link={() => {
                  alert("Coming soon");
                }}
                cta="Get a demo"
                classname="text-black bg-green center text-center px-4 rounded-[15px]"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
