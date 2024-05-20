import React from 'react';
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";
import { useRef } from 'react';
const App = () => {

  const images = [
    {
      original: "https://aedownload.com/wp-content/uploads/2022/06/Healthy-Food-copy.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/651c25b0-2d60-43c8-addf-1df2fd575568/2022/02/07/e5e27497-1b78-4d63-b0f9-7b1961fd9f6f/44e19141-6f82-449f-9f94-b2eb49eeb4f8.png",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1543353071-873f17a7a088%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dfood%252Bpresentation%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8M3x8Zm9vZCUyMHByZXNlbnRhdGlvbnxlbnwwfHx8fDE3MTU3MjYxMDZ8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const slideshowref = useRef()
 const playSlides = () => {
  slideshowref.current.play()
 }
  return (
    <div>
      <h1>Hello Codesandbox</h1>
      <ImageGallery 
      ref={slideshowref}
      items={images}
      showPlayButton={true}
      showFullscreenButton={true}
      slideInterval={1000}
      slideOnThumbnailOver={false}
      showIndex={true}
      onPlay={() =>{
        alert(' Talant :  - Slideshow is playing')
      }}/>
      <button type='btn' onClick={playSlides} >Play</button>
    </div>
  )
}

export default App