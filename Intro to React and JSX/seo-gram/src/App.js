import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mission from "./components/Mission";
import TopServices from './components/TopServices';
import OurServices from './components/OurServices';
import PricingPlans from "./components/PricingPlans";
import Search from "./components/Search";
import OurBlog from './components/OurBlog';

function App() {
  return (
    <div>
      <div className="back-to-top"></div>

      <Header />

      <TopServices />

      <AboutUs />

      <OurServices />

      <Search />

      <PricingPlans />

      <Mission />

      <OurBlog />

      <Footer />
    </div>
  );
}

export default App;
