import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LinkTracker from "./components/LinkTracker";
import MainComponent from "./pages/Main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/track" element={<LinkTracker />} />
      </Routes>
    </Router>
  );
};

export default App;
