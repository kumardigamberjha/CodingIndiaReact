import React from 'react'
import Header from '../Header'
import myImg from '../../images/blog.png'
import Footer from '../Footer'

const AllBlogs = () => {
    return (
        <div>
            <Header />
            <section className="text-gray-600 body-font" style={{background: "#260037"}}>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Explore Blogs - Written By Our Users For Users
                        </h1>
                        <p className="mb-8 text-gray-100 leading-relaxed">Discover a wealth of knowledge and insights on our blog, written by users for users. Our community of contributors shares their expertise, experiences, and opinions on a wide range of topics, providing valuable information and practical advice. From tech and business to lifestyle and travel, our blog covers it all. So dive in, read our blogs, and get the most out of it. Join our community and become a part of the conversation today!</p>
                        <div className="flex justify-center">
                            {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={myImg} style={{width: "100%", height: "80vh"}} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AllBlogs