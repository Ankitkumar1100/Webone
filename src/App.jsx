import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from "./components/About/About.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Test from "./components/Test/Test.jsx";
import Expertise from "./components/Expertise/Expertise.jsx";
import Title from "./components/Title/Title.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Blogs from "./components/Blogs/Blogs.jsx";
import Consults from "./components/Consult/Consult.jsx"


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Banner />
            <About />
            <Test />
            <Expertise />
            <Consults />
            <Title subTitle='Best Recruitment Agency in Delhi' title='Hear What Our Clients Have To Say' />
            <Testimonials />
            <Blogs />
            <Footer />


        </div>
    )
}
export default App
