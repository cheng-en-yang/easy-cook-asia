import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Marketplace</Link>
                <Link to="/about-us">About Us</Link>
            </nav>    
        </div>
    )
}