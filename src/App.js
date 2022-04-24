import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Create from "./components/create/Create";
import Read from "./components/read/read";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Update from "./components/update/Update";
import { Button } from "semantic-ui-react";

function App() {
  return (
    <>
    <div className="body1">
      <div>
        <Header Name="Employee Management App" />
      </div>

      <Router>
        <div className="linkbutton">
          <Link to="/create">
            <Button color="blue">Create</Button>
          </Link>
          <Link to="/read">
            <Button color="blue">View</Button>
          </Link>
        </div>

        <Routes>
          <Route path="/create" element={<Create />} />

          <Route path="/read" element={<Read />} />

          <Route path="/Update" element={<Update />} />
        </Routes>
      </Router>

      <footer>
        <Footer para="All Rights Reserved 2022 © SumitReact" />
      </footer>
      </div>
    </>
  );
}

export default App;
