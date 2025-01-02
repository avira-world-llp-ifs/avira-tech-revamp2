
 "use client";

import { Navbar, Button, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css"
import { usePathname } from "next/navigation";
 import logo from '../../../public/assets/logo.jpg'


export default function CustomNavbar() {

  const pathname = usePathname();
  return (


    <Navbar
      fluid
      className="bg-white dark:bg-gray-900 w-11/12 z-20  fixed left-0 right-0  border-gray-200 dark:border-gray-600 my-3 mx-auto opacity-80 nav "
    >
      <NavbarBrand href="/">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={logo}
            alt="avira-tech"
            width={100}
            height={100}
            className="md:ms-5"
          />
         
        </div>
      </NavbarBrand>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Link href="/about-us" passHref  legacyBehavior >
        <Button className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 md:me-5">Contact Us</Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link href="/" passHref  legacyBehavior >
        <NavbarLink  className={`${
              pathname === "/" ? "text-pink-600 font-bold" : "text-gray-900"
            } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
          >
            Home
            </NavbarLink>
        </Link>
        <Link href="/services" passHref legacyBehavior >
          <NavbarLink   className={`${
              pathname === "/services" ? "text-pink-600 font-bold" : "text-gray-900"
            } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
          >
            Services
          </NavbarLink>
        </Link>
        <Link href="/web" passHref legacyBehavior>
          <NavbarLink   className={`${
              pathname === "/web" ? "text-pink-600 font-bold" : "text-gray-900"
            } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
          >
            Web Developement
          </NavbarLink>
        </Link>
        <Link href="/app-dev" passHref legacyBehavior>
          <NavbarLink   className={`${
              pathname === "/app-dev" ? "text-pink-600 font-bold" : "text-gray-900"
            } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
          >
            Android Developement
          </NavbarLink>
        </Link>
        <Link href="/ux" passHref legacyBehavior>
          <NavbarLink   className={`${
              pathname === "/ux" ? "text-pink-600 font-bold" : "text-gray-900"
            } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
          >
            UI/UX
          </NavbarLink>
        </Link>
        <Link href="/cybersecurity" passHref legacyBehavior>
          <NavbarLink   className={`${
              pathname === "/cybersecurity" ? "text-pink-600 font-bold" : "text-gray-900"
            } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
          >
            Cyber Security
          </NavbarLink>
        </Link>
        <Link href="/software" passHref legacyBehavior>
          <NavbarLink   className={`${
              pathname === "/software" ? "text-pink-600 font-bold" : "text-gray-900"
            } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
          >
            Software
          </NavbarLink>
        </Link>
   
      </NavbarCollapse>
    </Navbar>
  );
}


// <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
// <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//     <Image
//       src="https://flowbite.com/docs/images/logo.svg"
//       alt="Flowbite Logo"
//       width={32}
//       height={32}
//       className="h-8"
//     />
//     <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//       Flowbite
//     </span>
//   </Link>
//   <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//     <button
//       type="button"
//       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//     >
//       Get started
//     </button>
//     <button
//       data-collapse-toggle="navbar-sticky"
//       type="button"
//       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//       aria-controls="navbar-sticky"
//       aria-expanded="false"
//     >
//       <span className="sr-only">Open main menu</span>
//       <svg
//         className="w-5 h-5"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 17 14"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M1 1h15M1 7h15M1 13h15"
//         />
//       </svg>
//     </button>
//   </div>
//   <div
//     className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//     id="navbar-sticky"
//   >
//     <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//           About
//         </Link>
//       </li>
//       <li>
//         <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//           Services
//         </Link>
//       </li>
//       <li>
//         <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//           Contact
//         </Link>
//       </li>
//     </ul>
//   </div>
// </div>
// </nav>