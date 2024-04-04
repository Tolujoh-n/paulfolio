import logo from "./logo.svg";

import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/vendor/glightbox/css/glightbox.min.css";
import "../src/assets/vendor/swiper/swiper-bundle.min.css";
import "../src/assets/css/style.css";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Service";

function App() {
  return (
    <body>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Services />
      </main>
      <Footer />
    </body>
  );
}

export default App;
