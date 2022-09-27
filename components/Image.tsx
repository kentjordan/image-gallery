
import { motion } from 'framer-motion';

import Image from 'next/image'
import { useEffect, useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import { useContext } from 'react';

import { ImageViewerContext } from 'pages';

// const ImageContainer = ({ src, w, h, index }: { src: string, w: number, h: number, index: number }) => {


//     const context = useContext(ImageViewerContext);

//     return (
//         <motion.div
//             onClick={() => {
//                 context.i = index;
//             }}
//             style={{ margin: '8px', height: `${250}px`, width: `${250}px`, borderRadius: '4px' }}
//             initial={{ boxShadow: "none", }}
//             whileHover={{ scale: 1.5, zIndex: 1, boxShadow: "0 0 16px rgba(0, 0, 0, 0.5)" }}>
//         </motion.div>
//     )
// }

// export default ImageContainer

const imgStyle = {
    borderRadius: '4px',
    cursor: 'pointer'
}

interface ImageWLoading {
    src: string,
    scale: number,
    index: number
};

export const ImageWLoading = ({ src, scale, index }: ImageWLoading) => {

    const clickedImage = useContext(ImageViewerContext)

    const [isLoading, updateLoading] = useState(true);

    const canvasOnClick = () => {
        clickedImage.index = index;
        clickedImage.state(true);
    }

    const getHW = () => isLoading ? '0' : `inherit`

    const canvasStyle = {
        height: getHW(),
        width: getHW(),
        margin: '8px'
    }

    return (
        <>
            {isLoading && <Skeleton height={'100%'} style={{ lineHeight: '2', margin: '8px' }} highlightColor='#ffffff' baseColor='#dadada' />}

            <motion.div initial={{ scale: 0.1 }} animate={{ scale: 1 }} style={canvasStyle} onClick={canvasOnClick}>
                <Image layout='responsive' src={src} width={scale} height={scale} style={imgStyle} onLoadingComplete={() => updateLoading(false)} />
            </motion.div>

        </>)
}
