import React from 'react'

// const navbar_hide = document.getElementById("navbar")

// let lastScrollTop = 0

// navbar_hide.addEventListener('scroll', ()=>{
//   let currentScroll = window.scrollY || document.documentElement.scrollTop 

//   if(currentScroll > lastScrollTop){
//     navbar_hide.classList.add('hidden')
//   }

//   else{
//     navbar_hide.classList.remove('hidden')
//   }
// })

function Navbar() {
  return (
    <div>
      

        <nav className=" fixed w-full z-20 top-0 start-0" id="navbar">


          <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4" id='nav-content'>

          {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
             
             <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">

               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
               </svg>

            </button>

         </div> */}



            <div className="items-center justify-center hidden w-full md:flex md:w-auto sm:order-1" id="navbar-sticky">

              <ul className="flex flex-col gap-2 p-4 md:p-0 mt-4 font-medium  md:space-x-40 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <a href="/" className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
              </ul>

            </div>

          </div>
        </nav>

    </div>
  )
}

export default Navbar
