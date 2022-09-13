import type { NextPage } from 'next'
import ImageContainer from 'components/Image';

const GenerateImages = () => {

  const images = [];

  for (let i = 0; i < 50; i++)

    images.push(<ImageContainer key={i} src={`https://picsum.photos/2500?random=${i + 1}`} w={200} h={200} />)

  return images;

}

const Home: NextPage = () => {
  return (
    <div className='home'>

      <div className='preamble'>
        <h1>Image Gallery</h1>
        <p>Just a simple image gallery viewer made with NEXT and React. By Kent ❤️</p>
      </div>

      <div className='images-container'>
        {
          GenerateImages()
        }
      </div>

    </div>
  )
}

export default Home
