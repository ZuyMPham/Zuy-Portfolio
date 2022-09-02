import './App.scss'; 
import {About, Header, Skills, Work, Footer,Futureuse} from './containers';
import {Navbar} from './components';


const App = () => {
  return (
    <div className='app' > 
    <Navbar /> 
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
    <Futureuse/>
  </div>
  );
}

export default App;
