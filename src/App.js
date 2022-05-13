import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import * as PropTypes from "prop-types";
import {Route} from "react-router-dom";


function Routes(props) {
  return null;
}

Routes.propTypes = {children: PropTypes.node};

function App() {
  return (
      <div>
    <Hero/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/popular" element={<Menu/>}/>
      <Route path="/top-rated" element={<Stock/>}/>
      <Route path="/upcoming" element={<AboutUs/>}/>
      <Route path="/now-playing" element={<Contacts/>}/>

    </Routes>
  </div>

  );
}

export default App;
