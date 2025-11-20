'use client'

import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const toggleMenu = () => {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        sidebar?.classList.toggle('open-sidebar');
        overlay?.classList.toggle('block!');
    };

    return (
        <header
            id="header"
            className="fixed inset-x-0 top-0 z-10 border-b-2 border-white/10 py-4 md:py-6 lg:z-30 lg:pl-[300px] lg:pr-4"
        >
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href="/" className="w-40 md:w-52">
                        <Image src="/assets/images/logo.png" alt="logo" className="w-full" width={208} height={58} />
                    </Link>
                    <button
                        type="button"
                        className="wallet-btn relative hidden bg-primary p-3.5 text-lg text-black shadow-[4px_4px_0_#0D804F] duration-500 after:absolute after:top-0 after:left-0 after:z-[-1] after:h-full after:w-0 after:duration-300 hover:bg-transparent hover:text-white hover:after:left-auto hover:after:right-0 hover:after:w-full lg:block"
                    >
                        Connect wallet
                    </button>
                    <button type="button" onClick={() => toggleMenu()} className="block space-y-2 lg:hidden">
                        <span className="sr-only">Toggle menu</span>
                        <span className="block h-0.5 w-9 bg-linear-to-r from-primary via-tertiary to-secondary"></span>
                        <span className="block h-0.5 w-9 bg-linear-to-r from-primary via-tertiary to-secondary"></span>
                        <span className="block h-0.5 w-9 bg-linear-to-r from-primary via-tertiary to-secondary"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
