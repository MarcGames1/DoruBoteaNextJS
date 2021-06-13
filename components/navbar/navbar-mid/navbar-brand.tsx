import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const NavBarBrand = () => {

    return <Link href="/">
    <a>
    <Image src='/assets/images/logo.png' objectFit="contain" layout="fixed"  width={60}
    height={60} />
    </a>
    </Link>
}

export default NavBarBrand