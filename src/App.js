import "./styles.css";
import { useState } from "react";
import Image1 from "./assets/image1.jpeg";
import Image2 from "./assets/image2.jpeg";
import Image3 from "./assets/image3.jpeg";
import Image4 from "./assets/image4.jpeg";
import Image5 from "./assets/image5.jpeg";
import Image6 from "./assets/image6.jpeg";


const App = () => {

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];                    //storing images into an array 
 
  const [currentImage, setCurrentImage] = useState(0);

  const clickHandler = () => {                                                       //function defining click action on images

    const length = images.length - 1;

    setCurrentImage((currentImage)=>{                                               //declaring call-back function for setCurrenctImage 
      if(currentImage < length){
        return currentImage + 1; 
      }
      else{
        return 0;
      }
    });
  };

  return ( 
    <section>   
      <header>                                                              
        <h1>Hyper.</h1>                                                                                                                         
        <h2>A Photography Project By <br /> Akhilesh Kannoth</h2>                          
      </header>

      <figure>
        <h3>{currentImage+1}/{images.length}</h3>                                            
        <img alt="" src = {images[currentImage]} onClick={clickHandler}/>                     
      </figure>
    
    </section>
  );
}

export default App;
