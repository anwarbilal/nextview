import React from 'react';
import omar from '../../assets/images/omar.png';
import supportImage from '../../assets/images/customercare.png';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Background Support Image */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-20">
        <img
          src={supportImage}
          alt="24/7 Support"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Support Available 24/7 */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Support Available 24/7
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Team;
