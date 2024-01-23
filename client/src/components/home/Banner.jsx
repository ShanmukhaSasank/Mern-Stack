import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {bannerData} from '../../constants/data';
import {styled} from '@mui/material';

const Image = styled('img')({
    height : 240,
    width : '100%'
})

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
        </Carousel>
    )
}

export default Banner;