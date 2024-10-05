import axios from 'axios'
import React, { useState } from 'react'

const DropdownItem = () => {
    const [dropdown, setDropdown] = useState([])
    const getDataDropdown = async () => {
        const response = await axios.get("../../../a.json")
        const shopPopcorn = await response.data.shop_popcorn
        setDropdown(shopPopcorn)
        console.log(dropdown)
    }

    return (
        <section className='dropdown-section'>
            <div className="dropdown-content">
                {dropdown && dropdown.map((item=>{
                    return(
                        <h4>{item}</h4>
                    )
                }))}
            </div>
        </section>
    )
}

export default DropdownItem