import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjEzNjItYmctMDJfMS5qcGc.jpg')] bg-cover bg-center border-gray-200 px-4 lg:px-6 py-2.5">
                <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/3135/3135810.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                    <a
    href="https://www.linkedin.com/in/yuvraaj-singh-701190260/" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-white bg-blue-800 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
  >
                            LinkedIn
                    
                        </a>
                    </div>
                    <div
                        className="  hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className=" flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4
                                         text-white 
                                        pl-3 duration-200 ${isActive ? "text-purple-700":"text-gray-700"} border-b 
                                        border-gray-100
                                        hover:bg-gray-50
                                        lg:hover:bg-transparent
                                        lg:border-0 hover:text-purple-700
                                        lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/education"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 
                                        text-white 
                                        pl-3 duration-200 ${isActive ? "text-prple-700":"text-gray-700"} border-b 
                                        border-gray-100
                                        hover:bg-gray-50
                                        lg:hover:bg-transparent
                                        lg:border-0 hover:text-purple-700
                                        lg:p-0`
                                    }
                                >
                                    Education
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/certifications"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 
                                     text-white 
                                        pl-3 duration-200 ${isActive ? "text-purple-700":"text-gray-700"} border-b 
                                        border-gray-100
                                        hover:bg-gray-50
                                        lg:hover:bg-transparent
                                        lg:border-0 hover:text-purple-700
                                        lg:p-0`
                                    }
                                >
                                    Certifications
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/projects"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 
                                         text-white 
                                        pl-3 duration-200 ${isActive ? "text-purple-700":"text-gray-700"} border-b 
                                        border-gray-100
                                        hover:bg-gray-50
                                        lg:hover:bg-transparent
                                        lg:border-0 hover:text-purple-700
                                        lg:p-0`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                             <li>
                                <NavLink
                                to="/skills"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 
                                         text-white 
                                        pl-3 duration-200 ${isActive ? "text-purple-700":"text-gray-700"} border-b 
                                        border-gray-100
                                        hover:bg-gray-50
                                        lg:hover:bg-transparent
                                        lg:border-0 hover:text-purple-700
                                        lg:p-0`
                                    }
                                >
                                    Skills
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

