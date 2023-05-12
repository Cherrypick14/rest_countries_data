import React,{useState,useEffect} from 'react'
import Article from '../article/article';

const Countries = () => {

    const [countries, setCountries]= useState([]);

    useEffect(()=>{
     
        const getCountriesData = async ()=>{

            try {
                const res = await fetch('https://restcountries.com/v3.1/all')

                const data = await res.json()
    
                setCountries(data.slice(0,10)); 

            } catch (error) {
                console.debug(error);
            }

        }

           getCountriesData();        
    },[])
    
  return (
    <section className='container mx-auto p-8'>
        {/* {forms} */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

        {countries.map((country)=>(

        <Article key={country.name.common} {...country} />


    ))}
        </div>
    
        </section>
  )
}

export default Countries;