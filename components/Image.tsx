
import { motion } from 'framer-motion';

import Image from 'next/image'
import { useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const ImageContainer = ({ src, w, h }: { src: string, w: number, h: number }) => {

    const [isLoading, updateLoading] = useState(true);

    return (
        <motion.div

            style={{ margin: '8px', height: `${h}px`, width: `${w}px`, borderRadius: '4px' }}
            initial={{ boxShadow: "none", }}
            whileHover={{ scale: 1.5, zIndex: 2, boxShadow: "0 0 16px rgba(0, 0, 0, 0.5)" }}>

            {
                isLoading && <Skeleton height={h} highlightColor='#ffffff' baseColor='#f0f0f0'></Skeleton>
            }

            <Image
                style={{ borderRadius: '4px' }}
                src={src}
                width={w}
                height={h}
                onLoadingComplete={() => updateLoading(false)}>

            </Image>



        </motion.div>
    )
}

export default ImageContainer
