import "./section2.css";

const Section2 = () => {
  return (
    <div className="container2">
      <div className="left">

      <div class="vl"></div>
        <div className="review-cards">

          <div className="review-card">
            <div className="upper-section">
              This is a great course. It helped me a lot. Thank you :)
            </div>
            <div className="lower-section">
              <div className="right">
                <h3>jane cooper</h3>
                <p>developer, sony</p>
              </div>
              <div className="left">
                <img src="./profile2.png" alt="profile photo" />
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="upper-section">
              This is a great course. It helped me a lot. Thank you :)
            </div>
            <div className="lower-section">
              <div className="right">
                <h3>jane cooper</h3>
                <p>developer, sony</p>
              </div>
              <div className="left">
                <img src="./profile1.png" alt="profile photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>What our students <br />say</h1>
        <p>
          All students get access to all the videos and also the source code of
          the projects.
          <br />
          You will also have access to a private Discord channel where you can
          discuss your doubts.
        </p>
        <button>
          <a href="#">learn more</a>
        </button>
      </div>
    </div>
  );
};


export default Section2;
