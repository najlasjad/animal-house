import React from "react";
import '../styles/Main.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
// var Index = React.createClass({
//     render: function () {


const Main = () => {
    return (
        <div>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="shortcut icon" href="./img/favicon.png" type="image/x-icon"/>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"/>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
                rel="stylesheet"/>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
            <link href="/styles/Main.css" rel="stylesheet"/>
            <title>Product-website</title>
            {/* header */}

            <Header></Header>
            
            <main>
                {/* home */}
                <section
                    id="home"
                    className="bg-white"
                    style={{
                        paddingBottom: '4rem',
                        marginTop: '2rem'
                    }}>
                    <div className="container flex flex-col items-center gap-10 md:flex-row">
                        {/* <div class="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">

        </div> */
                        }
                        <div
                            className="home__content text-center md:basis-1/2 md:text-start lg:basis-3/5">
                            <h1
                                className="home__title"
                                style={{
                                    color: 'black',
                                    fontSize: '3.5rem'
                                }}>One More Friend</h1>
                            <h1
                                className="text__title2"
                                style={{
                                    color: 'black',
                                    fontSize: '3rem'
                                }}>Thousands More Fun!</h1>
                            <div className="separator mx-auto md:mx-0"/>
                            <p className="paragraph">
                                Having a pet means you have more joy, a new friend, a happy person who will
                                always be with you to have fun, We have 200+. the UK's largest pet retailer.
                                Shop online or in store for pet food, toys, accessories, grooming, vet services
                                and more. different pets that can meet your needs!
                            </p>
                            <div
                                className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
                                <div
                                    className="text-center"
                                    style={{
                                        color: 'black'
                                    }}>
                                    <i className="ri-hospital-fill text-secondaryColor text-4xl"/>
                                    <br/>
                                    Hospital
                                </div>
                                <div
                                    className="text-center"
                                    style={{
                                        color: 'black'
                                    }}>
                                    <i className="ri-service-fill text-secondaryColor text-4xl"/>
                                    <br/>
                                    Heart
                                </div>
                                <div
                                    className="text-center"
                                    style={{
                                        color: 'black'
                                    }}>
                                    <i className="ri-home-heart-fill text-secondaryColor text-4xl"/>
                                    <br/>
                                    Home
                                </div>
                            </div>
                            <a
                                href="#"
                                className="btn__header2 btn__header rounded-full"
                                style={{
                                    color: 'black',
                                    border: '1px solid black',
                                    padding: '0.70rem 2rem 0.70rem 2rem'
                                }}>View Intro<i
                                className="ri-play-circle-line"
                                style={{
                paddingLeft: '0.5rem',
                color: 'black'
            }}/></a>
                            <a
                                href="/Pet"
                                className="btn btn-primary rounded-full"
                                style={{
                                    marginLeft: '1rem'
                                }}>
                                Explore Now
                            </a>
                        </div>
                        <img
                            src={require("../img/anjing_dan_orang-removebg-preview.png")}
                            alt="home-image"
                            className="home__image w-96 md:w-full"
                            style={{
                                height: '300px',
                                width: '400px'
                            }}/>
                    </div>
                </section>
                {/* Category */}
                <section
                    id="category"
                    style={{
                        backgroundColor: 'wheat',
                        paddingBottom: '5rem'
                    }}>
                    <div className="container flex flex-col gap-5 md:flex-row">
                        {/* card 1 */}
                        <div
                            className="category__card  bg-white py-3 rounded-lg overflow-hidden md:flex-1">
                            <div>
                                <div
                                    style={{
                                        display: 'flex'
                                    }}>
                                    <div
                                        className="mb-2"
                                        style={{
                                            marginRight: '31rem',
                                            marginLeft: '3.5rem'
                                        }}>
                                        <h4
                                            className="card__title"
                                            style={{
                                                color: 'black'
                                            }}>Whats new?</h4>
                                        <p
                                            className="text-xs"
                                            style={{
                                                color: 'black'
                                            }}>Take A Look At Some Of Our Pets</p>
                                    </div>
                                    <div className="mt-[0.8rem]">
                                        <a
                                            href="/Pet"
                                            className=" btn__header1 rounded-full pl-6 pr-6 pt-3 pb-3"
                                            style={{
                                                backgroundColor: 'black'
                                            }}>View More<i
                                            className="ri-arrow-right-s-line"
                                            style={{
                paddingLeft: '0.5rem'
            }}/></a>
                                    </div>
                                </div>
                                <div
                                    className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 "
                                    style={{
                                        padding: '1rem 2rem 2rem 2rem'
                                    }}>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/anjing.1.jpg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/jing1.jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem',
                                                    height: '140px'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/jing8.jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem',
                                                    height: '140px'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/jing2.jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem',
                                                    height: '140px'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/jing4.jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem',
                                                    height: '140px'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/jing5.jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem',
                                                    height: '140px'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/jing6.jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem',
                                                    height: '140px'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/jing7.jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem',
                                                    height: '140px'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="bg-white py-16">
                    <div className="container flex flex-col gap-5 md:items-center md:flex-row">
                        <div className="relative">
                            <div>
                                <img
                                    src={require("../img/Desain tanpa judul.png")}
                                    alt=""
                                    className="h-[260px] w-[1000px]"/>
                                <div>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            marginLeft: '37rem',
                                            marginRight: '2rem',
                                            marginTop: '0.5rem'
                                        }}>
                                        <h1
                                            className="font-oswald"
                                            style={{
                                                textAlign: 'right',
                                                fontSize: '3rem',
                                                color: 'black'
                                            }}>One More Friend</h1>
                                        <h3
                                            style={{
                                                fontWeight: 500,
                                                textAlign: 'right',
                                                fontSize: '1.5rem',
                                                color: 'black',
                                                fontFamily: 'sans-serif'
                                            }}>Thousands More Fun!</h3>
                                        <p
                                            style={{
                                                textAlign: 'right',
                                                fontSize: '0.7rem',
                                                color: 'black'
                                            }}>Having
                                            a pet means you have morejoy, a new friend, a happy person who will always be
                                            with you to have fun, We have 200+ different pets that can meet your needs!</p>
                                        <div
                                            style={{
                                                marginTop: '1rem',
                                                marginLeft: '5rem'
                                            }}>
                                            <a
                                                href="#"
                                                className="btn__header2 btn__header rounded-full"
                                                style={{
                                                    color: 'black',
                                                    border: '1px solid black',
                                                    padding: '5px 10px'
                                                }}>View Intro<i
                                                className="ri-play-circle-line"
                                                style={{
                paddingLeft: '0.5rem',
                color: 'black'
            }}/></a>
                                            <a
                                                href="#"
                                                className=" btn-primary rounded-full"
                                                style={{
                                                    padding: '5px 10px',
                                                    marginLeft: '1rem'
                                                }}>
                                                Explore Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="category"
                    style={{
                        backgroundColor: 'wheat',
                        paddingBottom: '5rem'
                    }}>
                    <div className="container flex flex-col gap-5 md:flex-row">
                        {/* card 1 */}
                        <div
                            className="category__card  bg-white py-3 rounded-lg overflow-hidden md:flex-1">
                            <div>
                                <div
                                    style={{
                                        display: 'flex'
                                    }}>
                                    <div
                                        className="mb-2"
                                        style={{
                                            marginRight: '27rem',
                                            marginLeft: '3.5rem'
                                        }}>
                                        <h4
                                            className="text-xs"
                                            style={{
                                                color: 'black'
                                            }}>Hard to chose right products for you pets?</h4>
                                        <p
                                            className="card__title"
                                            style={{
                                                color: 'black'
                                            }}>Our Products</p>
                                    </div>
                                    <div className="mt-[0.8rem]">
                                        <a
                                            href="#"
                                            className=" btn__header1 rounded-full pl-6 pr-6 pt-3 pb-3"
                                            style={{
                                                backgroundColor: 'black'
                                            }}>View Intro<i
                                            className="ri-arrow-right-s-line"
                                            style={{
                paddingLeft: '0.5rem'
            }}/></a>
                                    </div>
                                </div>
                                <div
                                    className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 "
                                    style={{
                                        padding: '1rem 2rem 2rem 2rem'
                                    }}>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem',
                                            paddingBottom: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/th (1).jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                        <div
                                            style={{
                                                paddingLeft: '0.7rem'
                                            }}>
                                            <a
                                                href="/ProductDetail"
                                                className=" btn__header1"
                                                style={{
                                                    fontSize: '8px',
                                                    padding: '5px 23px',
                                                    backgroundColor: 'black',
                                                    borderRadius: '5px'
                                                }}><i
                                                className="ri-gift-2-fill"
                                                style={{
                paddingRight: '5px'
            }}/>+ Free Toy &amp; Free Shaker</a>
                                        </div>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem',
                                            paddingBottom: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/th.jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                        <div
                                            style={{
                                                paddingLeft: '0.7rem'
                                            }}>
                                            <a
                                                href="/ProductDetail"
                                                className=" btn__header1"
                                                style={{
                                                    fontSize: '8px',
                                                    padding: '5px 23px',
                                                    backgroundColor: 'black',
                                                    borderRadius: '5px'
                                                }}><i
                                                className="ri-gift-2-fill"
                                                style={{
                paddingRight: '5px'
            }}/>+ Free Toy &amp; Free Shaker</a>
                                        </div>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem',
                                            paddingBottom: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/th (2).jpeg")}
                                                alt=""
                                                style={{
                                                    borderRadius: '0.5rem',
                                                    width: '57%'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                        <div
                                            style={{
                                                paddingLeft: '0.7rem'
                                            }}>
                                            <a
                                                href="/ProductDetail"
                                                className=" btn__header1"
                                                style={{
                                                    fontSize: '8px',
                                                    padding: '5px 23px',
                                                    backgroundColor: 'black',
                                                    borderRadius: '5px'
                                                }}><i
                                                className="ri-gift-2-fill"
                                                style={{
                paddingRight: '5px'
            }}/>+ Free Toy &amp; Free Shaker</a>
                                        </div>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem',
                                            paddingBottom: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/th (3).jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                        <div
                                            style={{
                                                paddingLeft: '0.7rem'
                                            }}>
                                            <a
                                                href="/ProductDetail"
                                                className=" btn__header1"
                                                style={{
                                                    fontSize: '8px',
                                                    padding: '5px 23px',
                                                    backgroundColor: 'black',
                                                    borderRadius: '5px'
                                                }}><i
                                                className="ri-gift-2-fill"
                                                style={{
                paddingRight: '5px'
            }}/>+ Free Toy &amp; Free Shaker</a>
                                        </div>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem',
                                            paddingBottom: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/th (4).jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                        <div
                                            style={{
                                                paddingLeft: '0.7rem'
                                            }}>
                                            <a
                                                href="/ProductDetail"
                                                className=" btn__header1"
                                                style={{
                                                    fontSize: '8px',
                                                    padding: '5px 23px',
                                                    backgroundColor: 'black',
                                                    borderRadius: '5px'
                                                }}><i
                                                className="ri-gift-2-fill"
                                                style={{
                paddingRight: '5px'
            }}/>+ Free Toy &amp; Free Shaker</a>
                                        </div>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem',
                                            paddingBottom: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                                src={require("../img/th (5).jpeg")}
                                                alt=""
                                                className="w-[75%]"
                                                style={{
                                                    borderRadius: '0.5rem'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                        <div
                                            style={{
                                                paddingLeft: '0.7rem'
                                            }}>
                                            <a
                                                href="/ProductDetail"
                                                className=" btn__header1"
                                                style={{
                                                    fontSize: '8px',
                                                    padding: '5px 23px',
                                                    backgroundColor: 'black',
                                                    borderRadius: '5px'
                                                }}><i
                                                className="ri-gift-2-fill"
                                                style={{
                paddingRight: '5px'
            }}/>+ Free Toy &amp; Free Shaker</a>
                                        </div>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem',
                                            paddingBottom: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                            src={require("../img/th (6).jpeg")}
                                                alt=""
                                                style={{
                                                    borderRadius: '0.5rem',
                                                    width: '85%'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                        <div
                                            style={{
                                                paddingLeft: '0.7rem'
                                            }}>
                                            <a
                                                href="/ProductDetail"
                                                className=" btn__header1"
                                                style={{
                                                    fontSize: '8px',
                                                    padding: '5px 23px',
                                                    backgroundColor: 'black',
                                                    borderRadius: '5px'
                                                }}><i
                                                className="ri-gift-2-fill"
                                                style={{
                paddingRight: '5px'
            }}/>+ Free Toy &amp; Free Shaker</a>
                                        </div>
                                    </div>
                                    <div
                                        className=" pt-5 md:pt-0 bg-secondaryColor "
                                        style={{
                                            borderRadius: '0.7rem',
                                            paddingTop: '1rem',
                                            paddingBottom: '1rem'
                                        }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '2px'
                                            }}>
                                            <img
                                            src={require("../img/th (7).jpeg")}
                                                alt=""
                                                style={{
                                                    borderRadius: '0.5rem',
                                                    width: '65%'
                                                }}/>
                                        </div>
                                        <h3
                                            className="card__title"
                                            style={{
                                                paddingTop: '0.2rem',
                                                color: 'black',
                                                fontSize: '0.8rem',
                                                paddingLeft: '1rem'
                                            }}>MO231 - Pomerania Whiet</h3>
                                        <p
                                            className="paragraph"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 500,
                                                fontSize: '0.6rem',
                                                paddingLeft: '1rem'
                                            }}>Gane: Male &amp; Age: 10 months</p>
                                        <a
                                            href="/ProductDetail"
                                            className="text-xs text-secondaryColor"
                                            style={{
                                                paddingLeft: '1rem',
                                                color: 'black',
                                                fontFamily: 'fantasy',
                                                fontWeight: 500
                                            }}>6.900.000 VND</a>
                                        <div
                                            style={{
                                                paddingLeft: '0.7rem'
                                            }}>
                                            <a
                                                href="/ProductDetail"
                                                className=" btn__header1"
                                                style={{
                                                    fontSize: '8px',
                                                    padding: '5px 23px',
                                                    backgroundColor: 'black',
                                                    borderRadius: '5px'
                                                }}><i
                                                className="ri-gift-2-fill"
                                                style={{
                paddingRight: '5px'
            }}/>+ Free Toy &amp; Free Shaker</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="bg-white py-16">
                    <div className="container flex flex-col gap-5 md:items-center md:flex-row">
                        <div className="relative">
                            <div>
                                <div>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            marginLeft: '2rem',
                                            marginRight: '37rem',
                                            marginTop: '0.5rem'
                                        }}>
                                        <h1
                                            className="font-oswald"
                                            style={{
                                                textAlign: 'left',
                                                fontSize: '3rem',
                                                color: 'black'
                                            }}>Adoption</h1>
                                        <h3
                                            style={{
                                                fontWeight: 500,
                                                textAlign: 'left',
                                                fontSize: '1.5rem',
                                                color: 'black',
                                                fontFamily: 'sans-serif'
                                            }}>We Need Help, So Do They</h3>
                                        <p
                                            style={{
                                                textAlign: 'left',
                                                fontSize: '0.7rem',
                                                color: 'black'
                                            }}>Having
                                            a pet means you have morejoy, a new friend, a happy person who will always be
                                            with you to have fun, We have 200+ different pets that can meet your needs!</p>
                                        <div
                                            style={{
                                                marginTop: '1rem'
                                            }}>
                                            <a
                                                href="#"
                                                className="btn__header2 btn__header rounded-full"
                                                style={{
                                                    color: 'black',
                                                    border: '1px solid black',
                                                    padding: '5px 10px'
                                                }}>View Intro<i
                                                className="ri-play-circle-line"
                                                style={{
                paddingLeft: '0.5rem',
                color: 'black'
            }}/></a>
                                            <a
                                                href="#"
                                                className=" btn-primary rounded-full"
                                                style={{
                                                    padding: '5px 10px',
                                                    marginLeft: '1rem'
                                                }}>
                                                Explore Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <img src={require("../img/jabat.png")} alt="" className="h-[260px] w-[1000px]"/>
                            </div>
                        </div>
                    </div>
                </section>
                {/* review */}
                <section
                    id="review"
                    className="  dark:bg-darkColorLight"
                    style={{
                        backgroundColor: 'wheat'
                    }}>
                    <div
                        className="container flex flex-col gap-5 md:flex-row bg-secondaryColor rounded-xl"
                        style={{
                            marginBottom: '4rem'
                        }}>
                        {/* card 1 */}
                        <div className="category__card py-3 rounded-lg overflow-hidden md:flex-1">
                            <div>
                                <div
                                    style={{
                                        display: 'flex'
                                    }}>
                                    <div
                                        className="mb-2"
                                        style={{
                                            marginRight: '27rem',
                                            marginLeft: '3.5rem'
                                        }}>
                                        <h4
                                            className="text-xs"
                                            style={{
                                                color: 'black'
                                            }}>You already know ?</h4>
                                        <p
                                            className="card__title"
                                            style={{
                                                color: 'black'
                                            }}>Useful Pet Knowledge</p>
                                    </div>
                                    <div className="mt-[0.8rem]">
                                        <a
                                            href="#"
                                            className=" btn__header1 rounded-full pl-6 pr-6 pt-3 pb-3"
                                            style={{
                                                backgroundColor: 'black'
                                            }}>View More<i
                                            className="ri-arrow-right-s-line"
                                            style={{
                paddingLeft: '0.5rem'
            }}/></a>
                                    </div>
                                </div>
                                <div className="swiper py-10">
                                    <ul className="swiper-wrapper">
                                        <li className="swiper-slide">
                                            <div
                                                className="flex flex-col gap-5 dark:bg-darkColor rounded-lg p-6"
                                                style={{
                                                    backgroundColor: 'white'
                                                }}>
                                                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit. Nostrum porro a itaque iure laboriosam minima accusantium unde?</p>
                                                <div className="flex items-center">
                                                    <img
                                                        src={require("../img/logo-review3.jpeg")}
                                                        alt="review-image"
                                                        className="w-12 h-12 rounded-full"/>
                                                    <div className="ml-2">
                                                        <p className="font-oswald uppercase">Rayan Rheza</p>
                                                        <p className="paragraph">Full Stack Developer</p>
                                                    </div>
                                                    <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="swiper-slide">
                                            <div
                                                className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6"
                                                style={{
                                                    backgroundColor: 'white'
                                                }}>
                                                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit. Nostrum porro a itaque iure laboriosam minima accusantium unde?</p>
                                                <div className="flex items-center">
                                                    <img
                                                        src={require("../img/logo-review3.jpeg")}
                                                        alt="review-image"
                                                        className="w-12 h-12 rounded-full"/>
                                                    <div className="ml-2">
                                                        <p className="font-oswald uppercase">Rayan Rheza</p>
                                                        <p className="paragraph">Full Stack Developer</p>
                                                    </div>
                                                    <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="swiper-slide">
                                            <div
                                                className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6"
                                                style={{
                                                    backgroundColor: 'white'
                                                }}>
                                                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit. Nostrum porro a itaque iure laboriosam minima accusantium unde?</p>
                                                <div className="flex items-center">
                                                    <img
                                                        src={require("../img/logo-review4.jpeg")}
                                                        alt="review-image"
                                                        className="w-12 h-12 rounded-full"/>
                                                    <div className="ml-2">
                                                        <p className="font-oswald uppercase">Rayan Rheza</p>
                                                        <p className="paragraph">Full Stack Developer</p>
                                                    </div>
                                                    <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="swiper-slide">
                                            <div
                                                className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6"
                                                style={{
                                                    backgroundColor: 'white'
                                                }}>
                                                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit. Nostrum porro a itaque iure laboriosam minima accusantium unde?</p>
                                                <div className="flex items-center">
                                                    <img
                                                        src={require("../img/logo-review5.jpeg")}
                                                        alt="review-image"
                                                        className="w-12 h-12 rounded-full"/>
                                                    <div className="ml-2">
                                                        <p className="font-oswald uppercase">Rayan Rheza</p>
                                                        <p className="paragraph">Full Stack Developer</p>
                                                    </div>
                                                    <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"/>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="swiper-pagination"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* footer */}

            <Footer></Footer>
            
            {/* Scroll Up */}
            <a
                href="#"
                className="fixed right-4 -bottom-1/2 bg-secondaryColor shadow-sm inline-block px-4 py-2 rounded-full text-lg text-blackColor z-50 hover:-translate-y-1 ease-in duration-200"
                id="scroll-up">
                <i className="fa-solid fa-arrow-up"/>
            </a>
        </div>
    )
}

export default Main;