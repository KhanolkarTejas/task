import "./section4.css";

function Section4() {
  return (
    <div className="container">
      <div className="app-section">
        <div className="app-info">
          <h1>Get our App</h1>
          <p>You can use our App for better experience on smartphones</p>
        </div>
        <div className="stores">
          <div className="store apple">
            <img src="applestore.svg" alt="" />
            <h3>app store</h3>
          </div>
          <div className="store google">
            <img src="playstore.svg" alt="" />
            <h3>google play</h3>
          </div>
        </div>
      </div>
      <div className="footer">
        {/* <table>
          <thead>
            <tr>
              <th>quick links </th>
              <th>course</th>
              <th>contact us</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td  className="cell">About us</td>
              <td  className="cell">Log In</td>
              <td  className="cell">contact@email.com</td>
            </tr>
            <tr>
              <td  className="cell">Contact Us</td>
              <td  className="cell">Download</td>
              <td  className="cell">
                <img src="Vector (1).svg" alt="" />
                <img src="Vector (2).svg" alt="" />
              </td>
              
            </tr>
            <tr>
              <td  className="cell">Privacy Police</td>
              <td  className="cell">All Courses</td>
              <td  className="cell"><input type="text" placeholder="Email Address" id="" /></td>
            </tr>
            <tr>
              <td  className="cell">Terms & Conditions</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table> */}
        <div>
        <ul>
            <li>
            <h3>Quick Links </h3>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
            </ul>
            </li>
            <li>
            This website is developed by GTCoding © 2021
            </li>
        </ul>
        <ul>
        <li>
            <h3>Course</h3> 
            <ul>
                <li>Log In </li>
                <li>Download</li>
                <li> All Courses</li>
            </ul>
            </li>

        </ul>
        <ul>
        <li>
            <h3>Contact Us </h3>
            <ul>
                <li>contact@email.com</li>
                <li><img src="Vector (1).svg" alt="" />
                <img src="Vector (2).svg" alt="" /></li>
                <li> <div>
                        <input type="text" className="textbox"placeholder="Email Address" />
                        <input type="submit" className="subscribe" value="Subscribe" />
                    </div>
                </li>
            </ul>
            </li>
        </ul>
        </div>

      </div>
    </div>
  );
}

export default Section4;
