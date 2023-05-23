import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured_item bg-fixed text-white ">
      <div className="pt-12 my-20">
        <SectionTitle
          heading={'Featured Item'}
          subHeading={'----check it out----'}
        ></SectionTitle>
      </div>

      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug,20,2023</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            lorem203 ios fijf dior tyrt jkdqd ptj ijw gejg ygyad o9jger t hfu
            oprh iogne
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-5">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
