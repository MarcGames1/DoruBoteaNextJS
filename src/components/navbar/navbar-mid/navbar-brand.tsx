import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBarBrand = () => {
  return (
    <Link href="/">
      <Image
        alt="Logo Avocat Doru Botea"
        src="/assets/images/logo.webp"
        layout="fixed"
        width={60}
        height={60}
      />
    </Link>
  );
};

export default NavBarBrand;
