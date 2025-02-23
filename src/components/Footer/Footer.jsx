import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-company">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <p>
                        Human Resource India, also known as HRI, is a one-stop solution for
                        recruitment services. We assist companies to recruit smart and
                        professional people to take their businesses to the next level.
                    </p>
                </div>
                <div className="footer-links">
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Our Expertise</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <ul>
                            <li>Executive Search</li>
                            <li>Senior & Middle Level Hiring</li>
                            <li>Resume Writing</li>
                            <li>Staffing Solution</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Job Seeker</h3>
                        <ul>
                            <li>Search Our Jobs</li>
                            <li>Submit Resume</li>
                            <li>Testimonials</li>
                            <li>Fraud Alert</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Employer</h3>
                        <ul>
                            <li>Hire With Us</li>
                            <li>Our Clients</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-industries">
                <h3>Industries</h3>
                <p>
                    Aerospace & Defense | Automobile & Auto Components | Consumer
                    Durables & Building Materials | Development | Education | Electrical &
                    Electronics | Financial Services | FMCG | Healthcare
                </p>
            </div>
            <div className="footer-bottom">
                <p>
                    Copyright &copy; 2016-{new Date().getFullYear()} Human Resource India.
                    All Rights Reserved. <a href="#">Privacy Policy</a> |
                    <a href="#">Terms & Conditions</a> | <a href="#">Disclaimer</a> |
                    <a href="#">Sitemap</a>
                </p>
                <div className="social-icons">
                    <span>🔵</span>
                    <span>🐦</span>
                    <span>📸</span>
                    <span>🔗</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
