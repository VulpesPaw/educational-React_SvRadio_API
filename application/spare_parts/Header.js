import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <h1 className='center_text header dsc-lgt'>∴ Swedish Radio Api -.- React ∴ </h1>

            <nav className='center_text dsc-lgt flex'>
                {/* Navigation links for Router element */}
                <Link to='/' className='flex_item'>
                    Homepage
                </Link>
                <p className='flex_item ' id='f0'>
                    -.-
                </p>
                <Link to='/about' className='flex_item'>
                    About
                </Link>
            </nav>
        </>
    );
}
