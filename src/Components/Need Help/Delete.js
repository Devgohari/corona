import React from 'react'
import  axios from 'axios';
function Delete() {
  async function getUser() {
    try {
      const response = await axios.get('http://35.166.220.82/apicaronahelp/public/api/getUsersData');
      let data = await(response.data);
      data.map((info)=>{
          console.log(info.name);
          console.log(info.id);
          console.log(info.email);
          console.log(info.mobile);
      })
    } catch (error) {
      console.error(error);
    }
  }
  
  
    return (
        <div>
        </div>
    )
}

export default Delete
