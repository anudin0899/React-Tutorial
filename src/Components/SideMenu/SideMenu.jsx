import React, { useEffect, useState } from 'react'
import './SideMenu.css'
import logo from '../../Assets/logo.png'
import user from '../../Assets/users/avatar3.png'
import MenuItem from './MenuItem'

const menuItem = [
  {
    name: 'Dashboard',
    to: '/',
    icon: 'bi bi-speedometer2',
    exact: true,
  },
  {
    name: 'Content',
    to: '/content',
    icon: 'bi bi-database-dash',
    subMenu: [{ name: 'Course', to: '/content/course' },
    { name: 'Photos', to: '/content/course' },
    { name: 'Videos', to: '/content/videos' }
    ],
    exact: true,
  },
  {
    name: 'Design',
    to: '/design',
    icon: 'bi bi-pencil'
  },
  {
    name: 'Users',
    to: '/user',
    icon: 'bi bi-person'
  },
  
]

const SideMenu = ({ onCollapse }) => {

  const [inactive, setinactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll('.sub-menu').forEach(el => {
        el.classList.remove('active');
      })
    }
    onCollapse(inactive);
  }, [inactive, onCollapse])

  return (
    <div className={`${inactive ? "inactive" : "side-menu"}`}>

      <div className='top-section'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='back-arrow' onClick={() => setinactive(!inactive)}>
          {inactive ? <i className="bi bi-arrow-right-circle-fill icon"></i>
            : <i className="bi bi-arrow-left-circle-fill icon"></i>}
        </div>
      </div>

      <div className='search-controller'>
        <button className='search-btn'>
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder='search' />
      </div>

      <div className='divider'></div>

      <div className="main-menu">

        <ul>
          {menuItem.map((menuItems, index) => (
            <MenuItem
              key={index}
              name={menuItems.name}
              exact={menuItems.exact}
              to={menuItems.to}
              icon={menuItems.icon}
              subMenu={menuItems.subMenu}
              onClick={() => {
                if (inactive) {
                  setinactive(false);
                }
              }}
            />
          ))}
        </ul>

      </div>

      <div className="side-menu-footer">
        <div className='avatar'>
          <img src={user} alt="user" />
        </div>
        <div className='user-info'>
          <h5>Anudin KK</h5>
          <p>anudinkk@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default SideMenu