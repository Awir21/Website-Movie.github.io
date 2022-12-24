import "./App.css";
import NavigationBar from "./Components/NavigationBar.js"
import Intro from "./Components/Intro.js"
import Trending from "./Components/Trending.js"
import Superhero from "./Components/Superhero.js"
import "./Style/LandingPage.css"
function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <Superhero />
      </div>
    </div>
  )
}

export default App
