import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function Frontend() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
        </Routes>
    )
}