
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

export const ImageWLoading = ({ src, scale, index }: { src: string, scale: number, index: number }) => {

    const clickedIndex = useContext(ImageViewerContext)

    const [isLoading, updateLoading] = useState(true);

    return (
        <>
            {isLoading ? <Skeleton height={'100%'} style={{ lineHeight: '2' , margin: '8px' }} highlightColor='#ffffff' baseColor='#dadada' /> : ''}
            <motion.div initial={{ x: 500 }} animate={{ x: 0 }} style={{ height: isLoading ? '0' : `inherit`, width: isLoading ? '0' : `inherit`, margin: '8px' }} onClick={() => {
                clickedIndex.i = index;
                clickedIndex.state(true);
            }}>
                <Image style={{ borderRadius: '4px' }} src={src} width={scale} height={scale} onLoadingComplete={() => updateLoading(false)} layout='responsive' />
            </motion.div>
        </>
    )

}

// export default ImageContainer
