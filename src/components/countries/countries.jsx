import React,{useState,useEffect} from 'react'
import Article from '../article/article';
import { regions } from '../../regions';

const Countries = () => {

    const [countries, setCountries]= useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
     
        const getCountriesData = async ()=>{

            try {
                const res = await fetch('https://restcountries.com/v3.1/all')

                const data = await res.json()
    
                setCountries(data); 

            } catch (error) {
                console.debug(error);
            }

        }

           getCountriesData();        
    },[]);

  console.debug(countries)
  console.log(typeof countries)

    const searchCountry = async () =>{

        try {

           const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`) ;

           const data = await res.json();

           setCountries(data);

        } catch (error) {
            console.log(error);
        }
    }

    const filterByRegion = async (region) =>{
        try {

            const res = await fetch(`https://restcountries.com/v3.1/name/${region}`) ;
 
            const data = await res.json();
 
            setCountries(data);
 
         } catch (error) {
             console.log(error);
         }
    }

    const handleSubmitForm = (e) =>{

       e.preventDefault();

       searchCountry();
    }

    const handleByFilter = (e) =>{

      e.preventDefault();

      filterByRegion();
    }
    
  return (
    <section className='container mx-auto p-8'>

        {/* {forms} */}

        <div className='mb-8 flex flex-col gap-4 md:flex-row md:justify-between'>

            <form onSubmit={handleSubmitForm} autoComplete='off' className='max-w-3xl md:flex-1'>

            <input 
            type="text" 
            name="search" 
            id="search" 
            placeholder='Start your Country Search...' 
            className='outline-none px-2 py-4 placeholder-slate-600 w-full shadow rounded' 
            value ={searchText}
            onChange={(e)=> setSearchText(e.target.value)}
            required />

            </form>

            <form onSubmit={handleByFilter}>

              <select 
              type='text' 
              name="filter-by-region" 
              id="filter-by-region" 
              className='w-52 px-2 py-3 outline-none shadow-md rounded hover:cursor-pointer text-gray-600'
              value={regions.name}
              onChange={(e)=>filterByRegion(e.target.value)}
              >

                {/* {Our regions} */}
                {regions.map((region)=>(
                 <option key={region.id} value={region.name}>{region.name}</option>
                ))}

              </select>

            </form>
           
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

        {countries?.map((country)=>(

        <Article key={country.name.common} {...country} />


    ))}
        </div>
    
        </section>
  )
}

export default Countries;