import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import { Routes, Route } from "react-router-dom"
const App = () => {
  return (
		<div>
			<Header />
			<Routes>
				<Route
					path='/'
					Component={Home}
				/>
				<Route
					path='/about'
					Component={About}
				/>
				<Route
					path='/Projects'
					Component={Projects}
				/>
				<Route
					path='/Contact'
					Component={Contact}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
