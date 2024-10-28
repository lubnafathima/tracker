import { useEffect, useState } from "react"; 
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig'; 
import MainComponent from "./pages/Main";
import SignInComponent from "./pages/SignIn";
import SignUpComponent from "./pages/SignUp";
import HomeComponent from "./pages/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/sign-up" element={<SignUpComponent />} />
        <Route path="/sign-in" element={<SignInComponent />} />
        <Route path="/home" element={isAuthenticated ? <HomeComponent /> : <Navigate to="/sign-in" />} />
      </Routes>
    </Router>
  );
};

export default App;
