import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Categories from '../Categories';
// import ItemsList from '../ItemsList';


function Home() {
    const navigate = useNavigate()
    const [search, setSearch]= useState('');
    const [category, setCategory] = useState('')
    // const [category_item,setCategory_Item]= useState([])
    // const [quantity, setQuantity] = useState('')
    window.grocery_list=[]
    
    const selectCategory=(e)=>{
        let selected_category = document.getElementById('select_category').value
        setCategory(selected_category)
        console.log(selected_category)                  
        window.categorised_item = item_list.filter(item=> item.category_name === selected_category)
        console.log(window.categorised_item)
       
    }
    
    const saveList= async(e)=>{
        e.preventDefault()
        console.log(window.grocery_list)
        let order = window.grocery_list
        let email = window.login_email
        // console.log(localStorage.getItem("authToken"))
        if (localStorage.getItem("authToken")){        
            if (order.length != 0){
                let result = await fetch("https://grocery-list-luu3.onrender.com/api/mylist", {
                method: "POST",
                body: JSON.stringify({email,order}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await result.json();
            console.log(data)
            if (!data.success) {
                window.alert("Something Went Wrong !!")
            }            
            if (data.success) {
                window.alert("Grocery List Created Successfully !!")
                navigate('/grocerylist')
            }
            window.mylist.push(window.grocery_list)
                console.log(window.mylist)
            }else{
                window.alert("Please Select Some Items !!")
            }
        }else{
            window.alert('Please Login First !!')
            navigate("/login")
        }

    } 

    function changeQuantity(id){
        var input_quantity = document.getElementById(id)
        // console.log(input_quantity.value)
        if (input_quantity.value != 'null'){
            return input_quantity.value
        }
    }
    
    const selectItem=(e)=>{
        var id = e.target.id
        var input_quantity =changeQuantity('quantity'+e.target.value)
        var checkbox = document.getElementById(id)
        if (checkbox.checked == true){
            const checked_item  =  item_list.find(item => item._id === e.target.value);
            // console.log(checked_item)
            checked_item.quantity = input_quantity
            // console.log(checked_item)
            window.grocery_list.push(checked_item)
        }
        // if (checkbox.checked == false){
        //     const 
        //     window.grocery_list.pop()
        // }   
       
    }
    
    
    const [item_list, setItem_List]= useState([])
    const [category_list, setCategory_List]= useState([]) 

    
    const loadData = async () =>{
        if (localStorage.getItem("authToken")){
            let response = await fetch("https://grocery-list-luu3.onrender.com/api/item_list",{
                method:"POST",
                headers:{
                    "Content-Type":'application/json'
                }
            })
            response  = await response.json();
            // console.log(response[0],response[1])
            setItem_List(response[0])
            setCategory_List(response[1])
        }
    }

    useEffect(()=>{
        loadData()
    },[])
  return (
    <>
    <div className='container my-2 p-4 rounded' style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",fontWeight: "bold" }} >
        <input className="form-control " type="text" id='searchInput' placeholder="Search" value={search} onChange={(e)=>{
            setSearch(e.target.value)}} style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)"}}/>
        <hr/>
        <div className='row' > 
            <div className='col-2'>
            <p>Category:</p>
            </div>
            <div className="col-7">
            <select className="form-select" id="select_category" value={category} onChange={selectCategory} >
                <option value={'All Items'} selected>All Items</option>
               {
                   category_list.map((item)=>(                                
                       <option  key={item._id} value={item.category_name} >
                        {item.category_name}</option>
                )
                )
               }
            </select>
            </div>  
            <div className='col-3'>
                <button className='btn btn-success'  onClick={saveList}>Save List
                </button>
            </div>
        </div> 
    </div>
    <div className='container my-2 p-4 rounded' style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}} >
        <div className='row'    > 
                    <div className='col-2'>
                    <p>Sr.No.</p>
                    </div>
                    <div className='col-5'>
                    Items
                    </div>
                    <div className='col-3'>
                    Quantity (grams)
                    </div>
                    <div className='col-2'>
                    Select 
                    </div>
                    <hr />
                </div>  
       {
        
            item_list.length != 0 ?    
                window.categorised_item.length  != 0 ?
                    window.categorised_item.filter((element) => ((element.name.toLowerCase().includes(search.toLowerCase())))).map((item, index)=> {            
                        return(
                            <>
                            <div className='row'   > 
                                <div className='col-2'>
                                <p>{index+1}.</p>
                                </div>
                                <div className='col-5'>
                                {item.name} 
                                </div>
                                <div className='col-3'>
                                <input className="form-control me-2" type="number" placeholder="0.0 grams" required  min="0"  id={'quantity'+item._id}  
                                // onChange={changeQuantity}
                                  style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)"}}/>
                                </div>
                                <div className='col-2'>
                                <input className="form-check-input" type="checkbox" value={item._id} id={"checked"+item._id} onChange ={selectItem}  style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)"}} />
                                </div>
                            </div>               
                            <hr />
                            </>
                        )})        
                    :  
                    item_list.filter((element) => ((element.name.toLowerCase().includes(search.toLowerCase()) || element.category_name.toLowerCase().includes(search.toLowerCase())))).map((item, index)=> {
                        return(
                            <>
                            <div className='row'   > 
                                <div className='col-2'>
                                <p>{index+1}.</p>
                                </div>
                                <div className='col-5'>
                                {item.name} 
                                </div>
                                <div className='col-3'>
                                <input className="form-control me-2" type="number" placeholder="0.0 grams" required min="0" id={"quantity" + item._id} 
                                // onChange={changeQuantity} 
                                style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)"}}/>
                                </div>
                                <div className='col-2'>
                                <input className="form-check-input" type="checkbox" value={item._id} id={"checked+"+item._id}  onClick ={selectItem}  style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)"}} />
                                </div>
                            </div>               
                            <hr />
                            </>
                        )})        
                :
                <div className='text-center'>-------------------------- Item Not Found --------------------------</div>
            }
        </div>
        </>
  )
}
export default Home