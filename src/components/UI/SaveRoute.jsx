import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

const SaveRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/test' element={<Test />} />
      <Route path='/posts/:id' element={<PostIdPage />} />
      <Route path='/error' element={<Error />} />
      <Route path="/*" element={<Navigate to="/error" replace />} />
    </Routes>
    
  )
}

export default SaveRoute