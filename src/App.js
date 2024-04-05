import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Header from './layout/header';
import Footer from './layout/footer';
import Home from './component/home/home';


function App() {
  return (
    <div className="App">
    <Header/>
    <Home />
    <Footer/>
    </div>
  );
}

export default App;
