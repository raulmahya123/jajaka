import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner.js';
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import { Founderr } from "./components/Founder.js"

function App() {
  return (
    <div className="App">
<NavBar/>
<Banner/>
<Skills />
<Projects/>
<Contact/>
{/* <Founderr/> */}
<Footer/>
    </div>
  );
}

export default App;
