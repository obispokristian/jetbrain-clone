import Navbar from "./sections/Navbar.jsx";
import Header from "./sections/Header.jsx";
import News from "./sections/News.jsx";
import Trusted from "./sections/Trusted.jsx";
import Stories from "./sections/Stories.jsx";
import Discover from "./sections/Discover.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <div className={``}>
      <Navbar />
      <Header />
      <News />
      <Trusted />
      <Stories />
      <Discover />
      <Footer />
    </div>
  );
};
export default App;
