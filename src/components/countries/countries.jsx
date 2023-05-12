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
        <div className='mb-8 flex flex-col gap-4 md:flex-row md:justify-between'>
            <form autoComplete='off' className='max-w-3xl md:flex-1'>

            <input type="text" name="search" id="search" placeholder='Start your Country Search...' className='outline-none px-2 py-4 placeholder-slate-600 w-full shadow rounded' required />

            </form>

            <form className='md:flex-2'>

              <select type='text' name="filter-by-region" id="filter-by-region" className='w-52'></select>

            </form>
           
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

        {countries.map((country)=>(

        <Article key={country.name.common} {...country} />


    ))}
        </div>
    
        </section>
  )
}

export default Countries;