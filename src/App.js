import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Client from './components/Clients';
import Pricing from './components/Pricing';
import Mobile from './components/Mobile';
import Footer from './components/Footer';
function App() {
  return (
    <div className="">
        <Header />
        <Services />
        <Client />
        <Pricing />
        <Mobile />
        <Footer />
    </div>
  );
}

export default App;
