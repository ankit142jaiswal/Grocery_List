import React, { useEffect, useState } from 'react';

function Mylist() {

  const [order_list , setOrder_list] = useState([]);
      
  const loadData = async () =>{      
      let response = await fetch("https://grocery-list-luu3.onrender.com/api/item_list",{
          method:"POST",
          headers:{
              "Content-Type":'application/json'
          }
      })
      response  = await response.json();
      window.mylist = response[2]
      console.log(window.mylist)
      setOrder_list(response[2])
      console.log(order_list)
  }
  useEffect(()=>{
      loadData()
  },[])

  // console.log(window.mylist)
  return (
    <div>
      <div className='container my-2 p-4 rounded' style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}} >
        <div className='row'> 
        <h1 className=' text-center'>My List</h1><hr/>
        </div>  
      </div>
      <div className='container my-2 p-4 rounded' style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}} >
          {
            global.myorder_list.length != 0 ? 
            global.myorder_list.map((items,index)=>{          
              return  (
                  <div className="btn col-12 m-1" style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}}>
                    {/* <div className='row'>  */}
                      {/* <div className='col-2'>
                        {index+1} 
                      </div>
                      <div className='col-10'>
                        {items.order}
                      </div>
                    </div>
                    <hr />  
                    <div className='row'>Order on : {items.date}</div> */}
                  </div>
              )
            }):
            <div className='text-center'> No Previous Order</div>
          }
      </div>
    </div>
  )
}

export default Mylist;
