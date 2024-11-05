import React from 'react';
import "./CategoryNavbar.css";

const CategoryNavbar = () => {
  return (
    <>
        <div className='CNav-main'>
            <ul className='CNav-ul'>
                <li className='CNav-li'>All</li>
                <li className='CNav-li'>Men's Clothing</li>
                <li className='CNav-li'>Women's Clothing</li>
                <li className='CNav-li'>Electronics</li>
                <li className='CNav-li'>Jwelery</li>
            </ul>
        </div>
    </>
  )
}

export default CategoryNavbar
