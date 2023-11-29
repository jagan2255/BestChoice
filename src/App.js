import './App.css';
import Aboutus from './Components/AboutUs/Aboutus';
import BoxContent from './Components/BoxContent/BoxContent';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import HomeText from './Components/HomeText/HomeText';
import RecentBlog from './Components/RecentBlog/RecentBlog';
import Service from './Components/Sevice/Service';
import Testimonials from './Components/Testimonials/Testimonials';


function App() {

  return (
    <>

      <Header />
      <HomeBanner/>
      <HomeText/>
      <Service/>
      <Aboutus/>
      <BoxContent/>
      <Testimonials/>
      <RecentBlog/>
      <Footer />
    </>
  );
}

export default App;
