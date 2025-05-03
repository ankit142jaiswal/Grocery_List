import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const Grocerylist = () => {
  const  grocery_list =[]
  const pdfRef = useRef()

  const downloadPDF = () =>{

    if (window.grocery_list.length == 0){
        window.alert("Please Add Some Items !!")
    }
    else{
        const input = pdfRef.current;
        html2canvas(input).then((canvas)=>{
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth/ imgWidth, pdfHeight/imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio)/2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('grocerylist');
        });
    window.alert('Grocery List Download Successfull !!')
    }
  }
  return (
    <>

    <div className='container my-2 p-4 rounded'  ref={pdfRef}   style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}} >
        <div className='row' >
            {/* <h1 className='text-center' >Grocery List</h1>                */}
            <button className='btn btn-success ' onClick={downloadPDF}>DownLoad List</button>
        </div>
        <hr />
    </div>
    <div className='container my-2 p-4 rounded' ref={pdfRef}  style={{boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", fontWeight: "bold"}} >  
        
        <div className='row'>
            <div className=''>
                <h1 className='text-center' id='glh'>Grocery List</h1>
                <hr />
            </div>
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
                    Price
                    </div>
                    <hr />
        </div>  
        {
        window.grocery_list != [] ?       

        window.grocery_list.map((item, index)=> {            
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
                    {item.quantity}
                    </div>
                    <div className='col-2'>
                    {item.price}
                    </div>
                </div>               
                 <hr />
                
                </>
            )
        })      
            
        : <div >----------- Item Not Found -----------</div>
       }
        
    </div>


    
</>
  )
}
