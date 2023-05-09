import React,{useState,useEffect} from 'react'

const Countries = () => {

    const [countries, setCountries]= useState([]);

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

           getCountriesData()         
    },[])
    
  return (
    <div>{countries.length}</div>
  )
}

export default Countries