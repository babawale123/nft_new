import Autions from "./component/Autions"
import CardSection from "./component/Card_down"
import DashboardComponent from "./component/Dashboard"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import NFTPage from "./component/Nft"
import FeaturedSection from "./component/Overline"
import FeaturedSection_new from "./component/Overline_2"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Autions />
      <FeaturedSection_new />
      <NFTPage />
      <FeaturedSection />
      <CardSection />
      <DashboardComponent />
      <Footer />
    </>
  )
}

export default App
