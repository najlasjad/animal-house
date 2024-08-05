import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/Product.css';

const Product = () => {
    return (
        <div className="Product-group">
            <Header></Header>
            <div className="bg-white">
                <div
                    className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <a href="#" className="group mx-auto">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={require("../img/food1.jpg")}
                                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Food Title</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">Rp 70.000,-</p>
                        </a>

                        <a href="#" className="group mx-auto">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={require("../img/food2.jpg")}
                                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Food Title</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">Rp 70.000,-</p>
                        </a>

                        <a href="#" className="group mx-auto">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={require("../img/food3.jpg")}
                                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Food Title</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">Rp 70.000,-</p>
                        </a>

                        <a href="#" className="group mx-auto">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={require("../img/food4.jpg")}
                                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Food Title</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">Rp 70.000,-</p>
                        </a>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <a href="#" className="group mx-auto">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={require("../img/food5.jpg")}
                                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Food Title</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">Rp 70.000,-</p>
                        </a>

                        <a href="#" className="group mx-auto">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={require("../img/food6.jpg")}
                                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Food Title</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">Rp 70.000,-</p>
                        </a>

                        <a href="#" className="group mx-auto">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={require("../img/food7.jpg")}
                                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Food Title</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">Rp 70.000,-</p>
                        </a>

                        <a href="#" className="group mx-auto">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={require("../img/food4.jpg")}
                                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Food Title</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">Rp 70.000,-</p>
                        </a>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Product;