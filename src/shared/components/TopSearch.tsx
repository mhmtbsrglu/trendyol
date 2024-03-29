import React from 'react'

type Props = {}

function TopSearch({}: Props) {
  return (
    <div className='p-2 bg-trendyol-light-1 flex-1 h-10 items-center flex rounded'>
        <input type="text" placeholder='Aradığınız ürün, kategori veya markayı yazınız' className='placeholder:text-sm h-full flex-1 bg-transparent ring-0 outline-none' />
        <div className='p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="#F27A1A" d="M18.711 17.306l-4.684-4.703a7.49 7.49 0 0 0 1.864-4.932C15.891 3.441 12.327 0 7.946 0S0 3.441 0 7.671s3.565 7.671 7.946 7.671a8.056 8.056 0 0 0 4.552-1.388l4.72 4.74c.197.197.462.306.746.306.27 0 .525-.1.718-.28a.977.977 0 0 0 .03-1.414zM7.946 2.001c3.238 0 5.873 2.544 5.873 5.67 0 3.127-2.635 5.67-5.873 5.67-3.239 0-5.873-2.543-5.873-5.67 0-3.126 2.634-5.67 5.873-5.67z"/></svg>
        </div>
    </div>
  )
}

export default TopSearch