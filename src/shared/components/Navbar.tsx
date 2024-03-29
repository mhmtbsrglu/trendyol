import React from 'react'
import TopSearch from './TopSearch'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='border-b w-full p-2'>
        <div className='flex mx-auto container max-w-7xl gap-5 justify-between'>
          <div>
            <svg className='w-40' viewBox="0 0 111 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.69 23.7401H27.12C27.7 26.1001 29.61 27.8801 32.1 27.8801C33.5 27.8801 34.88 27.2801 35.8 26.2401L38.84 26.3101C37.5 28.8501 34.95 30.4801 31.99 30.4801C27.67 30.4801 24.27 26.7301 24.27 22.4901C24.27 18.1101 27.61 14.5201 32.05 14.5201C36.35 14.5201 39.78 18.0601 39.78 22.3301C39.77 22.7901 39.74 23.2901 39.69 23.7401ZM32.01 17.1101C29.55 17.1101 27.27 19.0501 27.11 21.5501H36.91C36.76 19.0701 34.49 17.1101 32.01 17.1101ZM52.28 30.1001V21.8601C52.28 19.2901 51.51 17.1201 48.49 17.1201C45.7 17.1201 44.49 19.2801 44.49 21.8401V30.1101H41.65V14.9301H44.31V16.5401H44.36C45.46 15.0901 47.05 14.5101 48.8 14.5101C50.96 14.5101 52.99 15.3601 54.17 17.2201C54.9 18.3701 55.13 19.7601 55.13 21.1101V30.1001H52.28ZM70.27 30.1001V27.9401H70.22C68.96 29.7001 66.96 30.4801 64.85 30.4801C60.3 30.4801 56.96 27.0901 56.96 22.5701C56.96 18.0201 60.25 14.5101 64.85 14.5101C66.76 14.5101 68.79 15.2401 70 16.7801H70.05V9.83008H72.89V30.1001H70.27ZM65.01 17.1101C62 17.1101 59.81 19.5701 59.81 22.5401C59.81 25.3801 62.09 27.8901 64.99 27.8901C67.95 27.8901 70.27 25.4801 70.27 22.5401C70.27 19.5001 68.11 17.1101 65.01 17.1101ZM81.14 35.1701H78.19L80.4 29.8001L74.35 14.9301H77.42L81.89 26.7101L86.46 14.9301H89.53L81.14 35.1701ZM97.63 30.4801C93.16 30.4801 89.44 26.8901 89.44 22.4001C89.44 17.9301 93.25 14.5101 97.63 14.5101C102.07 14.5101 105.82 17.9601 105.82 22.4501C105.82 26.7801 102.23 30.4801 97.63 30.4801ZM97.63 17.1101C94.67 17.1101 92.28 19.5201 92.28 22.4801C92.28 25.4401 94.66 27.8801 97.63 27.8801C100.62 27.8801 102.98 25.4201 102.98 22.4601C102.97 19.5001 100.58 17.1101 97.63 17.1101ZM108.14 30.1001V9.83008H111V30.1001H108.14ZM2.82 27.1101C2.94 27.5901 3.1 27.9901 3.28 28.2901C3.46 28.5901 3.7 28.8501 3.97 29.1001C4.87 29.8901 6.01 30.2901 7.36 30.2901C8.7 30.2901 9.95 29.9601 11.09 29.3301V26.6001C9.91 27.2901 8.78 27.6501 7.72 27.6501C6.28 27.6501 5.53 26.7701 5.53 25.0301V17.6001H10.31V14.9701H5.56V10.1001H2.74V14.9601H0V17.5901H2.62V24.3301C2.62 25.7001 2.69 26.6301 2.82 27.1101ZM20.05 17.4701C20.93 17.4701 21.9 17.9501 22.93 18.9201L24.48 16.3501C23.22 15.2001 21.7 14.6701 20.81 14.6701H20.61C19.59 14.6701 17.88 14.6701 16.5 16.9201L16.45 17.0101L16.46 14.9701H13.51V30.0101H16.46V22.1501C16.46 20.8901 16.81 19.7901 17.52 18.8601C18.23 17.9401 19.08 17.4701 20.05 17.4701Z" fill="black"/>
</svg>
          </div>
          <div className='flex flex-[0.5] items-center'>
          <TopSearch/>  
          </div>
 <div className='flex flex-[0.3] items-center '>
          <ul className='flex items-center gap-5'>
            <li className='flex items-center gap-2'>
                <span>
                    <svg viewBox="0 0 24 24" className='w-5' focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-sc-ea9ulj-0 hRnJPC"><title>User icon</title><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                </span>
                <span className='text-sm'>
                    Giriş Yap
                </span>
            </li>
            <li className='flex items-center gap-2'>
                <span>
                   <svg viewBox="0 0 16 16" className='w-5' focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-sc-ea9ulj-0 hRnJPC"><title>Heart icon</title><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path></svg>   
                  </span>
                <span className='text-sm'>
                    Favorilerim
                </span>
            </li>
             <li className='flex items-center gap-2'>
                <span>
                  <svg viewBox="0 0 16 16" className='w-5' focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-sc-ea9ulj-0 hRnJPC"><title>Cart icon</title><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                </span>
                <span className='text-sm'>
                    Sepetim
                </span>
            </li>
          </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar