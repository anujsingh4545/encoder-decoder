import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="fixed top-0  z-30 w-[100%] bg-black shadow-sm shadow-black  ">
      {/*  */}

      <div className=" my-4 mx-auto  flex w-[100%] max-w-[85rem]  items-center justify-between border-0 px-5 ">
        <img
          src="/icon-web.png"
          alt=""
          className="my-1 hidden h-14 px-2 md:my-2 md:inline md:h-16  lg:my-1 lg:h-14"
        />
        <img
          src="/icon-phone.png"
          alt=""
          className=" my-1 h-12 px-2 md:hidden "
        />

        <section className="flex items-baseline border-0 ">
          <div className=" mr-2 flex sm:mr-10 ">
            <Link href="/">
              <a className=" nav-link mx-5 text-[1.5rem] italic text-white  sm:mr-10 sm:text-[2rem] ">
                Home
              </a>
            </Link>

            <Link href="/About">
              <a className=" nav-link ml-5 text-[1.5rem] italic text-white  sm:ml-10 sm:text-[2rem] ">
                About us
              </a>
            </Link>
          </div>
        </section>

        {/*  */}
      </div>

      {/*  */}
    </div>
  )
}

export default Header
