import React, {useRef, useEffect} from 'react'
import {zaloLink} from '../../assets/data/socialDataLink'

const Header = () => {

  const headerRef = useRef()
  const menuRef = useRef()

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo ({
      top: location - 80,
      left: 0
    })
  }

  const toggleMennu = () => menuRef.current.classList.toggle('show__menu')

  // Lets talk function
  const openNewWindow = () => {
    const newWindow = window.open(`${zaloLink}`, '_blank', 'noopener,noreferrer');

    if (newWindow) {
      newWindow.focus();
    }
  };

  return <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
    <div className="container">
        <div className='flex items-center justify-between'>
            <div className="flex items-center gap-[10px]">
                <span className='w-[35px] h-[35px] bg-smallTextColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
                  N
                </span>

                <div className="leading-[20px]">
                  <h2 className='text-xl text-smallTextColor font-[700]'>NamTruong</h2>
                  <p className='text-smallTextColor text-[14px] font-[500]'>Personal</p>
                </div>
            </div>

            <div className="menu" ref={menuRef} onClick={toggleMennu}>
              <ul className='flex items-center gap-10'>
                <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#about">About</a></li>
                <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#services">Services</a></li>
                <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#porfolio">Portfolio</a></li>
                <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={openNewWindow} className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-500'>
                <i className='ri-send-plane-line'></i> Let's Talk
              </button>

              <span onClick={toggleMennu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
                <i className='ri-menu-line'></i>
              </span>
            </div>
        </div>
    </div>
  </header>
}

export default Header