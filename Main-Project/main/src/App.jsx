import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import NoPage from "./Pages/NoPage"
import Cart from "./Pages/Cart"
import ProductDetails from "./Pages/ProductDetails"
import ProductList from "./Pages/ProductsList"
const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path='/'
					Component={Home}
				/>
				<Route
					path='/Products'
					Component={ProductList}
				/>
				<Route
					path='/Product/:id'
					Component={ProductDetails}
				/>
				<Route
					path='/cart'
					Component={Cart}
				/>
				<Route
					path='*'
					Component={NoPage}
				/>
			</Routes>
			<Footer />
		</>
	)
}

export default App
