import React from 'react'
import {Link} from 'react-router-dom'
import  '../pages/Navbar.css'
const Navbar = () =>{
    
    return(
        <nav className = "navbar">
            <Link to ="/" className ="logo">Logo</Link>
            <ul className ="nav-links">
                <Link to ="/" className ="dienthoai">
                    {/* <PhoneIphoneIcon className="icon"/> */}
                    <li>Điện Thoại</li>
                    {/* <i class="fas fa-mobile-alt"></i> */}
                </Link>
                <Link to ="/ipad" className ="ipad">
                    <li>Ibad</li>
                </Link>
                <Link to ="/donghothongminh" className ="donghothongminh">
                    <li>Đồng hồ thông minh</li>
                </Link>
                <Link to ="/phukien" className ="phukien">
                    <li>Phụ kiện</li>
                </Link>
                <Link to ="/giohang" className ="giohang">
                    <li>Giỏ hàng</li>
                </Link>
            </ul>

        </nav>

    )
}
export default Navbar