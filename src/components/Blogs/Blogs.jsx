import "./Blogs.css";
import blog_img from "../../assets/blog.jpg"; // Default placeholder image

const Blogs = () => {
    const blogPosts = [
        {
            title: "Best Strategies to Improve Hospitality Recruitment Process",
            image: blog_img, // Replace this later with the actual image
        },
        {
            title: "What are the Best Ways to Look for Jobs in India?",
            image: blog_img, // Replace this later with the actual image
        },
        {
            title: "What Is Human Resources? The Ultimate Guide Updated 2023",
            image: blog_img, // Replace this later with the actual image
        },
        {
            title: "The Role of Recruitment Agencies in the BFSI Industry",
            image: blog_img, // Replace this later with the actual image
        },
    ];

    return (
        <section className="blogs">
            <h2 className="blogs-title">Our Blogs</h2>
            <p className="blogs-description">
                Do you wish to know more about the recruitment process or require any career tips and tricks?
                Who can know better than a best placement agency in Delhi itself? So let our blogs help you with that. Happy reading!
            </p>
            <div className="blogs-container">
                {blogPosts.map((blog, index) => (
                    <div className="blog-card" key={index}>
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <h3 className="blog-title">{blog.title}</h3>
                        <a href="#" className="blog-read-more">Read more →</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
