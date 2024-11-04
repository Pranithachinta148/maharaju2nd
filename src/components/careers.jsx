import React, { useState } from 'react';

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {/* Background Section with Search Bar, Heading, and Subheading */}
      <div 
        style={{
          backgroundImage: 'url("https://s7d9.scene7.com/is/image/roberthalfintl/the-value-of-teamwork-in-the-workplace-blog-RH-05-23-24.jpg:Large-1x?fmt=webp-alpha")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          position: 'relative',
          color: 'white'
        }}
      >
        {/* Dark Overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1
          }}
        ></div>

        {/* Right-Aligned Search Bar */}
        <div 
          
        >
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
                position: 'absolute', 
            top: '200px', 
            right: '10px', 
            width: '200px', 
            height:25,
            zIndex: 2, 
            paddingRight:30 ,
            fontSize: '16px',
              borderRadius: '5px',
              backgroundColor: '#e6e8eb',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              color: 'white',
              outline: 'none',
              caretColor: 'white',
              position: 'absolute', 
              
            }}
          />
        </div>

        {/* Left-Aligned Heading and Subheading */}
        <div 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '80px', 
            transform: 'translateY(-50%)', 
            zIndex: 2, 
            textAlign: 'left', 
            maxWidth: '600px'
          }}
        >
          <h1 style={{ fontSize: '48px', fontWeight: 700 }}>Careers</h1>
          <p style={{ fontSize: '25px', fontWeight: 400, marginTop: '-20px' }}> Interested in joining the team </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div 
        className="container my-5"
        style={{
          padding: '40px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}
      >
        <h2>Who We Are</h2>
        <p>
          At Sutherland, we are passionate about bringing together human expertise and advanced technologies to help 
          enterprises drive digital transformation, optimize critical business operations, reinvent experiences, and pioneer 
          new solutions. For more than three decades, we have partnered with iconic brands worldwide, unlocking new 
          possibilities, transformative outcomes, and enduring relationships through market-leading technology and business 
          process excellence. Discover exciting career opportunities with us and be part of a vibrant global community that 
          is transforming the digital landscape globally.
        </p>
      </div>

      {/* Life at MHC Section with Three Horizontal Boxes */}
      <div 
        className="container my-5"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px',
          backgroundColor: '#e6e8eb', // Background color for the third container
          borderRadius: '8px'
        }}
      >
        {/* Left-Aligned Heading Inside the Container */}
        <h2 style={{ textAlign: 'left', marginBottom: '20px', fontSize: '32px', fontWeight: 'bold' }}>
          Life At MHC
        </h2>

        {/* Three Horizontal Boxes */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <div 
            style={{
              flex: '1',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Full-Width Rectangular Image */}
            <img 
              src="https://wallpapercave.com/wp/wp10181832.jpg" // Replace with actual image URL
              alt="Our Mission"
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: '15px'
              }}
            />
            <h3>Solve Interesting Business Problems</h3>
            <p>
            If you want to solve real-world problems with innovative solutions for some of the world’s biggest brands, this is your chance to learn, grow, and make an impact.</p>
          </div>
          <div 
            style={{
              flex: '1',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Full-Width Rectangular Image */}
            <img 
              src="https://planergy.com/wp-content/uploads/2020/09/504-Featured-What-Is-The-Impact-Of-AI-On-Your-Business.jpg" // Replace with actual image URL
              alt="Our Vision"
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: '15px'
              }}
            />
            <h3>Grow Your Own Way</h3>
            <p>
            Discover your passion and create your own career path. From leading teams to exploring new industries, we’ll ensure you have the tools, guidance and support you need to thrive.</p>
          </div>
          <div 
            style={{
              flex: '1',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Full-Width Rectangular Image */}
            <img 
              src="https://st5.depositphotos.com/4678277/63268/i/450/depositphotos_632687112-stock-photo-photo-web-designer-software-expert.jpg" // Replace with actual image URL
              alt="Join Us"
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: '15px'
              }}
            />
            <h3>Be Yourself</h3>
            <p>
            Your unique qualities and interests make us stronger. We celebrate diversity and encourage everyone to bring their authentic selves to work every day.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
