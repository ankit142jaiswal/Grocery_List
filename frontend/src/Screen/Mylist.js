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
      console.log(response[2])
     
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
                    <div className='row m-0'>
                      Order placed at : {items.date.substring(0, 10) +", "+items.date.substring(12, 16) }
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-1'>
                        {index+1}.
                      </div>
                      <div className='col-3'>
                        {items.order[0].name}
                      </div>
                      <div className='col-2'>
                        {items.order[0].category_name}
                      </div>
                      <div className='col-1'>
                        {items.order[0].price}
                      </div>
                      <div className='col-1'>
                        {items.order[0].quantity }
                      </div>
                    </div>
                    <hr />  
                    <div className='row'>
                      <div className='col-auto'>
                        {"Total Items : "+items.order.length}
                      </div>
                    </div>
                    <hr />
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
