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
      <div className="our_brands">
        <h1>Our Brands</h1>
        <div className="our_brand_container">
          <div className="image_text">
            <div className="image_container">
              <img src="/assets/m1.png" alt="one" />
            </div>
            <div className="text_container">
              <div>
                <span>MYCO-DIFF</span>
                <hr />
              </div>
              <div className="product">
                <IoIosArrowDropright />
                <h4>Product type:</h4>
                <span>Biofertilizer and Nematicide</span>
              </div>
              <div className="description">
                <IoIosArrowDropright />
                <h4>Description:</h4>
                <span>Biofertilizer and Nematicide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="our_brand_container">
          <div className="image_text">
            <div className="text_container">
              <div>
                <span>MYCO-DIFF</span>
                <hr />
              </div>
              <div className="product">
                <IoIosArrowDropright />
                <h4>Product type:</h4>
                <span>Biofertilizer and Nematicide</span>
              </div>
              <div className="description">
                <IoIosArrowDropright />
                <h4>Description:</h4>
                <span>Biofertilizer and Nematicide</span>
              </div>
            </div>
            <div className="image_container">
              <img src="/assets/m2.png" alt="one" />
            </div>
          </div>
        </div>
        <hr cla/>

        <div className="our_brand_container">
          <div className="image_text">
            <div className="image_container">
              <img src="/assets/m3.png" alt="one" />
            </div>
            <div className="text_container">
              <div>
                <span>MYCO-DIFF</span>
                <hr />
              </div>
              <div className="product">
                <IoIosArrowDropright />
                <h4>Product type:</h4>
                <span>Biofertilizer and Nematicide</span>
              </div>
              <div className="description">
                <IoIosArrowDropright />
                <h4>Description:</h4>
                <span>Biofertilizer and Nematicide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="our_brand_container">
          <div className="image_text">
            <div className="text_container">
              <div>
                <span>MYCO-DIFF</span>
                <hr />
              </div>
              <div className="product">
                <IoIosArrowDropright />
                <h4>Product type:</h4>
                <span>Biofertilizer and Nematicide</span>
              </div>
              <div className="description">
                <IoIosArrowDropright />
                <h4>Description:</h4>
                <span>Biofertilizer and Nematicide</span>
              </div>
            </div>
            <div className="image_container">
              <img src="/assets/m4.png" alt="one" />
            </div>
          </div>
        </div>
        <div className="image_text">
          <div className="image_container">
            <img src="/assets/m5.png" alt="one" />
          </div>
          <div className="text_container">
            <div>
              <span>MYCO-DIFF</span>
              <hr />
            </div>
            <div className="product">
              <IoIosArrowDropright />
              <h4>Product type:</h4>
              <span>Biofertilizer and Nematicide</span>
            </div>
            <div className="description">
              <IoIosArrowDropright />
              <h4>Description:</h4>
              <span>Biofertilizer and Nematicide</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
