import React from "react";
import "./Consult.css";
import consultImage from "../../assets/consult.jpg"; // Replace with actual image path

const Consult = () => {
    return (
        <section className="consult-section">
            <div className="consult-container">
                <div className="consult-image">
                    <img src={consultImage} alt="Job Consultancy" />
                </div>
                <div className="consult-content">
                    <h2 className="consult-title">
                        Job Consultancy <span className="title-underline"></span>
                    </h2>
                    <p>
                        Being the best job consultancy in India, our sole aim is to provide
                        you with ample job opportunities that you deserve. At HRI, you can
                        explore job opportunities in various sectors. You can also search
                        for jobs with filters like job role, job title, skills, location
                        preference, recent job postings, etc. Moreover, our team of the best
                        placement consultants in Delhi is available to enlighten you about
                        current job opportunities and provide you with high-quality
                        placement assistance. So, start looking for jobs according to your
                        interest and skill set.
                    </p>
                    <button className="consult-btn">Search For Job →</button>
                </div>
            </div>
        </section>
    );
};

export default Consult;
