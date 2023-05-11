import React from 'react'
import { Link } from 'react-router-dom';

const Article = ({flags,name, population,region,subregion}) => {
  return (
    <Link to={`${name.common}`}>
     <article className='shadow-lg rounded-lg hover:drop-shadow-xl shadow-slate-500 cursor-pointer overflow-hidden hover:scale-105 duration-200 '>

    <img src={flags.svg} alt="" className='md:h-64 w-full object-cover '/>

    <div className="p-4">

    <h2 className='font-bold mb-2 text-lg text-slate-950'>{name.common}</h2>
      <ul className='flex flex-col items-start justify-start gap-2'>
        <li>Population:{population.toLocaleString()}</li>
        <li>Region:{region}</li>
        <li>Subregion:{subregion}</li>
    </ul>
  </div>

    </article>
    </Link>
   
  )
}

export default Article;