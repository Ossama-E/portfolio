// import logo from './logo.svg';
import NavBar from "./components/NavBar.js"
import { Banner } from "./components/Banner.js"
import { Projects } from "./components/Tabs.js"
import { Footer } from "./components/Footer.js"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
   return (
      <div className="App">
         <NavBar />
         <Banner />
         <Projects />
         <Footer />
      </div>
   )
}

export default App
