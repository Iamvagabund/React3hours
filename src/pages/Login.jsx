import React from 'react'
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';
import MyInput from './../components/UI/input/MyInput';
import { useContext } from 'react';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const login = event => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div style={{ width: '500px', margin: '0 auto' }}>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder='Введите логин' />
        <MyInput type="password" placeholder='Введите пароль' />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login