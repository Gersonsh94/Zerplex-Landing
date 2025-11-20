'use client';
import { PropsWithChildren, useEffect } from 'react';
import AOS from 'aos';

function App({ children }: PropsWithChildren) {
    useEffect(() => {
        setOnScroll();
        window.onscroll = function () {
            setOnScroll();
        };
    }, []);
    const setOnScroll = () => {
        let scrollpos = window.scrollY;
        if (scrollpos > 0) {
            document.getElementById('header')?.classList.add('fix');
        } else {
            document.getElementById('header')?.classList.remove('fix');
        }
    };

    const toggleMenu = () => {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        sidebar?.classList.toggle('open-sidebar');
        overlay?.classList.toggle('block!');
    };
    useEffect(() => {
        const screen_loader = document.getElementsByClassName('screen_loader');
        if (screen_loader?.length) {
            setTimeout(() => {
                document.body.removeChild(screen_loader[0]);
            }, 800);
        }
        AOS.init({ once: true });
    }, []);

    return (
        <>
            <div className="screen_loader fixed inset-0 z-60 grid place-content-center bg-black">
                <div className="lds-hourglass relative inline-flex h-20 w-20 after:m-2 after:block after:h-0 after:w-0 after:rounded-full after:border-32 after:border-primary after:border-r-transparent after:border-l-transparent"></div>
            </div>
            <div onClick={toggleMenu} className="overlay fixed inset-0 z-20 hidden bg-black/60"></div>
            {children}
        </>
    );
}

App.displayName = 'App';
export default App;
