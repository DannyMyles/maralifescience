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
            <p>
              Whether you are a famer or a stockist, we provide effective <br />
              fungicides, bio-fungicides, and bio-fitilizers for optimal crop
              <br />
              health. Explore our range of products to learn more.
            </p>
          </div>
          <div className="button_cont">
            <button>
              Explore brands <BsArrowRightCircle size={25} />
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
        <h1 className="our_brands">Our brands</h1>
        <div className="container">
          <div className="row">
            <div className="column-33">
              <img src="/assets/m2.png" alt="App" width="335" height="471" />
            </div>
            <div className="column-66">
              <div className="heading_span">
               <h1 className="xlarge-font">
                MYCO-DIFF{" "}
              </h1> 
              <span>(Trichoderma asperellum) Biological Fungicide</span>
              </div>
              <hr className="under_hr" />

              <div className="product_description">
                <div className="large-font">
                  <span>
                    {" "}
                    <IoIosArrowDropright />
                  </span>
                  <span>Product type:</span>
                </div>
                <h4 className="large-font_def">Biofertilizer and Nematicide</h4>
              </div>
              <div className="description">
                <div className="large-font">
                  <span>
                    {" "}
                    <IoIosArrowDropright />
                  </span>
                  <span>Description</span>
                </div>
                <p>
                  MYCO-DIFF is a powerful toolfor suppression of root
                  nematodesand fusarium. <br /> It promotes vigorous root
                  development.It is a biological fungicide base on antagonistic{" "}
                  <br />
                  fungiof natural origin of broad spectrum <br />
                </p>
                <p>
                  Its infectious units are spores that control pathogenic fungi.
                  The product can be applied <br /> at any time during crop
                  development; it can be used alone or in combination of foliar{" "}
                  <br /> fertilizers and commercial chemical fungicides.
                  MYCODIFF WP can be appliedto at any <br /> time during crop
                  development, mainly before or at the time of planting.
                </p>
                <button className="button">
                  Read more <BsArrowRightCircle size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="main_hr" />

        <div className="container">
          <div className="row">
            <div className="column-66">
              <h1 className="xlarge-font">
                MaraShield <span>(Bacilus subtilis) Biological Fungicide</span>
              </h1>
              <hr className="under_hr" />

              <div className="product_description">
                <div className="large-font">
                  <span>
                    {" "}
                    <IoIosArrowDropright />
                  </span>
                  <span>Product type:</span>
                </div>
                <h4 className="large-font_def">
                  Biofungicide and Biofertilizer
                </h4>
              </div>
              <div className="description">
                <div className="large-font">
                  <span>
                    {" "}
                    <IoIosArrowDropright />
                  </span>
                  <span>Description</span>
                </div>
                <p>
                  MARASHIELD is used for the suppression of powderly mildew
                  mobilasation of <br /> phosphrous. It has bee developed from
                  naturally occuring strains of <i> Bacillus subtilis</i>.{" "}
                  <br /> It acts as a fungicide by providing spore germination,
                  germ tube elongation and germ <br /> tube penetration and as a
                  bacteriacie by direct contact activity of biological chemistry{" "}
                  <br /> and through activation of plant resistance.
                  <br />
                </p>
                <p>
                  MARASHIELD should be applied prior to desease development, and
                  should be part of a<br />
                  comprehensive disease management program.
                </p>
                <button className="button">
                  Read more <BsArrowRightCircle size={25} />
                </button>
              </div>
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
                SIRIZA <span>(Beauveria bassiana) Bioinsecticide</span>
              </h1>
              <hr className="under_hr" />

              <div className="product_description">
                <div className="large-font">
                  <span>
                    {" "}
                    <IoIosArrowDropright />
                  </span>
                  <span>Product type:</span>
                </div>
                <h4 className="large-font_def">Bioinsecticide</h4>
              </div>
              <div className="description">
                <div className="large-font">
                  <span>
                    {" "}
                    <IoIosArrowDropright />
                  </span>
                  <span>Description</span>
                </div>
                <p>
                  SIRIZA controls thrips, aphids and whiteflies. It can be
                  integrated into an overall pest <br /> management strategy
                  wherver insectcide use is necessary in an IPM programme and{" "}
                  <br /> is also an important tool in resistance management
                  strategies <br />
                </p>
                <p>
                  SIRZA must be applied prior to several pestestablishment, and
                  should be part of a <br />
                  comprehensive pest management program.
                </p>
                <button className="button">
                  Read more <BsArrowRightCircle size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="main_hr" />

        <div className="container">
          <div className="row">
            <div className="column-66">
              <h1 className="xlarge-font">
                Protac Max{" "}
                <span>
                  (Gliocladium catenulatum) Insecticide, Thrips / Whiteﬂies{" "}
                </span>
              </h1>
              <hr className="under_hr" />

              <div className="product_description">
                <div className="large-font">
                  <span>
                    {" "}
                    <IoIosArrowDropright />
                  </span>
                  <span>Product type:</span>
                </div>
                <h4 className="large-font_def">Biofungicide</h4>
              </div>
              <div className="description">
                <div className="large-font">
                  <span>
                    {" "}
                    <IoIosArrowDropright />
                  </span>
                  <span>Description</span>
                </div>
                <p>
                  PROTAC MAX is applied to the soil or folige to prevent,stop,or
                  control pathogenic <br /> bacterial or fungal infections in
                  plants and plant roots.
                  <br />
                </p>
                <p>
                  It defeats pathogens in a varietyof ways to include
                  competition, producing antbiotics
                  <br />
                  parastalizing harmful organisms, inducing systemic or
                  localized resistance in the <br /> targeted plant.
                </p>
                <button className="button">
                  Read more <BsArrowRightCircle size={25} />
                </button>
              </div>
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
                Pheromone Lures <span>(Trap)</span>
              </h1>
              <hr className="under_hr" />
              <div className="product_description">
                <div className="large-font">
                  <span>
                    {" "}
                    <IoIosArrowDropright />
                  </span>
                  <span>Product type:</span>
                </div>
                <h4 className="large-font_def">Pheromone</h4>
              </div>
              <div className="description">
                <div className="large-font">
                  <span>
                    {" "}
                    <IoIosArrowDropright />
                  </span>
                  <span>Description</span>
                </div>
                <p>
                  PHEROMONE LURES uses aggregate pheromones to lure and trap
                  insects. They trap <br /> sex pheromones and aggrigating
                  pheromones are the most types used.A <br /> pheromone -
                  impregnated lure, as the red rubber septa in the picture is
                  encased in a <br />
                  convential trap such as a bottle trap, Delta trap,water- pan
                  trap, or funnel trap.
                  <br />
                </p>
                <p>
                  Pheromone traps are used both to count insect population by
                  sampling, and to trap <br /> pests such as clothes moths to
                  destroy them.
                </p>
                <button className="button">
                  Read more <BsArrowRightCircle size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
