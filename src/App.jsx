import { useEffect, useState } from 'react'
import Card from './Card'
import { ssrDynamicImportKey } from 'vite/runtime';

function App() {
        const [loading, setLoading]= useState(false);
        const [data, setData] = useState([]);
        useEffect(
            ()=>{
                   const loadData  = async()=>{
                       const response =   await fetch('https://fakestoreapi.com/products')
                       setData(await response.json());
                       setLoading(true)
                   }
                   loadData();
            },[]
        );

        if(!loading){
            return(
                <div> Data is Loading , Please Wait</div>
            )
        }

        if(loading){
           return(
             <div className=' flex justify-center lg: flex flex-wrap'>
                    {
                         data.map(
                             (item)=>{
                                return <Card key={item.id} 
                                  id={item.id}
                                  name= {item.title}
                                  price={item.price}
                                  img= {item.image}
                                  rating={item.rating.rate}
                                > </Card>
                             }
                         )
                    }
             </div>
           )
        }

}

export default App
