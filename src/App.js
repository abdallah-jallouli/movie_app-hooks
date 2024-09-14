import "./App.css";
import { moviesData } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

const App = () => {
  

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home data={moviesData}/>}></Route>
          <Route path="/details/:id" element={<Details data={moviesData}/>}> </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
