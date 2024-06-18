import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ onUploadClick }) => {
    return (
        <header className="p-4 flex justify-between items-center">
            <Link href={'/'}>
                <Image 
                src={'/FULL_LOGO_COLOR.png'}
                alt='Learnwell Logo'
                width={120}
                height={0}
                />
            </Link>
            <button 
                className="text-white bg-blue-500 px-4 py-2 rounded-full" 
                onClick={onUploadClick}
            >
                Upload
            </button>
        </header>
    );
};

export default Header;
