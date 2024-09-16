import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import FollowMe from "./pages/FollowMe";
import Classes from "./pages/Classes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/FollowMe" element={<FollowMe/>}/>
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </Router>
  );
};
//
export default App;
