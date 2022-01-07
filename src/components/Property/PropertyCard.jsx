import React from 'react'
import { Card,Row,Col, Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function PropertyCard(props) {

        const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
          }
          
      };
    return (
       <>
       <Container fluid className="">
       <div class="property3 mb-0">
			
					<h3 style={{backgroundColor:"#0001"}}>{props.title}<span><button type="button">See More <i class="fa fa-angle-double-right"></i></button></span></h3>
       <Carousel
  ssr
  partialVisbile
//   deviceType={deviceType}
  itemClass="image-item"
  responsive={responsive}
  slidesToSlide={3}
>
 
          
          <div className="mx-2"> 
       
          <Card className="hotelservicecard  mb-3" style={{ width: '100%' }}>

<Card.Img variant="top" src={props.img} width="100%" height="250px"   alt="job-img3"/>
<Card.Body>
    {/* <Card.Title>Card Title</Card.Title> */}
    <Card.Text>
       

           
    <div class="owl-pro-sale">
								<h3>₹ 45,00,000 <span><i class="fa fa-heart-o float-right"></i></span></h3>
								<p>3 Bds - 3 Ba - 1450 ft2</p>
								<p>My house is near cheriyappilly, North...</p>
								<p>W. COLANGARA, PARAVUR <span>MAR 08</span></p>
							  </div>
              
   

    </Card.Text>

</Card.Body>

</Card>


            
          </div>
   
          <div className="mx-2"> 
       
       <Card className="hotelservicecard  mb-3" style={{ width: '100%' }}>

<Card.Img variant="top" src={props.img} width="100%" height="250px"   alt="job-img3"/>
<Card.Body>
 {/* <Card.Title>Card Title</Card.Title> */}
 <Card.Text>
    

        
 <div class="owl-pro-sale">
                             <h3>₹ 45,00,000 <span><i class="fa fa-heart-o float-right"></i></span></h3>
                             <p>3 Bds - 3 Ba - 1450 ft2</p>
                             <p>My house is near cheriyappilly, North...</p>
                             <p>W. COLANGARA, PARAVUR <span>MAR 08</span></p>
                           </div>
           


 </Card.Text>

</Card.Body>

</Card>


         
       </div>

    
       <div className="mx-2"> 
       
          <Card className="hotelservicecard  mb-3" style={{ width: '100%' }}>

<Card.Img variant="top" src={props.img}  width="100%" height="250px"   alt="job-img3"/>
<Card.Body>
    {/* <Card.Title>Card Title</Card.Title> */}
    <Card.Text>
       

           
    <div class="owl-pro-sale">
								<h3>₹ 45,00,000 <span><i class="fa fa-heart-o float-right"></i></span></h3>
								<p>3 Bds - 3 Ba - 1450 ft2</p>
								<p>My house is near cheriyappilly, North...</p>
								<p>W. COLANGARA, PARAVUR <span>MAR 08</span></p>
							  </div>
              
   

    </Card.Text>

</Card.Body>

</Card>


            
          </div>
   
       
          <div className="mx-2"> 
       
          <Card className="hotelservicecard  mb-3" style={{ width: '100%' }}>

<Card.Img variant="top" src={props.img}  width="100%" height="250px"   alt="job-img3"/>
<Card.Body>
    {/* <Card.Title>Card Title</Card.Title> */}
    <Card.Text>
       

           
    <div class="owl-pro-sale">
								<h3>₹ 45,00,000 <span><i class="fa fa-heart-o float-right"></i></span></h3>
								<p>3 Bds - 3 Ba - 1450 ft2</p>
								<p>My house is near cheriyappilly, North...</p>
								<p>W. COLANGARA, PARAVUR <span>MAR 08</span></p>
							  </div>
              
   

    </Card.Text>

</Card.Body>

</Card>


            
          </div>
   
       
       
          
       

        
         

 
        
         

        
    

</Carousel>

</div>

        </Container>
        </>
    )
    

}
