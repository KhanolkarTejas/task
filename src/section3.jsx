import './section3.css'

function Section3(){
    return (
    <div className="content3">
        <h2 className="heading">Our Courses</h2>
        <div className="course-cards">
          <div className="course-card">
            <div className="upper-section">
              <img  src="./gamedesign1.png" alt="" />
            </div>
            <div className="lower-section">
              <div className="left">Game Design Essentials
              </div>
              <div className="right"><img src="Vector.png" alt="" /><h3 className='hrs'>8 HRS</h3></div>
            </div>
          </div>
          <div className="course-card">
            <div className="upper-section">
              <img src="./gamedesign2.png" alt="" />
            </div>
            <div className="lower-section">
              <div className="left">Unity Game Engine <br />Fundamentals</div>
              <div className="right"><img src="Vector.png" alt="" /><h3 className='hrs'>8 HRS</h3></div>
            </div>
          </div> 
        </div>
        <div className='button'>
        <button className='all-courses'>
          <a href="#">all courses</a>
        </button>
        </div>

      </div>)
}

export default Section3
