import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-section">
      <h2>Our Courses</h2>
      <div className="courses-cards">
        <div className="course-card">
          <img src="./poster.jpg" alt="Game Design Essentials" />
          <div className="course-info">
            <h3>Game Design Essentials</h3>
            <p>8 HRS</p>
          </div>
        </div>
        <div className="course-card">
          <img src="./poster.jpg" alt="Unity Game Engine Fundamentals" />
          <div className="course-info">
            <h3>Unity Game Engine Fundamentals</h3>
            <p>8 HRS</p>
          </div>
        </div>
      </div>
      <button className="all-courses-button">All Courses</button>
    </div>
  );
};

export default Courses;
