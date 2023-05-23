import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-3/12 mx-auto text-center my-8">
      <p className="text-yellow-500 mb-2">--- {subHeading} ---</p>
      <h3 className="text-3xl border-y-4 p-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
