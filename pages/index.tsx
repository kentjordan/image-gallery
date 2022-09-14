import type { NextPage } from 'next'
import { ImageWLoading } from 'components/Image';

import { createContext, useState } from 'react';
import { motion } from 'framer-motion';

let clickedImage: { index: number, state: any } = {
  index: 0,
  state: undefined
};

export const ImageViewerContext = createContext(clickedImage);

const images: JSX.Element[] = [];

(() => {

  const squared = 3000;

  for (let i = 0; i < 27; i++)

    images.push(<ImageWLoading key={i} src={`https://picsum.photos/${squared}?random=${i}`} index={i} scale={squared} />)

  return images;

})();

const Home: NextPage = () => {

  const [openViewer, setOpenViewer] = useState(false);
  clickedImage.state = setOpenViewer;

  // Image Viewer Style
  const imgViewerStyle = {
    display: openViewer ? 'flex' : 'none',
  }

  // Image on-page Container style
  const imgOnPageCtrStyle = {
    width: '200px',
    height: '200px',
    margin: '8px'
  }

  return (
    <div className='home'>

      <div className='preamble'>
        <h1 >Image Gallery</h1>
        <p>A simple image gallery by K. Jordan ❤️</p>
      </div>

      <div className='images-on-page'>
        {
          images.map((e, i) => <motion.div key={i} whileHover={{ scale: 1.25, margin: '24px' }} style={imgOnPageCtrStyle} >{e}</motion.div>)
        }
      </div>

      <ImageViewerContext.Provider value={clickedImage}>

        <div className='image-viewer' onClick={() => setOpenViewer(false)} style={imgViewerStyle}>
          <div className='container'>{images[clickedImage.index]}</div>
        </div>

      </ImageViewerContext.Provider>

    </div >
  )
}

export default Home
