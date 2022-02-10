import axios from "axios";
import { useState, useEffect } from "react";

const useAuth = () => {
    const [background, setbackground] = useState('');
    const [forpass, setforpass] = useState(false);
    const [postloading, setpostloading] = useState(true);
    const [mediaPosts, setmediaPosts] = useState([]);
    const [log, setlog] = useState(false);
    const [progress, setProgress] = useState(0)
    const [hashtag, sethashtag] = useState([]);
    const [isLoggedIn, setIsLoggedin] = useState(false);

    useEffect(() => {

        if (isLoggedIn === true) {
            console.log('this is wortking');
        }
    }, [isLoggedIn])
    const [userData, setUserData] = useState({
        firstName: '',
        email: '',
        id: ''
    });
    const services = async ()=>{
        
    }
    const login = async (email, password) => {
        const response = await axios.post(`http://35.166.220.82/apicaronahelp/public/api/login`, {
            email: email,
            password: password
        });
        if (response.data === 'Logged in successfully') {
            const username = await axios.get('http://35.166.220.82/apicaronahelp/public/api/getUsersData')
            username.data.map((user) => {
                if (user.email === email) {
                    setUserData({
                        firstName: user.name,
                        email: user.email,
                        id: user.id

                    })
                    console.log(user.mobile);
                    console.log(user.name);
                    console.log(user.email)
                    setlog(false)
                }
            })
            setProgress(40)
            setIsLoggedin(true)

            setProgress(80)
            setTimeout(() => {
                setProgress(100)
            }, 500);
            console.log(userData);
        }
        else {
            alert('Invalid email id or password');
        }


    }
    const register = async (email, password, name, number, location) => {
        const response = await axios.post(`http://35.166.220.82/apicaronahelp/public/api/register`, {
            email: email,
            password: password,
            name: name,
            mobile: number,
            location: location,
            latitude: 56,
            longitude: 172
        });
        console.log(response.data);
        if (response.data.Result === "Data has been saved successfully") {
            setlog(false)
            alert('You have successfully signed up')
            
        }
    }
    const logout = () => {
        setUserData({
            firstName: '',
            email: '',
            id: ''
        })
        setIsLoggedin(false);
        console.log(userData);
    }
    const loogin = () => {
        setIsLoggedin(true);
    }
    const feedback = async (name, email, mobile, message) => {
        let response = await axios.post('http://35.166.220.82/apicaronahelp/public/api/feedback', {
            name: name,
            email: email,
            mobile: mobile,
            message: message
        })
        // console.log(response.data.Result)
        if (response.data.Result === 'Data has been saved successfully') {
            window.alert('Your Feedback has been submitted successfully')
        }
        else {

        }
    }
    const volunteer = async (name, email, mobile, city, service_slug, message) => {
        const response = await axios.post('http://35.166.220.82/apicaronahelp/public/api/helpinghands', {
            name: name,
            email: email,
            mobile: mobile,
            city: city,
            service_slug: service_slug,
            message: message
        })
        // console.log(response.data);
        if (response.data.Result === 'Data has been saved successfully') {
            window.alert('Your Help would be appriciated ')
        }
        else {

        }
    }
    let forgetPass = async (email)=>{
        let response = await axios.post('http://35.166.220.82/apicaronahelp/public/api/forgot-password',{
            email:email
        })
        console.log(response.data.status);
        
        if (response.data.status === "We have emailed your password reset link!") {
            window.alert('We have mailed you password reset link')
            
        }
        else {
            alert('Incorrect E-Mail ID')
        }
        
    }
    let profiledata = async () => {
        const response = await axios.get('http://35.166.220.82/apicaronahelp/public/api/getUsersData')

        console.log(response.data);
        response.data.map((user) => {
            if (user.email === userData.email) {
                console.log(user.email);
                console.log(user.id);
            }
        })
    }
    let changePass = async (id, current_password, new_password) => {
        let response = await axios.post('http://35.166.220.82/apicaronahelp/public/api/updatepassword', {
            id: id,
            current_password: current_password,
            new_password: new_password
        })
        console.log(response.data);
    }
    // GET DATA FROM API
    let helpgiver = async (service, name, email, mobile, age, address, city, message) => {
        let response = await axios.post('http://35.166.220.82/apicaronahelp/public/api/helpgiver', {
            service: service,
            name: name,
            email: email,
            mobile: mobile,
            age: age,
            address: address,
            city: city,
            message: message
        })
        console.log(response);
        console.log(response.status);
        if (response.status===200) {
            alert('Your request has been submitted')
        }
    }
    let helpseeker = async (service, name, email, mobile, age, address, city, message) => {
        let response = await axios.post('http://35.166.220.82/apicaronahelp/public/api/helpseeker', {
            service: service,
            name: name,
            email: email,
            mobile: mobile,
            age: age,
            address: address,
            city: city,
            message: message
        })
        console.log(response);
        console.log(response.status);
        if (response.status===200) {
            alert('Your request has been submitted')
        }
    }
    const posts = async (hashtag)=>{
        let response = await axios.post('http://35.166.220.82/apicaronahelp/public/api/get_tweets?hashtag=hashtag',{
            "hashtag":hashtag})
            setmediaPosts(response.data)
            // console.log(response.data) 
            setpostloading(false)
    }

    return {posts,forpass,forgetPass,background, setbackground, setforpass,mediaPosts,postloading, setpostloading, setmediaPosts, log, setlog, login, isLoggedIn, userData, logout, setIsLoggedin, loogin, register, feedback, volunteer, profiledata, progress, setProgress, setUserData, changePass, helpgiver, helpseeker,hashtag, sethashtag };
}
export default useAuth;