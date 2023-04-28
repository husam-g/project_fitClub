import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className='header'>

      <img src={logo} alt="logo" className='logo' />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px'
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={bars} style={{ width: '1.5rem', height: '1.5rem' }} alt="" />
        </div>
      ) : (
        <ul className='header-menu'>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#programs">Programs</a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#reasons">Why us</a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#plans">Plans</a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#testemonials">Testemonials</a>
          </li>
        </ul>
      )}


    </div>
  )
}

export default Header