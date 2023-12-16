import React,{useEffect, useState} from 'react'


function Products() {

  const [data,setData] =  useState()
  useEffect(() =>{
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((result)=>setData(result.products));
  },[])

  return (
    <div className='container'>
         <div className='row'>
            { data  && data.length > 0 ? 
               data.map((item, index)=>{
                return(
                    <div className="card" style="width: 18rem;">
                        <img className="card-img-top" src={item.thumbnail} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div> 
                )
            }) 
            :
             "Loading products"

          }
        </div> 
    </div>
  )
}


export default Products
