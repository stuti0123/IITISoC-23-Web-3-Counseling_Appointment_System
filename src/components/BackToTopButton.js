import React, { useState, useEffect } from 'react';


function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    const scrollTop = window.pageYOffset;
    setIsVisible(scrollTop > 300);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(function () {
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <i className="fas fa-arrow-up"></i>
    </div>
  );
}

export default BackToTopButton;
