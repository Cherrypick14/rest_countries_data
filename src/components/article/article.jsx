import React from 'react'

const Article = ({flags,name, population,region,subregion}) => {
  return (

    <article>

        <img src={flags.svg} alt="" className='md:h-72 w-full object-cover '/>
        <h2 className='font-bold mb-2 text-lg text-slate-950'>{name.common}</h2>
        <ul className='flex flex-col items-start justify-start gap-2'>
            <li>Population:{population.toLocaleString()}</li>
            <li>Region:{region}</li>
            <li>Subregion:{subregion}</li>
        </ul>
    </article>
  )
}

export default Article;