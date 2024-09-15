
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
  
      <Home />
      <Projects />
      <Skills/>
      <Contact/>
      <Certifications/>
      
    </div>
    
  );
}

export default App;
