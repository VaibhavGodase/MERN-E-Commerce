import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        Welcome to our e-commerce website, your one-stop destination for all your shopping needs. We offer a diverse range of products, from the latest fashion trends and cutting-edge electronics to home essentials and unique gifts. Our mission is to provide an exceptional shopping experience by offering high-quality products at competitive prices. With a user-friendly interface, secure payment options, and reliable customer service, we strive to make online shopping convenient and enjoyable. Explore our wide selection, find your favorites, and enjoy fast and reliable delivery right to your doorstep. Happy shopping!
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;