import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import './Navbar.css';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <nav className='navbar'>
      <MyButton onClick={logout}>Выйти</MyButton>
      <ul className='navbar__links'>
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/poststwo">Posts test</NavLink>
        </li>
        <li>
          <NavLink to="/test">Test</NavLink>
        </li>
      </ul>
    </nav >
  )
}

export default Navbar