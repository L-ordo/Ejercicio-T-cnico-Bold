

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PhotoList from '../PhotoList'
import { PhotoDetail } from '../PhotoDetail'

export const FotosRoutes = () => {
  return (
    
    <div>
        <Routes>
          <Route path="/" element={<PhotoList />} />
          <Route path="/detalle/:id" element={<PhotoDetail/>} />
        
       </Routes>
    </div>
  )
}
