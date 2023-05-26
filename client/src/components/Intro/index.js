    import React from 'react';

const Intro = () => {
    const introStyles = {
        backgroundImage: 'url("/flavr-backgrnd.jpg")',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        opacity: 0.8,

      };
      
      const contentStyles = {
        flex: '1',
      };
    
      const headingStyles = {
        color: 'white',
      };

  const linkStyles = {
    color: '#FF8C42',
    textDecoration: 'underline',
  };

  return (
    <div className="col-12 col-md-10 mb-3 p-3" style={introStyles}>
      <div>
        <h3 style={headingStyles}>Welcome to Flavr!</h3>
        <p>
          Unleash Your Taste Adventure! Discover explosive flavors and reliable taste ratings for every eatery near you using our unique flavor rating system. Join the vibrant community of food connoisseurs today! You need to be logged in to see and create reviews. Please <a href="/login" style={linkStyles}>login</a> or <a href="/signup" style={linkStyles}>signup.</a>
        </p>
      </div>
    </div>
  );
};

export default Intro;
