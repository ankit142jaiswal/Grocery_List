import React, { useEffect, useState } from 'react'
export const Mylist = () => {

  const [order_list, setOrder_list] = useState([])
      
  const loadData = async () =>{
      if (localStorage.getItem("authToken")){
          let response = await fetch("https://grocery-list-luu3.onrender.com/api/item_list",{
              method:"POST",
              headers:{
                  "Content-Type":'application/json'
              }
          })
          response  = await response.json();
          setOrder_list(response[2])
          order_list.push({email: 'jsdbasjkdajsbd', order: [],date : Date()})
          console.log(order_list)
      }
  }
  useEffect(()=>{
      loadData()
  },[])

  // console.log(window.mylist)
  return (
    <div>
      <div className='container my-2 p-4 rounded' style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}} >
        <div className='row'> 
        <h1 className=' text-center'>My List </h1><hr />
        </div>  
      </div>
      <div className='container my-2 p-4 rounded' style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}} >
          {
            order_list != [] ? 
            order_list.map((items,index)=>{          
              return  (
                  <div className="btn col-12 m-1" style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}}>
                    <div className='row'> 
                      <div className='col-2'>
                        {index+1} 
                      </div>
                      <div className='col-10'>
                        {items.order}
                      </div>
                    </div>
                    <hr />  
                    <div className='row'>Order on : {items.date}</div>
                  </div>
              )
            }):
            <div className='text-center'> No Previous Order</div>
          }
      </div>
    </div>
  )
}


{/* {items.map((item, index) =>
                      <div className="row p-2 overflo-auto">
                      <div className='col-2'>
                      <p>{index+1}.</p>
                      </div>
                      <div className='col-5'>
                      {item.name}
                      </div>
                      <div className='col-3'>
                      {item.quantity}df
                      </div>
                      <div className='col-2'>
                      {item.price}df
                      </div>
                      <hr />
                      </div>
                      )} */}