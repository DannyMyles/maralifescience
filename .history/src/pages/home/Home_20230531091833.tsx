import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import { homedata } from "./homeData";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home_container">
        <div className="home_content">
          <div>
            <h1>
              Revolutionizing <br /> agriculture.
            </h1>
          </div>
          <div>
            <h4>
              Whether you are a famer or a stockist, we provide effective <br />
              fungicides, bio-fungicides, and bio-fitilizers for optimal crop
              <br />
              health. Explore our range of products to learn more.
            </h4>
          </div>
          <div className="button_cont">
            <button>
              Explore brands <BsArrowRightCircle size={20} />
            </button>
          </div>
          <div className="images">
            {homedata &&
              homedata.map((img) => (
                <div key={img.id}>
                  <div>
                    <img src={img.image} alt="homeImage" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* The App Section */}
      <div className="container">
        <div className="row">
          <div className="column-66">
            <h1 className="xlarge-font">
              <b>The App</b>
            </h1>
            <h1 className="large-font" style={{ color: 'MediumSeaGreen' }}>
              <b>Why buy it?</b>
            </h1>
            <p>
              <span style={{ fontSize: 36 }}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="button">Download Application</button>
          </div>
          <div className="column-33">
            <img src="/assests/m1.png" width="335" height="471" alt="App" />
          </div>
        </div>
      </div>

      {/* Clarity Section */}
      <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
        <div className="row">
          <div className="column-33">
            <img src="/assests/m1.png" alt="App" width="335" height="471" />
          </div>
          <div className="column-66">
            <h1 className="xlarge-font">
              <b>Clarity</b>
            </h1>
            <h1 className="large-font" style={{ color: 'red' }}>
              <b>Pixels, who?</b>
            </h1>
            <p>
              <span style={{ fontSize: 24 }}>A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className="button" style={{ backgroundColor: 'red' }}>Read More</button>
          </div>
        </div>
      </div>

      {/* The App Section */}
      <div className="container">
        <div className="row">
          <div className="column-66">
            <h1 className="xlarge-font">
              <b>The App</b>
            </h1>
            <h1 className="large-font" style={{ color: 'MediumSeaGreen' }}>
              <b>Why buy it?</b>
            </h1>
            <p>
              <span style={{ fontSize: 36 }}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className="button">Download Application</button>
          </div>
          <div className="column-33">
            <img src="/w3images/img_app.jpg" width="335" height="471" alt="App" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
