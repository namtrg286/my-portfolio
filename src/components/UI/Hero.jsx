import React from 'react'
import heroImg from '../../assets/images/heroImg1.png'
import CountUp from 'react-countup'
import {facebookLink, githubLink, zaloLink} from '../../assets/data/socialDataLink'

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className="container pt-14">
            <div className="md:flex items-center justify-between cd:flex-row">
                <div className="w-full md:basis-1/2">
                    <h5 data-aos="fade-right" data-aos-duration="1500" className='text-headingColor font-[600] text-[16px]'>
                        Hello welcome
                    </h5>

                    <h1 data-aos="fade-up" data-aos-duration="1500" className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>
                        I'm Nam Truong <br />Software Engineer
                    </h1>

                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="1500" 
                        data-aos-delay="200"
                        className="flex items-center gap-6 mt-7"
                    >
                        <a href={zaloLink} target='_blank' rel="noreferrer">
                            <button className='bg-smallTextColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i className='ri-mail-line'></i> Hire me
                            </button>
                        </a>

                        <a href="#porfolio" className='text-smallTextColor font[600] text-[16px] border-b border-solid border-smallTextColor'>
                            See portfolio
                        </a>
                    </div>
                    <p 
                        data-aos="fade-left" 
                        data-aos-duration="1500" 
                        className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pr-10 text-justify'
                    >
                        <span>
                            <i className='ri-apps-2-line'></i>
                        </span>
                        I am a web developer with more than one year of experience as a Front-end Developer. I also have ability to work as a Back-end Web Developer in many projects.
                        With extensive knowledge of UI/UX design, I prefer to analyze, understand complex problems and generate appropriate technical solutions for user experience. 
                        I am always learning from work and spend more time to learn new technology method to become a better engineer. 
                    </p>

                    <div className="flex items-center gap-9 mt-14">
                        <span className='text-smallTextColor text-[15px] font-[600]'>
                            Follow me: 
                        </span>
                        {/* <span>
                            <a href={githubLink} target="_blank" rel="noreferrer" className='text-smallTextColor text-[15px] font-[600]'>
                                <i className='ri-youtube-line'></i>
                            </a>
                        </span> */}

                        <span>
                            <a href={githubLink} target="_blank" rel="noreferrer" className='text-smallTextColor text-[15px] font-[600]'>
                                <i className='ri-github-fill'></i>
                            </a>
                        </span>

                        <span>
                            <a href={facebookLink} target="_blank" rel="noreferrer" className='text-smallTextColor text-[15px] font-[600]'>
                                <i class="ri-linkedin-fill"></i>
                            </a>
                        </span>
                    </div>
                </div>
                
                <div className="basis-1/3 mt-10 sm:mt-0">
                    <figure className='flex items-center justify-center'>
                        <img data-aos="fade-up" data-aos-duration="1500" src={heroImg} alt="" />
                    </figure>
                </div>

                <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={1} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Years of Experience</h4>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={100} duration={2} suffix='%'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Responsibilities</h4>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={1500} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Hours Code</h4>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={10} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Project Completed</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero