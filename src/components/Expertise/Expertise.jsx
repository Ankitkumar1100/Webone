import React from "react"
import "./expertise.css"

const Expertise = () => {
    return (
        <section className="expertise-section">
            <h1>Our Expertise</h1>
            <p className="subtitle">Recruit the best candidate, in the shortest possible time.</p>
            <div className="yellow-line"></div>

            <div className="expertise-cards">
                <div className="expertise-card">
                    <div className="card-accent"></div>
                    <div className="hexagon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                        </svg>
                    </div>
                    <h3>IT, Digital & Technology</h3>
                    <p>A highly specialized and skilled team is run to focus on the IT and related recruitment routinely.</p>
                    <a href="#" className="read-more">
                        read more <span>›</span>
                    </a>
                </div>

                <div className="expertise-card">
                    <div className="card-accent"></div>
                    <div className="hexagon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        </svg>
                    </div>
                    <h3>Non-IT</h3>
                    <p>
                        Recruitment under this category are also fulfilled such as in sales and marketing, consumer services and
                        many more.
                    </p>
                    <a href="#" className="read-more">
                        read more <span>›</span>
                    </a>
                </div>

                <div className="expertise-card">
                    <div className="card-accent"></div>
                    <div className="hexagon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                    </div>
                    <h3>Functional</h3>
                    <p>
                        Organisation goals are likely to depend on the functional skills and differentiating capabilities of
                        candidates that we provide adds to its success.
                    </p>
                    <a href="#" className="read-more">
                        read more <span>›</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Expertise

