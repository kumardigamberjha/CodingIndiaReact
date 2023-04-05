import React from 'react'
import github from '../../images/github.png'
import python from '../../images/python.png'
import web from '../../images/web.png'
import react from '../../images/react.png'
import bootstrap from '../../images/bootstrap.png'
import htmlcss from '../../images/htmlcss.png'
import mysql from '../../images/mysql.png'

const services = () => {
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Offer?</h2>
                        <p className="mt-4 text-gray-500">We are a team of technical professionals who are dedicated to helping our clients achieve their goals. With years of experience in web development, we specialize in creating dynamic and responsive websites that are tailored to meet the unique needs of our clients. Our team also includes skilled graphic designers who can create stunning logos and graphics that help to visually represent our clients' brand identity. Additionally, we offer consultation services to students who are looking to improve their academic and career prospects. Our team is committed to providing high-quality services and solutions that exceed our clients' expectations. Whether you're looking to build a website, create a new logo, or receive expert guidance on your academic or career goals, we're here to help.</p>

                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Website Development</dt>
                                <dd className="mt-2 text-sm text-gray-500">We offer professional web development services to help businesses and individuals establish an effective online presence.</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Logo Designing</dt>
                                <dd className="mt-2 text-sm text-gray-500">We offer expert logo designing services to help businesses and individuals create a unique brand identity and establish a professional image.</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Tutorials</dt>
                                <dd className="mt-2 text-sm text-gray-500">We offer comprehensive tutorials and guidance to students and professionals looking to improve their skills and achieve their academic or career goals.</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Expert Guidance for Students</dt>
                                <dd className="mt-2 text-sm text-gray-500">We provide personalized consultation services to students, helping them to explore their academic and career options, set achievable goals, and develop the skills and knowledge needed to succeed in their chosen fields.</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">2D/3D Animation Designing</dt>
                                <dd className="mt-2 text-sm text-gray-500">We offer professional 2D/3D animation services to help businesses and individuals bring their ideas to life with dynamic and visually stunning digital content.</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        {/* <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
                        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100" />
                        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100" />
                        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100" /> */}
                        <img src={github} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
                        <img src={python} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100" />
                        <img src={web} alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
                        <img src={react} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
                        <img src={htmlcss} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
                        <img src={bootstrap} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
                        <img src={mysql} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default services