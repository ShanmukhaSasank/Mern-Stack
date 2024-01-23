<<<<<<< HEAD

import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../Constants/data';
import {styled} from '@mui/material'

=======
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {bannerData} from '../../constants/data';
import {styled} from '@mui/material';

const Image = styled('img')({
    height : 240,
    width : '100%'
})
>>>>>>> origin/SHA-1-Header
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

<<<<<<< HEAD
  const Image =styled('img')({
    height:240 ,
    width: '100%'
  })

const Banner = () =>{
    return(
        <Carousel 
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        responsive={responsive}
        slidesToSlide={1}
        infinite={true}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        >
            {
                bannerData.map(data =>(
                        <Image src={data.url} alt="banner"/>
                ))
            }
=======
const Banner = () =>{
    
    return(
        <Carousel  
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        >
            {
                bannerData.map(data=>(
                    <Image src={data.url} alt="Banners" />
                ))
            }

>>>>>>> origin/SHA-1-Header
        </Carousel>
    )
}

export default Banner;