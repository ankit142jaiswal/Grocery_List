import React from 'react'

export const Mylist = () => {
          console.log(window.mylist)
  return (
    <div>
      <div className='container my-2 p-4 rounded' style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}} >
        <div className='row'> 
        <h1 className=' text-center'>My List </h1><hr />
        </div>  
      </div>
      <div className='container my-2 p-4 rounded' style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}} >
          {
            window.mylist != [] ? 
            window.mylist.map((items,index)=>{          
              return  (
                  <div className="btn col-12 m-1" style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}}>
                    <div className='row'> 
                      <div className='col-2'>
                        {index+1} 
                      </div>
                      <div className='col-10'>
                        Order On : {Date()}
                      </div>
                    </div>  
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