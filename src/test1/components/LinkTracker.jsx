import { useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useLocation } from 'react-router-dom';

const LinkTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const email = params.get('email');
    const linkId = params.get('linkId');

    console.log("Email:", email);  
    console.log("Link ID:", linkId); 

    if (email && linkId) {
      const logClick = async () => {
        const clickData = {
          email,
          timestamp: new Date(),
          linkId
        };

        try {
          await setDoc(doc(db, 'linkClicks', `${linkId}_${email}`), clickData);
          console.log("Click logged successfully");
        } catch (error) {
          console.error("Error logging click:", error); // Log any errors here
        }
      };

      logClick();
    } else {
      console.error("Email or Link ID is missing");
    }
  }, [location]);

  return (
    <div className="text-center">
      <h1 className="text-2xl">Thank you for clicking!</h1>
    </div>
  );
};

export default LinkTracker;
