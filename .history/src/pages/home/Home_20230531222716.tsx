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

      <div className="main_image_display">
        <div className="container">
          <div className="row">
            <div className="column-33">
              <img src="/assets/m2.png" alt="App" width="335" height="471" />
            </div>
            <div className="column-66">
              <h1 className="xlarge-font">MYCO-DIFF</h1>

              <hr className="under_hr"/>
              <h1 className="large-font" style={{ color: "red" }}>
                <b>Pixels, who?</b>
              </h1>
              <p>
                <span style={{ fontSize: 24 }}>
                  A revolution in resolution.
                </span>
                Discription MYCO-DIFF is a powerful toolfor suppression of root
                nematodesand fusarium. It promotes vigorous root development.It
                is a biological fungicide base on antagonistic fungiof natural
                origin of broad spectrum Its infectious units are spores that
                control pathogenic fungi. The product can be applied at any time
                during crop development; it can be used alone or in combination
                of foliar fertilizers and commercial chemical fungicides.
                MYCODIFF WP can be appliedto at any time during crop
                development, mainly before or at the time of planting.
              </p>
              <button className="button" style={{ backgroundColor: "red" }}>
                Read More
              </button>
            </div>
          </div>
        </div>
        <hr className="main_hr" />

        <div className="container">
          <div className="row">
            <div className="column-66">
              <h1 className="xlarge-font">
                MaraShield
              </h1>
              <hr className="under_hr"/>

              <h1 className="large-font" style={{ color: "MediumSeaGreen" }}>
                <b>Why buy it?</b>
              </h1>
              <p>
                <span style={{ fontSize: 36 }}>Take photos like a pro.</span>
                Discription MARASHIELD is used for the suppression of powderly
                mildew mobilasation of phosphrous. It has bee developed from
                naturally occuring strains of Bacillus subtilis. It acts as a
                fungicide by providing spore germination, germ tube elongation
                and germ tube penetration and as a bacteriacie by direct contact
                activity of biological chemistry and through activation of plant
                resistance. MARASHIELD should be applied prior to desease
                development, and should be part of a comprehensive disease
                management program.
              </p>
              <button className="button">Download Application</button>
            </div>
            <div className="column-33">
              <img src="/assets/m1.png" width="335" height="471" alt="App" />
            </div>
          </div>
        </div>

        <hr className="main_hr" />

        <div className="container">
          <div className="row">
            <div className="column-33">
              <img src="/assets/m2.png" alt="App" width="335" height="471" />
            </div>
            <div className="column-66">
              <h1 className="xlarge-font">
                <b>SIRIZA</b>
              </h1>
              <h1 className="large-font" style={{ color: "red" }}>
                <b>Pixels, who?</b>
              </h1>
              <p>
                <span style={{ fontSize: 24 }}>
                  A revolution in resolution.
                </span>
                Discription SIRIZA controls thrips, aphids and whiteflies. It
                can be integrated into an overall pest management strategy
                wherver insectcide use is necessary in an IPM programme and is
                also an important tool in resistance management strategies SIRZA
                must be applied prior to several pestestablishment, and should
                be part of comprehensive pest management program.
              </p>
              <button className="button" style={{ backgroundColor: "red" }}>
                Read More
              </button>
            </div>
          </div>
        </div>

        <hr className="main_hr" />

        <div className="container">
          <div className="row">
            <div className="column-66">
              <h1 className="xlarge-font">
                <b>Protac Max</b>
              </h1>
              <h1 className="large-font" style={{ color: "MediumSeaGreen" }}>
                <b>Why buy it?</b>
              </h1>
              <p>
                <span style={{ fontSize: 36 }}>Take photos like a pro.</span>
                Discription PROTAC MAX is applied to the soil or folige to
                prevent,stop,or control pathogenic bacterial or fungal
                infections in plants and plant roots It defeats pathogens in a
                varietyof ways to include competition, producing antbiotics
                parastalizing harmful organisms, inducing systemic or localized
                resistance in the targeted plant.
              </p>
              <button className="button">Download Application</button>
            </div>
            <div className="column-33">
              <img src="/assets/m3.png" width="335" height="471" alt="App" />
            </div>
          </div>
        </div>
        <hr className="main_hr" />

        <div className="container">
          <div className="row">
            <div className="column-33">
              <img src="/assets/m2.png" alt="App" width="335" height="471" />
            </div>
            <div className="column-66">
              <h1 className="xlarge-font">
                <b>Pheromone Lures</b>
              </h1>
              <h1 className="large-font" style={{ color: "red" }}>
                <b>Pixels, who?</b>
              </h1>
              <p>
                <span style={{ fontSize: 24 }}>
                  A revolution in resolution.
                </span>
                Discription Sharp and clear photos with the world's best photo
                engine, incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquipex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariaturPHEROMONE LURES uses aggregate pheromones to lure
                and trap insects. They trap sex pheromones and aggrigating
                pheromones are the most types used.A pheromone - impregnated
                lure, as the red rubber septa in the picture is encased in a
                convential trap such as a bottle trap, Delta trap,water- pan
                trap, or funnel trap. Pheromone traps are used both to count
                insect population by sampling, and to trap pests such as clothes
                moths to destroy them.
              </p>
              <button className="button" style={{ backgroundColor: "red" }}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
