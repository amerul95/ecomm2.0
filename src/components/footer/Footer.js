import React from 'react'
import bbm_small from '../../Assets/BBM logo 2024 - carrd-11.png'
import './footer.css'
import { Link } from 'react-router-dom';
import whatsapp_icon from '../../Assets/whatsapp-icon.png'
import facebook_icon from '../../Assets/facebook-icon.png'
import instagram_icon from '../../Assets/instagram-icon.png'
import youtube_icon from '../../Assets/youtube-icon.png'
import tiktok_icon from '../../Assets/tiktok-icon.png'

export default function footer() {
  return (
    <footer className='footer'>
        <div className='max-w-7xl px-2 mx-auto sm:px-6 lg:px-8 '>
         <div className='sm:flex basis-1 justify-between'>
            <div>
                <Link to='/'><img className='w-36 sm:w-48' src={bbm_small} alt="" /></Link>
                <p>Customer Guarantee</p>
                <p>We promise 100% satisfaction. Customer happiness is our top priority</p>
                <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="M10.036 8.278l9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
        </div>
        <input
          type="text"
          id="email"
          className="outline-none max-w-xs bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full ps-10 p-2.5"
          placeholder="bbmecom@bbm.com"
        />
      </div>
            </div>
            <div>
                <div className='text-lg font-medium'>Information</div>
                <ul className='text-gray-600'>
                    <li>
                        <Link>About Us</Link>
                    </li>
                    <li>
                        <Link>Payment</Link>
                    </li>
                    <li>
                        <Link>Shipping</Link>
                    </li>
                    <li>
                        <Link>Returns & refunds
                        </Link>
                    </li>
                    <li>
                        <Link>Contact Us</Link>
                    </li>
                    <li>
                        <Link>FAQs</Link>
                    </li>
                    <li>
                        <Link>Site Map
                        </Link>
                    </li>
                    <li>
                        <Link>Our Clients</Link>
                    </li>
                    <li>
                        <Link>Customer Review</Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className='text-lg font-medium'>Popular Products</div>
                <ul>
                    <li>
                        <Link className='text-gray-600'>T-Shirts</Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Ceramic Mugs
                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Non Woven Bags</Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Lanyards</Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Button Badges</Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>AStationaries
                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Displays
                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Papers
                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Polo Shirts
                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Vacuum Flasks

                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Canvas Bags

                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>ID Cards

                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Keychains

                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Electronics
                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Sport Accessories

                        </Link>
                    </li>
                    <li>
                        <Link className='text-gray-600'>Umbrellas
                        </Link>
                    </li>

                </ul>
            </div>
            <div>
                <div className='text-lg font-medium'>Contact</div>
                <ul className='flex-col flex gap-2'>
                    <li className='inline-flex items-center gap-4'>
                        <img src={whatsapp_icon} alt="" />
                        <Link className='text-gray-600'>WhatsApp</Link>
                    </li>
                    <li className='inline-flex items-center gap-4'>
                        <img src={facebook_icon} alt="" />
                        <Link className='text-gray-600'>Facebook</Link>
                    </li>
                    <li className='inline-flex items-center gap-4'>
                        <img src={instagram_icon} alt="" />
                        <Link className='text-gray-600'>Instagram</Link>
                    </li>
                    <li className='inline-flex items-center gap-4'>
                        <img src={youtube_icon} alt="" />
                        <Link className='text-gray-600'>Youtube</Link>
                    </li>
                    <li className='inline-flex items-center gap-4'>
                        <img src={tiktok_icon} alt="" />
                        <Link className='text-gray-600'>Tiktok</Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </footer>

  )
}
