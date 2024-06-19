import React from 'react'
import {Link} from 'react-router-dom'
import cart from '../../Assets/shopping-cart (1).png'
import bbm_logo from '../../Assets/BBM_ECOMM.png'


export default function Navbar() {
  return (
    <nav>
        <div>
            <div>
                <img src={bbm_logo} alt="" />
            </div>
            <div>
            <div className=''>
                <Link to='/'>Home</Link>
                <Link to='/apparel'>Apparel</Link>
                <Link to='/technology'>Technology</Link>
                <Link to='/drinkware'>Drinkware</Link>
                <Link to='/bags'>Bags</Link>
                <Link to='/office'>Office</Link>
            </div>
            <div>
                <Link to='/login'>Login</Link>
                <div>
                    <Link to={'/carts'}>
                        <img src={cart} alt="" />
                    </Link>
                    <div>10</div>
                </div>
                
            </div>
            </div>
            
        </div>
    </nav>
  )
}
