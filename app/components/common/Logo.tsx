'use client';

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href='/'>
            <Image src="/icons/logo.png" alt="logo" width={124} height={25} />
        </Link>
    );
}
 
export default Logo;