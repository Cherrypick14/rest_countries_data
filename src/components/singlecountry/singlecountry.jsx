import React,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom';


const Singlecountry = () => {

   const[country, setCountry] = useState([]);

   const {name} = useParams();

   useEffect(()=>{

    const getCountryData = async () =>{

        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

            const data = await res.json();

            setCountry(data);

        } catch (error) {
          console.error(error)

        }
    }
      getCountryData();
     
   },[name])
  return (

    <section className='max-w-7xl p-8 md:py-0 mx-auto'>

      {country.map((item)=>(
     <div className='grid grid-cols-1 md:grid-cols-2 h-screen gap-8 md:place-items-center'>

      <article>
        <img src={item.flags.svg} alt={item.name.common} />
      </article>

      <article>
        <h1 className='font-bold text-4xl text-gray-700 mb-4'>{item.name.official}</h1>

         <ul>
          <li>Capital:{item.capital[0]}</li>
          <li>Population:{item.population.toLocaleString()}</li>
          <li>Region:{item.region}</li>
          <li>SubRegion:{item.subregion}</li>
  
         </ul>
         
         {item.borders && (
          <div className='mt-5'>
           <h3 className='font-bold text-2xl text-gray-800 mb-3'>Borders</h3>
              <ul className='flex flex-col md:flex-row gap-3'>
             
                {item.borders.map((borders, index)=>(
                  <li key={index} className='bg-slate-50 rounded-md px-3 py-3 w-fit'>{borders}</li>
                ))}
   
            </ul>
          </div>
          
         )}
        
      </article>
     </div>

      ))}
      
    </section>
  )
}

export default Singlecountry;