import "./section1.css";

function Section1() {
  return (
    <>
      <header>
        <div class="container">
          <nav>
            <div className="logo">
              <img src="./Logo.png" alt="logo GD" />
            </div>
            <ul>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">service</a>
              </li>
              <li>
                <a href="#">our work</a>
              </li>
              <li>
                <button>
                  <a href="#">Enrol Now</a>
                </button>
              </li>
            </ul>
          </nav>
          <div className="main-section">
            <div className="left">
              <h1>
                Learn the art of <br /> Game Dev
              </h1>
              <p>
                This is a comprehensive course on Game Development.
                <br />
                You will learn everything from generating an idea to <br />publishing
                your games to different platforms.
              </p>
              <button>
                <a href="#">
                  <img src="./PencilAlt.svg" alt="" />
                  Enrol Now
                </a>
              </button>
            </div>
            <div className="right">
              <img src="./hero-image.png" alt="" />
              <div className="cards ">
                <div className="card card1">
                  <div className="content">
                    <h2>32K</h2>
                    Students Enrolled
                  </div>
                </div>
                <div className="card card2">
                  <div className="content">
                    <div>
                    <h2>4.7</h2>
                    <img src="./emojione_star.svg"  alt="" />
                    </div>
                    Overall Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Section1;
