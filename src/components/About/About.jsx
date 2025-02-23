import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img className='about-img' src={about_img} />
            </div>
            <div className='about-right'>
                <h3>About Us</h3>
                <p>Human Resource India, also known as HRI, is a one-stop solution for recruitment services. We provide manpower services to companies from various industry sectors and help them hire smart and professional people to take their businesses to the next level. Since 2016, we have been providing our best placement services to various organisations helping them to choose from a wide selection of highly talented candidates. Today, we are recognised as one of the top placement agency in Delhi. Our expert team with an in-depth knowledge of the recruitment industry has been meeting the demands of employers from across the country.

                    With 6 years of recruitment experience, we have emerged as the best placement consultant in Delhi. Our commitment and dedication to providing the most suitable candidates for your company have helped us achieve that, we have been working tirelessly to deliver the best-in-class services to our clients. Apart from being the best job consultancy in Bangalore, we have recently started offering our services in Delhi as well. In a very short span of time, we have become one of the best manpower consultants in Delhi as well.</p>
            </div>
        </div>
    )
}
export default About
