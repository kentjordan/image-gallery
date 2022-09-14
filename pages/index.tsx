import type { NextPage } from 'next'
import { ImageWLoading } from 'components/Image';

import { createContext, useState } from 'react';
import { motion } from 'framer-motion';

let clickedIndex: { i: number, state: any } = {
  i: 0,
  state: undefined
};

export const ImageViewerContext = createContext(clickedIndex);

const images: JSX.Element[] = [];

(() => {

  const squared = 3000;

  for (let i = 0; i < 27; i++)

    images.push(<ImageWLoading key={i} src={`https://picsum.photos/${squared}?random=${i}`} index={i} scale={squared} />)

  return images;

})();

const Home: NextPage = () => {

  const [openViewer, setOpenViewer] = useState(false);

  clickedIndex.state = setOpenViewer;


  return (
    <div className='home'>

      <div className='preamble'>
        <h1 >Image Gallery</h1>
        <p>A simple image gallery viewer made w/ NEXT & React ❤️</p>
      </div>

      <div className='images-container'>
        {images.map((e, i) => <motion.div key={i} style={{ width: '200px', height: '200px', margin: '8px' }} whileHover={{ scale: 1.25, margin: '24px' }} >{e}</motion.div>)}
      </div>

      <ImageViewerContext.Provider value={clickedIndex}>

        <div className='image-viewer' onClick={() => setOpenViewer(false)} style={{ display: openViewer ? 'flex' : 'none', backgroundColor: '#000000a7', width: '100vw', height: '100vh', position: 'fixed' }}>

          <div className='container'>
            {images[clickedIndex.i]}
          </div>

        </div>

      </ImageViewerContext.Provider>

    </div >
  )
}

export default Home
