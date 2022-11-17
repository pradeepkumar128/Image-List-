import React, { useEffect, useState } from 'react';

const Home = () => {

     const [users,setUsers] = useState([]);

     const getUsers = async () =>{
          const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
          console.log(response);
          setUsers(await response.json());
          
     }

     useEffect(() =>{
          getUsers();
     },[]);


  return (
    <>
     <h2 className="text bg-success mt-4 ">List Of Image</h2>
     <div className="container-fluid mt-2 ">
          <div className="row text-center ">
                    {
                         users.map((curElem)=>{
                              return(
                                   <>
                                   <div>
                                     <div className="col-10 mt-2 col-md-4 d-inline-block" key={curElem.id}>
                                        <div className="card p-2 ">
                                             <div className="d-flex align-items-center ">
                                                  <div className="image m-3 "><img src={curElem.thumbnailUrl} className="rounded" width="155" /></div>
                                                  <div className="ml-3 w-100"><h4 className="mb-0 mt-0 textLeft">{curElem.id}</h4><span className="textLeft">{curElem.title}</span>
                                                       <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                            <div className="d-flex flex-column"><span className="articles">articles</span><span className="number1">38</span></div>
                                                            <div className="d-flex flex-column"><span className="followers">Followers</span><span className="number2">980</span></div>
                                                            <div className="d-flex flex-column"><span className="rating">Rating</span><span className="number3">8.9</span></div>
                                                       </div>
                                                  </div>
                                             </div>     
                                        </div>
                                     </div>     
                                   </div>          
                                   </>
                                   )
                              })
                    }
          </div>
     </div>
    </>
  )
}

export default Home;