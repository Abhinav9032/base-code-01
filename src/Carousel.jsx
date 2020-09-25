import React , {useState , useEffect }  from 'react'

function Carousel() {

    const [imageDetails, setImageDetails] = useState([]);

    const [count, setCount] = useState(0);

    //let carouselItemsList = [];

    let iteration = 1;

    const [carouselItemsList , setCarouselItemsList] = useState([]);
    useEffect(() => {
        console.log('use Effect called' ,imageDetails)
        fetch('http://localhost:5000/storage/getImagesForCarousel')
        .then(res => res.json())
        .then((data) => {
         // console.log(data);
          setImageDetails(data);
          setCarouselItemsList(imageDetails.map( item => {
            return(
          <CarouselItem 
          key= {item.id}
          imageUsed={item.imageUsed}
          captionHead={item.captionHead}
          captionSmall={item.captionSmall}
          />
          )
     
        }))
       
      });

     // console.log('Carr Items ',carouselItemsList);
      
    },[imageDetails.length]);


    return (
        <div className="carousel-container-wide">
 <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active " >
      <img id="bg-img-carr"
     src="https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/1600958445479-Screenshot_2020-09-21_at_6.17.46_PM.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block " id="carousel-text">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

    {carouselItemsList}

   
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
    )

}


function CarouselItem(props){
    return(
    <div className="carousel-item">
      <img src={props.imageUsed} className="d-block w-100" alt="props.alt"/>
      <div className="carousel-caption d-none d-md-block" id="carousel-text">
        <h5>{props.captionHead}</h5>
        <p>{props.captionSmall}</p>
      </div>
    </div>
    )
}

export default Carousel
