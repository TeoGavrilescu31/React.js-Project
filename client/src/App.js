import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom';
import background from "./background.jpg";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Link to="./AddReview">
          <div className="left">
            <p className="text1">Leave a review!</p>
          </div>
        </Link>
        <Link to="./DeleteReview">
          <div className="middle">
            <p className="text1">Delete a review!</p>
          </div>
        </Link>
        <Link to="./ReadReview">
          <div className="right">
            <p className="text2">Read a review!</p>
          </div>
        </Link>
</div>
{/* 
        <div className="svgBox">
          <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <rect x="0" y="0" width="900" height="600" fill="#001220">
            </rect>
            <defs>
              <linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
                <stop offset="20%" stop-color="#fbae3c" stop-opacity="1">
                </stop>
                <stop offset="80%" stop-color="#fbae3c" stop-opacity="1">
                </stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad1_1" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#fbae3c" stop-opacity="1">
              </stop>
                <stop offset="80%" stop-color="#e1685e" stop-opacity="1">
                </stop>
              </linearGradient>
            </defs><defs>
              <linearGradient id="grad1_2" x1="33.3%" y1="0%" x2="100%" y2="100%">
                <stop offset="20%" stop-color="#96446e" stop-opacity="1"></stop>
                <stop offset="80%" stop-color="#e1685e" stop-opacity="1"></stop>
              </linearGradient></defs><defs><linearGradient id="grad1_3" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#96446e" stop-opacity="1"></stop>
                <stop offset="80%" stop-color="#3d3056" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_4" x1="33.3%" y1="0%" x2="100%" y2="100%">
                  <stop offset="20%" stop-color="#001220" stop-opacity="1"></stop><stop offset="80%" stop-color="#3d3056" stop-opacity="1"></stop></linearGradient>
            </defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#fbae3c" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#fbae3c" stop-opacity="1"></stop>
            </linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="0%" x2="66.7%" y2="100%">
              <stop offset="20%" stop-color="#e1685e" stop-opacity="1"></stop><stop offset="80%" stop-color="#fbae3c" stop-opacity="1">
              </stop></linearGradient></defs><defs><linearGradient id="grad2_2" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#e1685e" stop-opacity="1">
              </stop><stop offset="80%" stop-color="#96446e" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_3" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#3d3056" stop-opacity="1"></stop><stop offset="80%" stop-color="#96446e" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_4" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#3d3056" stop-opacity="1"></stop><stop offset="80%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(900, 0)"><path d="M0 405.6C-51.2 392.2 -102.4 378.8 -148.1 357.5C-193.8 336.3 -233.9 307.3 -273.7 273.7C-313.4 240 -352.8 201.6 -374.7 155.2C-396.7 108.8 -401.2 54.4 -405.6 0L0 0Z" fill="#18223c"></path><path d="M0 324.5C-41 313.8 -81.9 303 -118.5 286C-155 269.1 -187.1 245.9 -218.9 218.9C-250.7 192 -282.3 161.3 -299.8 124.2C-317.3 87.1 -320.9 43.5 -324.5 0L0 0Z" fill="#683a67"></path><path d="M0 243.4C-30.7 235.3 -61.5 227.3 -88.9 214.5C-116.3 201.8 -140.3 184.4 -164.2 164.2C-188 144 -211.7 121 -224.8 93.1C-238 65.3 -240.7 32.7 -243.4 0L0 0Z" fill="#c0526a"></path><path d="M0 162.2C-20.5 156.9 -41 151.5 -59.2 143C-77.5 134.5 -93.6 122.9 -109.5 109.5C-125.4 96 -141.1 80.6 -149.9 62.1C-158.7 43.5 -160.5 21.8 -162.2 0L0 0Z" fill="#f6884d"></path><path d="M0 81.1C-10.2 78.4 -20.5 75.8 -29.6 71.5C-38.8 67.3 -46.8 61.5 -54.7 54.7C-62.7 48 -70.6 40.3 -74.9 31C-79.3 21.8 -80.2 10.9 -81.1 0L0 0Z" fill="#fbae3c"></path></g><g transform="translate(0, 600)"><path d="M0 -405.6C53.8 -399.7 107.6 -393.8 154.6 -373.2C201.6 -352.7 241.9 -317.6 280 -280C318.1 -242.4 354.2 -202.3 374.7 -155.2C395.3 -108.1 400.5 -54.1 405.6 0L0 0Z" fill="#18223c"></path><path d="M0 -324.5C43 -319.8 86.1 -315 123.7 -298.6C161.3 -282.2 193.5 -254.1 224 -224C254.5 -193.9 283.3 -161.8 299.8 -124.2C316.3 -86.5 320.4 -43.3 324.5 0L0 0Z" fill="#683a67"></path><path d="M0 -243.4C32.3 -239.8 64.5 -236.3 92.8 -223.9C121 -211.6 145.1 -190.6 168 -168C190.9 -145.4 212.5 -121.4 224.8 -93.1C237.2 -64.9 240.3 -32.4 243.4 0L0 0Z" fill="#c0526a"></path><path d="M0 -162.2C21.5 -159.9 43 -157.5 61.8 -149.3C80.7 -141.1 96.8 -127 112 -112C127.3 -97 141.7 -80.9 149.9 -62.1C158.1 -43.3 160.2 -21.6 162.2 0L0 0Z" fill="#f6884d"></path><path d="M0 -81.1C10.8 -79.9 21.5 -78.8 30.9 -74.6C40.3 -70.5 48.4 -63.5 56 -56C63.6 -48.5 70.8 -40.5 74.9 -31C79.1 -21.6 80.1 -10.8 81.1 0L0 0Z" fill="#fbae3c">
              </path></g>
          </svg>
        </div> */}
      </div>
  );
}

export default App;
