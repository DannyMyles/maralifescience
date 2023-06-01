import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { BsArrowRightCircle } from "react-icons/bs"
import { homedata } from "./homeData";
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
            <p>
              Whether you are a famer or a stockist, we provide effective <br />
              fungicides, bio-fungicides, and bio-fitilizers for optimal crop
              <br />
              health. Explore our range of products to learn more.
            </p>
          </div>
          <div className="button_cont">
            <button>Explore brands <BsArrowRightCircle size={20} /></button>
          </div>
          <div className="images">
            {
              homedata && homedata.map((img)=>(
                <div key={img.id}> 
                <div>
                  <img src={img.image} alt="homeImage" />
                </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="our_brands">
        
      </div>
    </>
  );
};

export default Home;
