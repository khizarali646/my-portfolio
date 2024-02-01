import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientsReview from "@/components/testimonial/ ClientsReview";

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const TestimonialSlider = () => {
    return (
        <div>
            <Carousel
                additionalTransfrom={0}
                arrows={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                centerMode={false}
                infinite
                responsive={responsive}
                itemClass="item"
            >
                <ClientsReview image="/images/c4.webp" name="Giftakari" role="Australia" description="I highly recommend him for any React-related projects and look forward to the opportunity to collaborate again in the future. Thank you for a job well done!"/>
                <ClientsReview image="/images/c5.webp" name="uk pro" role="United Kingdom" description="Khizar Ali did great, highly recommend him"/>
                <ClientsReview image="/images/c1.jpg" name="Cloudnica" role="USA" description="Khizarali did a great job converting my Figma design to an Reactjs Design. The process was very quick and easy. Khizarali646 responded to all my questions promptly and delivered the work ahead of schedule. The design he created in Reactjs looked very close to my original Figma design. I'm very happy with the service and the outcome. I highly recommend him Thanks again! "/>

            </Carousel>;
        </div>
    );
};

export default TestimonialSlider;