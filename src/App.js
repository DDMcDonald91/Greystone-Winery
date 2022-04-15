import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation.js';
import Divider from './Components/Divider.js';
import About from './Components/About.js';
import Details from './Components/Details.js';
import Divider2 from './Components/Divider2.js';
import Forms from './Components/Forms.js';
import Footer from './Components/Footer.js';
import VideoHero from './Components/VideoHero.js';
import Team from './Components/Team.js';
import Divider3 from './Components/Divider3.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <VideoHero />
      <Divider />
      <About />
      <Details />
      <Divider2 />
      <Team />
      <Divider3 />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
