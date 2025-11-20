'use client';

import { Player } from '@lottiefiles/react-lottie-player';

const Lottieplayer = (props: any) => {
    return (
        <Player
            src={props.src}
            background="transparent"
            speed={props.speed}
            loop
            autoplay
            className={props.className}
        />
    );
};

export default Lottieplayer;
