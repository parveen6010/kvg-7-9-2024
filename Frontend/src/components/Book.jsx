import React from 'react'
import { Link } from 'react-router-dom'

export const Book = () => {
  return (
    <div className='' >
        <Link to={"/"}>
            <div className=' md:text-[60%] sm:text-[60%] py-3 px-5 rounded-md bg-[#57E226] font-inter font-semibold min-[320px]:p-2 min-[320px]:text-[70%]  sm:py-3 sm:px-5'>Know More</div>
        </Link>
    </div>
  )
}
