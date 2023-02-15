import axios from "axios";
import React, { useEffect, useState } from "react";

const DeleteMethod = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [editUserInfo, setEditUserInfo] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const handleUserInfo=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  };
  const handleEditUserInfo = (e)=>{
    setEditUserInfo({...editUserInfo,[e.target.name]:e.target.value});
  };
  const getApiData = async () => {
    const res = await axios.get(
      `https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`,
      user
    );
    setData(res.data);
  };
    const DeleteApiData = async (id) => {
    await axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`);
    getApiData();
    // handlePostData()
  };
    const handlePostData = async () => {
    await axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`,
      user
      );
      getApiData();
    };
    const handleEditUserCall =async()=>{
      await axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`,editUserInfo);
      setIsEdit(!isEdit);
      getApiData();
    };
    
    useEffect(() => {
      getApiData();
    }, []);
    
    const handleIsEdit=()=>{
      setIsEdit(!isEdit);
    };
  return (
    <div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        height: "300px",
        alignItems: "center",
        backgroundColor: "skyblue",}} >
      
        <label htmlFor="">First Name</label>
        <input
          type="text"
          placeholder="Enter LastName" 
          name="firstName"
          onChange={handleUserInfo}
        />

        <label htmlFor="">Last Name</label>
        <input
          type="text"
          placeholder="Enter FirstName"
          name="lastName"
         onChange={handleUserInfo}
        />
        
       
        <button onClick={handlePostData}>Submit</button>
      </div>

      {data.map((item,index) => {
        return (
          <div key={index}>
            {isEdit ?(
              <div>
           <h3>First Name:</h3>
           <input type="text" onChange={handleEditUserInfo} name="firstName" />
           <h3>Last Name:</h3>
           <input type="text" name="lastName" onChange={handleEditUserInfo}  />
           <br/>
           <button onClick={()=>handleEditUserCall(item.id)} >Save</button>
           </div>
           ):(
            <div>
              <h3>First Name:{item.firstName}</h3>
              <h3>Last Name:{item.lastName}</h3>
             <button onClick={()=>DeleteApiData(item.id)} >Delete User</button>
             </div>
           )}
             <br/>
            <button onClick={handleIsEdit}>{isEdit ? "Cancel" : "Edit" } </button>
            </div>
         
        );
      })}
    </div>
  );
};

export default DeleteMethod;