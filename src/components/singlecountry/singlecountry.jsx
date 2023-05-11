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
     
   },[name])
  return (
    <div>{name}</div>
  )
}

export default Singlecountry;