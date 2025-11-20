'use client'
import  { useRef } from 'react';
import Modal from './Modal';
import Image from 'next/image';

const AboutUsModal = () => {
    const dialog: any = useRef(null);

    return (
        <>
            <div className="group relative bottom-0 col-span-3 mx-auto h-52 w-52 overflow-hidden rounded-full bg-linear-to-b from-white/10 to-transparent duration-300 md:hover:scale-150 xl:absolute xl:left-1/2 xl:-translate-x-1/2">
                <button
                    type="button"
                    className="absolute left-1/2 bottom-7 z-1 -translate-x-1/2 rounded-full duration-300 group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:bg-white"
                    data-fancybox
                    data-src="#dummy-video"
                    onClick={() => dialog.current.open()}
                >
                    <Image src="/assets/images/play.svg" alt="play" width={54} height={54}/>
                </button>
                <div className="absolute inset-0 h-full w-full opacity-0 duration-300 group-hover:opacity-100">
                    <video src="assets/images/dummy-video.mp4" className="h-full w-full object-cover" autoPlay playsInline muted={true} loop={true}></video>
                </div>
            </div>
            <Modal
                ref={dialog}
                width="960"
                closeByOverlay={true}
                closeBtn={true}
                closeStyle="floating"
                contentClass="pt-8 px-0 pb-0 bg-transparent!"
                closeBtnClass="top-0! right-0 text-white! text-3xl!"
                modal={false}
            >
                <div id="dummy-video" className="dark:bg-gray-dark w-[960px] max-w-full bg-black p-4">
                    <div className="aspect-video">
                        <video src="assets/images/dummy-video.mp4" className="h-full w-full object-cover" autoPlay playsInline muted={true} loop={true}></video>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AboutUsModal;
