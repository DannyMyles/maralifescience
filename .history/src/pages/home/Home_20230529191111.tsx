import Navbar from "../../components/navbar/Navbar"
import "./home.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home_container">
        <div className="home_content">
          <div><h1>Revolutionizing <br /> agriculture</h1> </div>
          <div>
            <p>Whether you are a famer or a stockist, we provide effective <br />
            fungicides, bio-fungicides, and bio-fitilizers for optimal crop <br />
            health. Explore our range of products to learn more.
            </p>  
          </div> 
          <div>
            <button>Explore brands</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
