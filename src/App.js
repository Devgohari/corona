import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Content from './Components/Cards/Content'
import Footer from './Components/Common/Footer/Footer'
import Navbar from './Components/Common/Navbar/Navbar';
import Profile from './Components/Need Help/Profile';
import Delete from './Components/Need Help/Delete';
import Details from './Components/Detail/Detail';
import noteContext from './Context/Context';
import Feedback from './Components/Forms/Feedback';
import Volunteer from './Components/Forms/Volunteer';
import Myprofile from './Components/MyProfile/Myprofile';

function App() {
  const state = useContext(noteContext);
  return (
    <div className="App">
      <Navbar />
      <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/details/:serviceID" element={<Details />} />
            <Route path="/feedback" element={<Feedback />} />
            {state.isLoggedIn ?
              <Route path="/needhelp" element={<Profile />} /> :
              <Route path="*" element={<Navigate to='/' />} />
            }
            {state.isLoggedIn ?
              <Route path="/volunteer" element={<Volunteer/>} /> :
              <Route path="*" element={<Navigate to='/' />} />
            }
            {state.isLoggedIn ?
              <Route path="/myprofile" element={<Myprofile/>} /> :
              <Route path="*" element={<Navigate to='/' />} />
            }
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
