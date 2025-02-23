import React from "react"
import "./test.css"
import first_image from '../../assets/first.jpg'
import second_image from '../../assets/second.jpg'
import third_image from '../../assets/third.jpg'

const Test = () => {
    return (
        <div className="cards-container">
            <div className="card">
                <img
                    src={first_image}
                    alt="Analytics background"
                    className="card-image"
                />
                <div className="card-content">
                    <div className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                            <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zm-5-7v6H8v-6h6zm-2-2H8V8h4v2zm3 0V8h2v2h-2zm0 2h2v6h-2v-6z" />
                        </svg>
                    </div>
                    <h3>Why choose us?</h3>
                    <p>
                        We are the <span className="highlight">best placement agency in Delhi</span>. Our proficient industry
                        knowledge, experience, and high ethical standards ensure 100% client satisfaction.
                    </p>
                </div>
            </div>

            <div className="card">
                <img
                    src={second_image}
                    alt="Mission background"
                    className="card-image"
                />
                <div className="card-content">
                    <div className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                        </svg>
                    </div>
                    <h3>Our mission</h3>
                    <p>
                        To provide exceptional placement services through innovative solutions and maintaining the highest standards
                        of professional excellence.
                    </p>
                </div>
            </div>

            <div className="card">
                <img
                    src={third_image}
                    alt="Vision background"
                    className="card-image"
                />
                <div className="card-content">
                    <div className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
                        </svg>
                    </div>
                    <h3>Our vision</h3>
                    <p>
                        To become the leading placement agency by transforming careers and helping businesses grow through perfect
                        talent matches.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Test

