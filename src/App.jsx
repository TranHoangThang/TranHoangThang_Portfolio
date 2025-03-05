import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import CustomCursor from './Components/Cursor/CustomCursor';
import { CursorContextProvider } from "./Components/Cursor/CursorContext";

function App() {
  return (
    <CursorContextProvider>
        <div className="bg-[#171d32] h-auto w-full overflow-hidden">
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Footer />
        </div>
    </CursorContextProvider>
  );
}

export default App;
