import "./HomeBrands.css";
import { homebrand } from "../../../../Data/Data";
import Carousel from "react-multi-carousel";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 740 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 740, min: 0 },
      items: 1,
    },
  };




const HomeBrands = () => {
  return (
    <>

    <div className="home-brands-carousel-container">
    <h1  >Shop By <span style={{color:"orange"}}>Brands</span> </h1>


   

<Carousel

responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
      
>

{homebrand.map((key)=>{



return <div className="brand-card-container">
<img src={key.img} alt="brands" width="100%" height="100%" />
</div>


})}

</Carousel>
 </div>
    </>
  )
}

export default HomeBrands
