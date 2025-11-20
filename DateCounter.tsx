'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const DateCounter = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    useEffect(() => {
        const countDownDate = new Date('April 28, 2024 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(days.toString().padStart(2, '0'));
            setHours(hours.toString().padStart(2, '0'));
            setMinutes(minutes.toString().padStart(2, '0'));
            setSeconds(seconds.toString().padStart(2, '0'));

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="relative mt-12 flex flex-wrap justify-between gap-x-2 border-2 border-tertiary bg-tertiary/20 p-6 pt-10 text-center text-sm font-medium leading-7 sm:text-base md:mt-20 xl:max-w-lg">
            <div className="space-y-1 mt-px -mb-0.5">
                <span id="days" className="text-lg font-semibold sm:text-[26px]">
                    {days}
                </span>
                <h2 className="opacity-50">Days</h2>
            </div>
            <div className="space-y-1 mt-px -mb-0.5">
                <span id="hours" className="text-lg font-semibold sm:text-[26px]">
                    {hours}
                </span>
                <h2 className="opacity-50">Hours</h2>
            </div>
            <div className="space-y-1 mt-px -mb-0.5">
                <span id="minutes" className="text-lg font-semibold sm:text-[26px]">
                    {minutes}
                </span>
                <h2 className="opacity-50">Minutes</h2>
            </div>
            <div className="space-y-1 mt-px -mb-0.5">
                <span id="seconds" className="text-lg font-semibold sm:text-[26px]">
                    {seconds}
                </span>
                <h2 className="opacity-50">Seconds</h2>
            </div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-linear-to-r from-secondary to-primary py-2 px-4 text-xl">
                Token sale end in
            </div>
            <Image
                src="/assets/images/star-way.png"
                alt="star-way"
                className="absolute left-full"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-delay="800"
                width={508}
                height={208}
            />
        </div>
    );
};

export default DateCounter;
