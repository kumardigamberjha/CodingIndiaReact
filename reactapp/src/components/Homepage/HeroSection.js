import React from 'react'
import Header from '../Header'
import CompanyName from '../../Words/CompanyName'
import heroimg from '../../images/hero1.png'
import TypewriterHeading from '../../Words/TypewriterHeading'

const HeroSection = () => {
    
    return (
        <div style={{background: "#260037"}}>
            <Header />
            <section className="text-gray-600 body-font py-10">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-100">
                            <TypewriterHeading text={`Welcome To `} company={<CompanyName />} />
                        </h1>
                            
                        <p className="mb-8 leading-relaxed text-gray-200">Unlock your potential with our comprehensive coding curriculum. From beginner to advanced, we have everything you need to excel in the world of technology.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" style={{height: "60%"}} alt="hero" src={heroimg} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection