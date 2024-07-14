
import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p>Welcome to our e-commerce website. We are dedicated to providing a seamless shopping experience with a wide variety of high-quality products. Our policies ensure transparency, customer satisfaction, and security. We protect your privacy, offer easy returns, and guarantee reliable shipping. Our customer service team is always ready to assist you. Shop with confidence and enjoy a hassle-free shopping journey with us. We continuously update our inventory to bring you the latest and greatest products. Your satisfaction is our top priority, and we are committed to exceeding your expectations. Thank you for choosing us for your shopping needs.</p>

                </div>
            </div>
        </Layout>
    );
};

export default Policy;
