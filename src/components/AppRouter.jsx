import React from 'react'
import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { publicRoutes, privatRoutes } from './../router/index';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return (

    isAuth
      ?
      <Routes>
        {privatRoutes.map(route =>
          <Route
            key={route.path}
            element={< route.element />}
            path={route.path}
          />
        )}
        < Route path="/*" element={< Navigate to="/" replace />} />
      </Routes>
      :
      <Routes>
        {
          publicRoutes.map(route =>
            <Route
              key={route.path}
              element={< route.element />}
              path={route.path}
            />
          )
        }
        < Route path="/*" element={< Navigate to="/login" replace />} />
      </Routes >
  )
}

export default AppRouter