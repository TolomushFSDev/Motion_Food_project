import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Menu from "./pages/Menu";
import Stock from "./pages/Stock";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Menu/>}/>
      <Route path="/stock" element={<Stock/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
    </Routes>
        <Footer/>
  </div>

  )};

export default App;
