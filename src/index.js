import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Context from './Context/Context';
import useAuth from './Context/useAuth';

const MainApp = () => {
  const {log, forpass,forgetPass, background, setbackground,setforpass,mediaPosts,postloading, setpostloading, hashtag, sethashtag,setmediaPosts,setlog , posts, isLoggedIn,getdata, login,userData, setUserData, setIsLoggedin,logout,loogin,register,feedback,volunteer,profiledata,progress, setProgress, changePass,helpseeker,helpgiver } = useAuth();
  return <BrowserRouter>
    <Context.Provider value={{posts,log,forpass,forgetPass,background, setbackground, setforpass,hashtag,postloading, setpostloading, sethashtag,mediaPosts, setmediaPosts, setlog ,userData,changePass,getdata, setUserData, isLoggedIn, login, setIsLoggedin,logout,loogin,register,feedback,volunteer,progress, setProgress,profiledata,helpseeker,helpgiver }} >
      <App />
    </Context.Provider>
  </BrowserRouter>
}

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
