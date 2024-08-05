import React from "react";

const Footer = () => {
    return (
        <div>
            <footer>
                <section
                    className="footer"
                    style={{
                        backgroundColor: 'white'
                    }}>
                    <div className="container">
                        <ul
                            className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
                            <li>
                                <div className="space-y-3">
                                    <a
                                        href="href"
                                        className="text-4xl font-oswald uppercase"
                                        style={{
                                            color: 'black'
                                        }}>ANIMAL<span className="text-secondaryColor">HOUSE</span>
                                    </a>
                                    <p
                                        className="text-xs"
                                        style={{
                                            color: 'black'
                                        }}>Lorem,
                                        ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis saepe numquam
                                        animi perspiciatis ea hic quos tenetur aliquid omnis?</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-col gap-3">
                                    <h3
                                        className="text-lg uppercase font-oswald"
                                        style={{
                                            color: 'black'
                                        }}>SUPPORT</h3>
                                    <a
                                        href="href"
                                        className="text-xs hover:text-secondaryColor"
                                        style={{
                                            color: 'black'
                                        }}>FAQ's</a>
                                    <a
                                        href="href"
                                        className="text-xs hover:text-secondaryColor"
                                        style={{
                                            color: 'black'
                                        }}>Privacy</a>
                                    <a
                                        href="href"
                                        className="text-xs hover:text-secondaryColor"
                                        style={{
                                            color: 'black'
                                        }}>Term &amp; Condition</a>
                                    <a
                                        href="href"
                                        className="text-xs hover:text-secondaryColor"
                                        style={{
                                            color: 'black'
                                        }}>Contact</a>
                                </div>
                            </li>
                            <li className="space-y-8">
                                <div className="space-y-2">
                                    <h3
                                        className="text-lg uppercase font-oswald"
                                        style={{
                                            color: 'black'
                                        }}>phone</h3>
                                    <p
                                        className="flex items-center gap-2 text-xs"
                                        style={{
                                            color: 'black'
                                        }}>
                                        <i className="fa-solid fa-phone text-lg text-secondaryColor"/>
                                        +1 000 000 000
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3
                                        className="text-lg uppercase font-oswald"
                                        style={{
                                            color: 'black'
                                        }}>email</h3>
                                    <p
                                        className="flex items-center gap-2 text-xs"
                                        style={{
                                            color: 'black'
                                        }}>
                                        <i className="fa-solid fa-envelope text-lg text-secondaryColor"/>
                                        kebabturkey.info@email.com
                                    </p>
                                </div>
                            </li>
                            <li className="space-y-8">
                                <div className="space-y-2">
                                    <h3
                                        className="text-lg uppercase font-oswald"
                                        style={{
                                            color: 'black'
                                        }}>address</h3>
                                    <p
                                        className="flex items-center gap-2 text-xs"
                                        style={{
                                            color: 'black'
                                        }}>
                                        <i className="fa-solid fa-location-dot text-lg text-secondaryColor"/>
                                        Address goes here
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3
                                        className="text-lg uppercase font-oswald"
                                        style={{
                                            color: 'black'
                                        }}>follow us</h3>
                                    <div className="space-x-3">
                                        <i
                                            className="fa-brands fa-facebook-f text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"/>
                                        <i
                                            className="fa-brands fa-twitter text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"/>
                                        <i
                                            className="fa-brands fa-square-instagram text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div
                            className="flex flex-col items-center border-t border-secondaryColor dark:border-darkColorLight py-5 md:flex-row md:justify-between">
                            <p
                                className="paragraph"
                                style={{
                                    color: 'black'
                                }}>AnimalsHouse Code Kit by RayanRheza</p>
                            <p
                                className="paragraph"
                                style={{
                                    color: 'black'
                                }}>Copyright @ 2024. All rights reserved.</p>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer;