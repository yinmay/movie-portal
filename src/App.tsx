import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Breadcrumbs from './components/Breadcrumbs'
import Dashboard from './Pages/Dashboard'
import Movie from './Pages/Movie'

import './App.css'

const { Content } = Layout

function App() {
  return (
    <div className="App">
      <Content>
        <div className="site-layout-content">
          <Router>
            <div className="breadcrumbs-wrapper">
              <Breadcrumbs />
            </div>

            <div className="site-layout-content">
              <Routes>
                <Route path="/:id" element={<Movie />}></Route>
                <Route path="/" element={<Dashboard />}></Route>
              </Routes>
            </div>
          </Router>
        </div>
      </Content>
    </div>
  )
}

export default App
