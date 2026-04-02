import React from 'react'
import frontendImg from '../../assets/images/front-end.png'
import uiImg from '../../assets/images/design.png'
import backendImg from '../../assets/images/backend.png'
import appsImg from '../../assets/images/apps.png'
import htmlLogo from '../../assets/images/htmlLogo.png'
import cssLogo from '../../assets/images/cssLogo.png'
import jsLogo from '../../assets/images/jsLogo.png'
import bootstrapLogo from '../../assets/images/bootstrapLogo.png'
import tailwindLogo from '../../assets/images/tailwindLogo.png'
import reactLogo from '../../assets/images/reactLogo.png'
import reduxLogo from '../../assets/images/reduxLogo.png'
import cShapLogo from '../../assets/images/cshapLogo.png'
import javaLogo from '../../assets/images/javaLogo.png'
import androidLogo from '../../assets/images/androidLogo.png'
import sqlLogo from '../../assets/images/sqlLogo.png'
import pythonLogo from '../../assets/images/pythonLogo.png'
import biLogo from '../../assets/images/biLogo.png'

const Services = () => {
  return (
    <section id='services'>
        <div className="container lg:pt-5">
            <div className="text-center">
                <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                    What do I help
                </h2>

                <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 text-justify'>
                I specialize in Frontend, Backend, Mobile Development, and Data Analysis, showcasing a versatile skill set that spans the entire spectrum of technology. With my experience in crafting engaging user interfaces, building robust server-side architectures, creating mobile applications, and analyzing data for strategic insights, I bring a comprehensive approach to solving diverse challenges.
                </p>
            </div>

            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-smallTextColor font-[700] mb-3 hover:text-white group-hover:font-[600] text-xl'>
                                                Frontend Development
                                            </h3>

                                            <p className='text-[15px] text-smallTextColor hover:text-white group-hover:font[500] leading-7 text-justify'>
                                                I personally have experience working with HTML, CSS and Javascript. I also used ReactJs and Redux library in some of my personal projects. Beside, I have ability to use Bootstrap and Tailwind in web development.
                                            </p>

                                            <div className='flex justify-center gap-5 mt-3'>
                                                <img className='custome-img' src={htmlLogo} alt="" />
                                                <img className='custome-img' src={cssLogo} alt="" />
                                                <img className='custome-img' src={jsLogo} alt="" />
                                            </div>

                                            <div className='flex justify-center gap-3 mt-3'>
                                                <img className='custome-img' src={bootstrapLogo} alt="" />
                                                <img className='custome-img' src={tailwindLogo} alt="" />
                                                <img className='custome-img' src={reactLogo} alt="" />
                                                <img className='custome-img' src={reduxLogo} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={frontendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-duration='1300' data-aos-delay='50' className="bg-white p-4 rounded shadow hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-smallTextColor font-[700] mb-3 hover:text-white group-hover:font-[600] text-xl'>
                                                Backend Development
                                            </h3>

                                            <p className='text-[15px] text-smallTextColor hover:text-white group-hover:font[500] leading-7 text-justify'>
                                                I also work with C# to make a project for a national academic competition. In addition, I also use Java to develop mobile applications when I was in university.
                                            </p>

                                            <div className='flex justify-center gap-5 mt-3'>
                                                <img className='custome-img' src={cShapLogo} alt="" />
                                                <img className='custome-img' src={javaLogo} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={appsImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-smallTextColor font-[700] mb-3 hover:text-white group-hover:font-[600] text-xl'>
                                                Apps Development
                                            </h3>

                                            <p className='text-[15px] text-smallTextColor hover:text-white group-hover:font[500] leading-7 text-justify'>
                                                I worked with Android Studio to develop Mobile Apps using Java.
                                            </p>

                                            <div className='flex justify-center gap-5 mt-3'>
                                                <img className='custome-img' src={androidLogo} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={backendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-duration='1200' data-aos-delay='100' className="bg-white p-4 rounded shadow hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-smallTextColor font-[700] mb-3 hover:text-white group-hover:font-[600] text-xl'>
                                                Data Analyst
                                            </h3>

                                            <p className='text-[15px] text-smallTextColor hover:text-white group-hover:font[500] leading-7 text-justify'>
                                                My skill in handling diverse datasets and employing analytical tools is well-documented. I have extracted meaningful insights to presenting actionable recommendations. 
                                            </p>

                                            <div className='flex justify-center gap-5 mt-3'>
                                                <img className='custome-img' src={sqlLogo} alt="" />
                                                <img className='custome-img' src={pythonLogo} alt="" />
                                                <img className='custome-img' src={biLogo} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={uiImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services