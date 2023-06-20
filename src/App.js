import "./App.css";
import Contact from "./pages/Contact";
import Introduction from "./pages/Introduction";
import Project from "./pages/Project";
import Technical from "./pages/Technical";
import Testimonial from "./pages/Testimonial";
import About from "./pages/about";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="max-w-full w-[1400px] h-full m-auto">
      <Introduction />
      <About />
      <Project />
      <Technical />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
