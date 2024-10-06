import React, {useEffect} from 'react'

function Navbar() {

  
useEffect(()=>{


  const navbar = document.getElementById('navbar')

  const handleScroll = ()=> {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;




    if (scrollTop > 70) {
      // Scrolling down
      navbar.style.top = '-70px'; // Adjust the value based on your navbar height
    } else {
      // Scrolling up

      navbar.style.top = '0px';
    }

  }

  window.addEventListener('scroll', handleScroll);

  return ()=> {
    window.removeEventListener('scroll', handleScroll)
  }

}, [])
  return (
    <div>
      

        <nav className=" fixed w-full z-20 top-0 start-0" id="navbar">


          <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4" id='nav-content'>



            <div className="items-center justify-center hidden w-full md:flex md:w-auto sm:order-1" id="navbar-sticky">

              <ul className="flex flex-col gap-2 p-4 md:p-0 mt-4 font-medium  md:space-x-40 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <a href="#home" className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#about" className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                  <a href="#work" className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Works</a>
                </li>
                <li>
                  <a href="#contact" className="block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
              </ul>

            </div>

          </div>
        </nav>

    </div>
  )
}

export default Navbar
