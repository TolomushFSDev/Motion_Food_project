import './App.css';
import Header from "./Components/Header/Header";
import PizList from "./Components/Piz_list/PizList";
import {Router} from "react-router-dom";


function App() {
    return (
        <div>
            <Header/>
            <PizList/>
        </div>
    );
}

export default App;
