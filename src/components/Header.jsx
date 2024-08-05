import React from "react";
import Main from "../pages/Main";

const Header = () => {
    return (
        <div>
            <header
                className=" dark:bg-darkColor fixed top-0 left-0 w-full z-50"
                style={{
                    backgroundColor: 'wheat'
                }}
                id="header">
                <nav className="container relative h-14 flex justify-between items-center">
                    <div>
                        <a href="/" className="text-2xl uppercase font-oswald">Animal<span className="text-secondaryColor">House</span>
                        </a>
                    </div>
                    <div
                        className="hidden absolute top-0 left-0 w-full py-14 bg-primaryColor dark:bg-darkColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto"
                        id="nav-Product"
                        style={{
                            backgroundColor: 'wheat'
                        }}>
                        <ul className="flex flex-col text-center gap-5 md:flex-row pr-4">
                            <li>
                                <a
                                    href="/"
                                    className="nav__link text-secondaryColor hover:text-secondaryColor ease-in duration-200">Home</a>
                            </li>
                            <li>
                                <a
                                    href="/Pet"
                                    className="nav__link hover:text-secondaryColor ease-in duration-200">Pet</a>
                            </li>
                            <li className="li__color">
                                <a
                                    href="/Product"
                                    className="nav__link hover:text-secondaryColor ease-in duration-200">Product</a>

                                    {/* <Link to ="/Product"/> Product */}
                            </li>
                            <li>
                                <a
                                    href="#review"
                                    className="nav__link hover:text-secondaryColor ease-in duration-200">Review</a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="nav__link hover:text-secondaryColor ease-in duration-200">Contact</a>
                            </li>
                        </ul>
                        <div
                            className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden"
                            id="nav-close">
                            <i className="ri-close-line"/>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="btn__header btn-primary rounded-full"
                        style={{
                            padding: '0 15px'
                        }}>
                        Join
                        <i
                            className="ri-add-circle-line"
                            style={{
                                marginLeft: '0.5rem'
                            }}/>
                    </a>
                    <div className="flex items-center gap-5">
                        <i className="ri-moon-line cursor-pointer ml-4 text-xl" id="theme-toggle"/>
                        <div className="md:hidden" id="hamburger">
                            <i className="ri-Product-2-line cursor-pointer text-xl"/>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;