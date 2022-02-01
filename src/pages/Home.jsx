import React from 'react'
import Navbar from '../components/NavBar'
import Announce from '../components/announce'
import Slider from '../components/Slider'
import Categories from "../components/Categories";
import Footer from '../components/footer'
import Products from '../components/Products';


const Home = () => {
    return (
        <div>
    <Announce/>
    <Navbar/>
    <Slider/>
    <Categories />
    <Products/>
    <Footer/> 
        </div>
    )
}

export default Home;
