import React, { useEffect, useState } from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('/reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log({ reviews });
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={'What Our Clients Say'}
        heading={'TESTIMONIALS'}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="my-16 mx-24 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FontAwesomeIcon className="text-6xl" icon={faQuoteLeft} />

              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400 ">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
